create type application_status as enum (
  'pending',
  'under_review',
  'shortlisted',
  'accepted',
  'rejected'
);

create type submission_type as enum (
  'contact',
  'mentorship_application',
  'volunteer_application',
  'event_registration'
);

create table contact_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  subject text not null,
  message text not null,
  source text default 'website',
  ip_hash text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table mentorship_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  gender text not null,
  date_of_birth date not null,
  phone_number text not null,
  email text not null,
  institution text not null,
  program_of_study text not null,
  year_of_study text not null,
  motivation text not null,
  career_interests text not null,
  leadership_experience text,
  additional_comments text,
  cv_file_url text not null,
  cv_file_name text,
  cv_file_size integer,
  transcript_file_url text,
  transcript_file_name text,
  transcript_file_size integer,
  status application_status not null default 'pending',
  reviewed_by text,
  reviewed_at timestamptz,
  review_notes text,
  ip_hash text,
  user_agent text,
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone_number text,
  area_of_interest text not null,
  message text,
  status application_status not null default 'pending',
  ip_hash text,
  user_agent text,
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_key text not null,
  full_name text not null,
  email text not null,
  phone_number text,
  metadata jsonb not null default '{}'::jsonb,
  submitted_at timestamptz not null default now()
);

create table submission_audit_log (
  id uuid primary key default gen_random_uuid(),
  submission_type submission_type not null,
  submission_id uuid not null,
  action text not null,
  actor_email text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index contact_submissions_created_at_idx on contact_submissions (created_at desc);
create index mentorship_applications_status_idx on mentorship_applications (status);
create index mentorship_applications_submitted_at_idx on mentorship_applications (submitted_at desc);
create index volunteer_applications_status_idx on volunteer_applications (status);
create index event_registrations_event_key_idx on event_registrations (event_key);
