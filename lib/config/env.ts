import { z } from 'zod';

const optionalNonEmptyString = z.preprocess(
  (value) => (value === '' ? undefined : value),
  z.string().min(1).optional()
);

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://acholiwomeninhealth.org'),
  SANITY_PROJECT_ID: optionalNonEmptyString,
  SANITY_DATASET: z.string().min(1).default('production'),
  SANITY_API_VERSION: z.string().min(1).default('2026-06-10'),
  SANITY_READ_TOKEN: optionalNonEmptyString,
  DATABASE_URL: optionalNonEmptyString,
  RESEND_API_KEY: optionalNonEmptyString,
  RESEND_FROM_EMAIL: z.string().min(1).default('AWIHF <noreply@example.org>'),
  AWIHF_ADMIN_EMAIL: z.string().email().default('acholiwomeninhealth@gmail.com'),
  CLOUDINARY_CLOUD_NAME: optionalNonEmptyString,
  CLOUDINARY_API_KEY: optionalNonEmptyString,
  CLOUDINARY_API_SECRET: optionalNonEmptyString,
  CLOUDINARY_UPLOAD_FOLDER: z.string().min(1).default('awihf'),
  SUBMISSION_RATE_LIMIT_WINDOW_MS: z.coerce.number().positive().default(60000),
  SUBMISSION_RATE_LIMIT_MAX: z.coerce.number().int().positive().default(5),
});

export type AppEnv = z.infer<typeof envSchema>;

export function getEnv(): AppEnv {
  return envSchema.parse(process.env);
}

export function requireEnv<K extends keyof AppEnv>(key: K): NonNullable<AppEnv[K]> {
  const value = getEnv()[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${String(key)}`);
  }
  return value as NonNullable<AppEnv[K]>;
}
