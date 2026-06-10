import { z } from 'zod';

const phoneSchema = z.string().min(7).max(30);

export const contactSubmissionSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(180),
  subject: z.string().min(2).max(160),
  message: z.string().min(10).max(5000),
});

export const mentorshipApplicationSchema = z.object({
  fullName: z.string().min(2).max(120),
  gender: z.string().min(2).max(40),
  dateOfBirth: z.string().date(),
  phoneNumber: phoneSchema,
  email: z.string().email().max(180),
  institution: z.string().min(2).max(180),
  programOfStudy: z.string().min(2).max(180),
  yearOfStudy: z.string().min(1).max(80),
  motivation: z.string().min(30).max(5000),
  careerInterests: z.string().min(10).max(3000),
  leadershipExperience: z.string().max(3000).optional(),
  additionalComments: z.string().max(3000).optional(),
});

export const volunteerApplicationSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(180),
  phoneNumber: phoneSchema.optional(),
  areaOfInterest: z.string().min(2).max(180),
  message: z.string().max(3000).optional(),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;
export type MentorshipApplicationInput = z.infer<typeof mentorshipApplicationSchema>;
export type VolunteerApplicationInput = z.infer<typeof volunteerApplicationSchema>;
