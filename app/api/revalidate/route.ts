import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { getEnv } from '@/lib/config/env';

export async function POST(request: NextRequest) {
  const env = getEnv();
  const secret = request.headers.get('x-sanity-webhook-secret');

  if (!env.SANITY_WEBHOOK_SECRET || secret !== env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Invalid webhook secret.' }, { status: 401 });
  }

  revalidateTag('sanity', 'max');
  revalidatePath('/');
  revalidatePath('/about');
  revalidatePath('/programs');
  revalidatePath('/impact');
  revalidatePath('/news');
  revalidatePath('/donate');
  revalidatePath('/get-involved');

  return NextResponse.json({ revalidated: true });
}
