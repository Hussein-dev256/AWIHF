import type { ContactSubmissionInput, MentorshipApplicationInput } from '@/lib/validation/submissions';

export type EmailMessage = {
  subject: string;
  html: string;
  text: string;
};

function layout(title: string, body: string) {
  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6">
      <h1 style="color:#4B2C11">${title}</h1>
      ${body}
      <p style="color:#6C757D;font-size:14px">Acholi Women in Health Foundation</p>
    </div>
  `;
}

export function contactNotificationEmail(input: ContactSubmissionInput): EmailMessage {
  return {
    subject: `New AWIHF contact message: ${input.subject}`,
    text: `New contact message from ${input.fullName} (${input.email}).\n\n${input.message}`,
    html: layout('New Contact Message', `
      <p><strong>Name:</strong> ${input.fullName}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Subject:</strong> ${input.subject}</p>
      <p>${input.message}</p>
    `),
  };
}

export function contactConfirmationEmail(input: ContactSubmissionInput): EmailMessage {
  return {
    subject: 'AWIHF has received your message',
    text: `Dear ${input.fullName},\n\nThank you for contacting AWIHF. Your message has been received and our team will review it.`,
    html: layout('Message Received', `
      <p>Dear ${input.fullName},</p>
      <p>Thank you for contacting AWIHF. Your message has been received and our team will review it.</p>
    `),
  };
}

export function mentorshipNotificationEmail(input: MentorshipApplicationInput, submittedAt: string): EmailMessage {
  return {
    subject: `New mentorship application: ${input.fullName}`,
    text: `New mentorship application submitted by ${input.fullName} (${input.email}, ${input.phoneNumber}) at ${submittedAt}.`,
    html: layout('New Mentorship Application', `
      <p><strong>Name:</strong> ${input.fullName}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Phone:</strong> ${input.phoneNumber}</p>
      <p><strong>Submitted:</strong> ${submittedAt}</p>
    `),
  };
}

export function mentorshipConfirmationEmail(input: MentorshipApplicationInput): EmailMessage {
  return {
    subject: 'AWIHF Mentorship Program application received',
    text: `Thank you for applying to the AWIHF Mentorship Program.\n\nYour application has been received and will be reviewed by our team.`,
    html: layout('Application Received', `
      <p>Dear ${input.fullName},</p>
      <p>Thank you for applying to the AWIHF Mentorship Program.</p>
      <p>Your application has been received and will be reviewed by our team.</p>
    `),
  };
}
