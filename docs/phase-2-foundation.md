# Phase 2 Foundation Notes

## Implemented

- Environment variable contract in `.env.example`.
- Sanity schema architecture under `sanity/schemaTypes`.
- Sanity fetch utility under `lib/sanity/client.ts`.
- CMS-ready content fetchers for news, donation info, and mentorship content.
- Neon SQL schema under `db/schema.sql`.
- Zod validation schemas for contact, mentorship, and volunteer submissions.
- Submission sanitization, IP hashing, and basic rate limiting.
- Resend email service and reusable email templates.
- Cloudinary signed upload service.
- Contact submission route at `/api/contact`.
- Mentorship application route at `/api/mentorship/applications`.
- CMS-controlled mentorship application window and package rendering.
- Sitemap, robots, and organization structured data.

## Remaining Before Live Operations

- Provide a readable PRD file. The local `AWIHF_Website_PRD_v1.0.docx` is currently zero bytes.
- Add production credentials for Sanity, Neon, Resend, and Cloudinary.
- Install a PostgreSQL driver once npm certificate/install issues are resolved.
- Replace `lib/db/operations.ts` fail-closed adapter with concrete Neon queries.
- Run `db/schema.sql` against the Neon database.
- Configure Sanity Studio using the schema definitions.

## Package Install Note

`zod` installed successfully. Attempts to install `@neondatabase/serverless` timed out, and `postgres` failed with npm certificate verification errors. SSL verification was not disabled.
