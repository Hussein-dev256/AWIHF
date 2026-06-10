import { NextRequest, NextResponse } from 'next/server';
import { saveContactSubmission } from '@/lib/db/operations';
import { notifyAdmin, sendEmail } from '@/lib/email/resend';
import { contactConfirmationEmail, contactNotificationEmail } from '@/lib/email/templates';
import { getSubmissionContext } from '@/lib/http/submissionContext';
import { sanitizeObject } from '@/lib/security/sanitize';
import { contactSubmissionSchema } from '@/lib/validation/submissions';

export async function POST(request: NextRequest) {
  const context = await getSubmissionContext(request);
  if (!context.allowed) {
    return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
  }

  const payload = sanitizeObject(await request.json());
  const result = contactSubmissionSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json({ error: 'Invalid submission.', issues: result.error.flatten() }, { status: 400 });
  }

  try {
    await saveContactSubmission({
      ...result.data,
      source: 'website',
      ipHash: context.ipHash,
      userAgent: context.userAgent,
    });

    await notifyAdmin(contactNotificationEmail(result.data));
    await sendEmail({ ...contactConfirmationEmail(result.data), to: result.data.email });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact submission failed', error);
    return NextResponse.json({ error: 'Submission service is not fully configured.' }, { status: 503 });
  }
}
