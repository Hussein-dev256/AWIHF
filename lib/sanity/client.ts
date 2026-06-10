import { getEnv } from '@/lib/config/env';

type SanityQueryParams = Record<string, string | number | boolean | null>;

function getSanityConfig() {
  const env = getEnv();
  if (!env.SANITY_PROJECT_ID) {
    return null;
  }

  return {
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_DATASET,
    apiVersion: env.SANITY_API_VERSION,
    token: env.SANITY_READ_TOKEN,
  };
}

export async function sanityFetch<T>(query: string, params: SanityQueryParams = {}): Promise<T | null> {
  const config = getSanityConfig();
  if (!config) {
    return null;
  }

  const searchParams = new URLSearchParams({ query });
  for (const [key, value] of Object.entries(params)) {
    if (value !== null) {
      searchParams.set(`$${key}`, JSON.stringify(value));
    }
  }

  const url = `https://${config.projectId}.api.sanity.io/v${config.apiVersion}/data/query/${config.dataset}?${searchParams.toString()}`;
  const response = await fetch(url, {
    headers: config.token ? { Authorization: `Bearer ${config.token}` } : undefined,
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Sanity query failed with status ${response.status}`);
  }

  const payload = await response.json() as { result: T };
  return payload.result;
}
