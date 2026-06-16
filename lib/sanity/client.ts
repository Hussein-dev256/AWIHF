import { createClient, type ClientConfig, type QueryParams } from '@sanity/client';
import { getEnv } from '@/lib/config/env';

type SanityFetchOptions = {
  preview?: boolean;
  revalidate?: number;
  tags?: string[];
};

function getSanityConfig(): ClientConfig | null {
  const env = getEnv();
  if (!env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return null;
  }

  return {
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: env.SANITY_API_VERSION,
    token: env.SANITY_READ_TOKEN,
    useCdn: false,
  };
}

export function isSanityConfigured() {
  return Boolean(getSanityConfig());
}

export function getSanityClient(options: SanityFetchOptions = {}) {
  const config = getSanityConfig();
  if (!config) {
    return null;
  }

  return createClient({
    ...config,
    perspective: options.preview ? 'previewDrafts' : 'published',
  });
}

async function getDraftModeState() {
  try {
    const { draftMode } = await import('next/headers');
    const draft = await draftMode();
    return draft.isEnabled;
  } catch {
    return false;
  }
}

export async function sanityFetch<T>(
  query: string,
  params: QueryParams = {},
  options: SanityFetchOptions = {}
): Promise<T | null> {
  const preview = options.preview ?? await getDraftModeState();
  const client = getSanityClient({ ...options, preview });
  if (!client) {
    return null;
  }

  return client.fetch<T>(query, params, {
    next: {
      revalidate: options.revalidate ?? 60,
      tags: options.tags ?? ['sanity'],
    },
  });
}
