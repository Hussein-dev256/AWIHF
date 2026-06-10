import { NextRequest } from 'next/server';
import { checkRateLimit } from '@/lib/security/rateLimit';
import { hashIp } from '@/lib/security/sanitize';

export async function getSubmissionContext(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const realIp = request.headers.get('x-real-ip');
  const ip = forwardedFor || realIp || 'unknown';
  const userAgent = request.headers.get('user-agent') ?? undefined;
  const rateKey = `${ip}:${request.nextUrl.pathname}`;
  const rateLimit = checkRateLimit(rateKey);

  return {
    allowed: rateLimit.allowed,
    ipHash: await hashIp(ip),
    userAgent,
  };
}
