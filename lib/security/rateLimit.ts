import { getEnv } from '@/lib/config/env';

const buckets = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(key: string) {
  const env = getEnv();
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + env.SUBMISSION_RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: env.SUBMISSION_RATE_LIMIT_MAX - 1 };
  }

  if (bucket.count >= env.SUBMISSION_RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetAt: bucket.resetAt };
  }

  bucket.count += 1;
  return { allowed: true, remaining: env.SUBMISSION_RATE_LIMIT_MAX - bucket.count };
}
