import { NextRequest, NextResponse } from 'next/server';
import { assertDatabaseConfigured, saveMentorshipApplication } from '@/lib/db/operations';
import { notifyAdmin, sendEmail } from '@/lib/email/resend';
import { mentorshipConfirmationEmail, mentorshipNotificationEmail } from '@/lib/email/templates';
import { getSubmissionContext } from '@/lib/http/submissionContext';
import { sanitizeObject } from '@/lib/security/sanitize';
import { uploadFileToCloudinary } from '@/lib/storage/cloudinary';
import { mentorshipApplicationSchema } from '@/lib/validation/submissions';

const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;

function getOptionalString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function getRequiredFile(formData: FormData, key: string) {
  const value = formData.get(key);
  return value instanceof File && value.size > 0 ? value : null;
}

function validateUpload(file: File, label: string) {
  if (file.size > MAX_UPLOAD_SIZE) {
    throw new Error(`${label} must be 5MB or smaller.`);
  }
}

export async function POST(request: NextRequest) {
  const context = await getSubmissionContext(request);
  if (!context.allowed) {
    return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
  }

  try {
    await assertDatabaseConfigured();

    const formData = await request.formData();
    const payload = sanitizeObject({
      fullName: getOptionalString(formData, 'fullName'),
      gender: getOptionalString(formData, 'gender'),
      dateOfBirth: getOptionalString(formData, 'dateOfBirth'),
      phoneNumber: getOptionalString(formData, 'phoneNumber'),
      email: getOptionalString(formData, 'email'),
      institution: getOptionalString(formData, 'institution'),
      programOfStudy: getOptionalString(formData, 'programOfStudy'),
      yearOfStudy: getOptionalString(formData, 'yearOfStudy'),
      motivation: getOptionalString(formData, 'motivation'),
      careerInterests: getOptionalString(formData, 'careerInterests'),
      leadershipExperience: getOptionalString(formData, 'leadershipExperience'),
      additionalComments: getOptionalString(formData, 'additionalComments'),
    });

    const result = mentorshipApplicationSchema.safeParse(payload);
    if (!result.success) {
      return NextResponse.json({ error: 'Invalid application.', issues: result.error.flatten() }, { status: 400 });
    }

    const cvFile = getRequiredFile(formData, 'cv');
    if (!cvFile) {
      return NextResponse.json({ error: 'CV or resume is required.' }, { status: 400 });
    }

    validateUpload(cvFile, 'CV');
    const transcriptFile = getRequiredFile(formData, 'transcript');
    if (transcriptFile) {
      validateUpload(transcriptFile, 'Academic transcript');
    }

    const cvUpload = await uploadFileToCloudinary(cvFile, { folder: 'awihf/mentorship/cv', resourceType: 'auto' });
    const transcriptUpload = transcriptFile
      ? await uploadFileToCloudinary(transcriptFile, { folder: 'awihf/mentorship/transcripts', resourceType: 'auto' })
      : undefined;

    await saveMentorshipApplication({
      ...result.data,
      cvFile: cvUpload,
      transcriptFile: transcriptUpload,
      status: 'pending',
      ipHash: context.ipHash,
      userAgent: context.userAgent,
    });

    const submittedAt = new Date().toISOString();
    await notifyAdmin(mentorshipNotificationEmail(result.data, submittedAt));
    await sendEmail({ ...mentorshipConfirmationEmail(result.data), to: result.data.email });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Mentorship application failed', error);
    return NextResponse.json({ error: 'Application service is not fully configured.' }, { status: 503 });
  }
}
