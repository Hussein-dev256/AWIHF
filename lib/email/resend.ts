import { getEnv, getOrganizationEmail, requireEnv } from '@/lib/config/env';
import { logger } from '@/lib/observability/logger';
import type { EmailMessage } from './templates';

type SendEmailOptions = EmailMessage & {
  to: string;
};

export async function sendEmail(message: SendEmailOptions) {
  const env = getEnv();
  const apiKey = env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured in environment variables.');
  }

  const payload: Record<string, unknown> = {
    from: env.RESEND_FROM_EMAIL,
    to: [message.to],
    subject: message.subject,
    html: message.html,
    text: message.text,
  };

  if (message.replyTo) {
    payload.reply_to = message.replyTo;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    logger.error('resend.api_error', new Error(`Resend API rejected: ${response.status} ${errorText}`));
    throw new Error(`Resend email failed: ${response.status} ${errorText}`);
  }

  return response.json();
}

export async function sendEmailSafely(message: SendEmailOptions) {
  try {
    await sendEmail(message);
    return { ok: true as const };
  } catch (error) {
    logger.error('email.send.failed', error);
    return { ok: false as const, error: 'Email send failed.' };
  }
}

export async function notifyAdmin(message: EmailMessage) {
  return sendEmail({ ...message, to: getOrganizationEmail() });
}

export async function notifyAdminSafely(message: EmailMessage) {
  return sendEmailSafely({ ...message, to: getOrganizationEmail() });
}
