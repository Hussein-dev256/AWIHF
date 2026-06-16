import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import { getEnv } from '@/lib/config/env';

function safeRedirectPath(path: string | null) {
  if (!path || !path.startsWith('/') || path.startsWith('//')) {
    return '/';
  }

  return path;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const env = getEnv();
  const secret = searchParams.get('secret');
  const path = safeRedirectPath(searchParams.get('slug') ?? searchParams.get('path'));

  if (!env.SANITY_PREVIEW_SECRET || secret !== env.SANITY_PREVIEW_SECRET) {
    return NextResponse.json({ message: 'Invalid preview token.' }, { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();
  redirect(path);
}
