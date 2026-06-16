import { Pool, type QueryResultRow } from 'pg';
import { getEnv } from '@/lib/config/env';
import type { ContactSubmissionRecord, MentorshipApplicationRecord } from './types';

export type DbResult<T> = { ok: true; data: T } | { ok: false; error: string };

let pool: Pool | null = null;

function getPool() {
  const env = getEnv();
  if (!env.DATABASE_URL) {
    return null;
  }

  if (!pool) {
    pool = new Pool({
      connectionString: env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 5,
      idleTimeoutMillis: 10_000,
    });
  }

  return pool;
}

async function query<T extends QueryResultRow>(text: string, values: unknown[] = []): Promise<DbResult<T[]>> {
  const db = getPool();
  if (!db) {
    return { ok: false, error: 'DATABASE_URL is not configured.' };
  }

  try {
    const result = await db.query<T>(text, values);
    return { ok: true, data: result.rows };
  } catch (error) {
    console.error('Database query failed', error);
    return { ok: false, error: 'Database operation failed.' };
  }
}

export async function assertDatabaseConfigured(): Promise<DbResult<true>> {
  return getPool() ? { ok: true, data: true } : { ok: false, error: 'DATABASE_URL is not configured.' };
}

export async function insertContactSubmission(record: ContactSubmissionRecord): Promise<DbResult<{ id: string }>> {
  const result = await query<{ id: string }>(
    `
      insert into contact_submissions (
        full_name, email, subject, message, source, ip_hash, user_agent
      )
      values ($1, $2, $3, $4, $5, $6, $7)
      returning id
    `,
    [
      record.fullName,
      record.email,
      record.subject || null,
      record.message,
      record.source ?? 'website',
      record.ipHash ?? null,
      record.userAgent ?? null,
    ]
  );

  if (!result.ok) {
    return result;
  }

  return { ok: true, data: result.data[0] };
}

export async function insertMentorshipApplication(
  record: MentorshipApplicationRecord
): Promise<DbResult<{ id: string }>> {
  const result = await query<{ id: string }>(
    `
      insert into mentorship_applications (
        full_name, gender, date_of_birth, phone_number, email, institution,
        program_of_study, year_of_study, motivation, career_interests,
        leadership_experience, additional_comments, cv_file_url, cv_file_name,
        cv_file_size, cv_file_mime_type, transcript_file_url, transcript_file_name,
        transcript_file_size, transcript_file_mime_type, status, ip_hash, user_agent
      )
      values (
        $1, $2, $3, $4, $5, $6,
        $7, $8, $9, $10,
        $11, $12, $13, $14,
        $15, $16, $17, $18,
        $19, $20, $21, $22, $23
      )
      returning id
    `,
    [
      record.fullName,
      record.gender,
      record.dateOfBirth,
      record.phoneNumber,
      record.email,
      record.institution,
      record.programOfStudy,
      record.yearOfStudy,
      record.motivation,
      record.careerInterests,
      record.leadershipExperience ?? null,
      record.additionalComments ?? null,
      record.cvFile?.url ?? null,
      record.cvFile?.fileName ?? null,
      record.cvFile?.fileSize ?? null,
      record.cvFile?.mimeType ?? null,
      record.transcriptFile?.url ?? null,
      record.transcriptFile?.fileName ?? null,
      record.transcriptFile?.fileSize ?? null,
      record.transcriptFile?.mimeType ?? null,
      record.status ?? 'pending',
      record.ipHash ?? null,
      record.userAgent ?? null,
    ]
  );

  if (!result.ok) {
    return result;
  }

  return { ok: true, data: result.data[0] };
}

export async function getContactSubmissions() {
  return query('select * from contact_submissions order by created_at desc');
}

export async function getMentorshipApplications() {
  return query('select * from mentorship_applications order by submitted_at desc');
}

export async function subscribeNewsletter(email: string): Promise<DbResult<{ id: string }>> {
  const result = await query<{ id: string }>(
    `
      insert into newsletter_subscribers (email, is_active)
      values ($1, true)
      on conflict (email) do update
      set is_active = true, subscribed_at = now()
      returning id
    `,
    [email]
  );

  if (!result.ok) {
    return result;
  }

  return { ok: true, data: result.data[0] };
}

export const saveContactSubmission = insertContactSubmission;
export const saveMentorshipApplication = insertMentorshipApplication;
