import { requireEnv } from '@/lib/config/env';
import type { ContactSubmissionRecord, MentorshipApplicationRecord } from './types';
export async function assertDatabaseConfigured() {
  requireEnv('DATABASE_URL');
}

export async function saveContactSubmission(record: ContactSubmissionRecord) {
  void record;
  await assertDatabaseConfigured();
  throw new Error('Neon database driver is not installed. Install @neondatabase/serverless or an approved PostgreSQL driver before enabling writes.');
}

export async function saveMentorshipApplication(record: MentorshipApplicationRecord) {
  void record;
  await assertDatabaseConfigured();
  throw new Error('Neon database driver is not installed. Install @neondatabase/serverless or an approved PostgreSQL driver before enabling writes.');
}
