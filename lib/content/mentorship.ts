import applicationWindowSeed from '@/content/application-window.json';
import mentorshipPackageSeed from '@/content/mentorship-packages.json';
import { sanityFetch } from '@/lib/sanity/client';

export type MentorshipPackage = {
  name: string;
  description: string;
  features: string[];
  price: string;
  eligibility: string;
};

export type ApplicationWindow = {
  isOpen: boolean;
  cycleName: string;
  openMessage: string;
  closedMessage: string;
};

export async function getMentorshipPackages(): Promise<MentorshipPackage[]> {
  const packages = await sanityFetch<MentorshipPackage[]>(`
    *[_type == "mentorshipPackage"] | order(sortOrder asc, _createdAt asc) {
      name,
      description,
      features,
      price,
      eligibility
    }
  `).catch((error) => {
    console.error('Sanity mentorship package fetch failed', error);
    return null;
  });

  return packages?.length ? packages : mentorshipPackageSeed;
}

export async function getApplicationWindow(): Promise<ApplicationWindow> {
  const windowConfig = await sanityFetch<ApplicationWindow>(`
    *[_type == "applicationWindow"][0] {
      isOpen,
      cycleName,
      openMessage,
      closedMessage
    }
  `).catch((error) => {
    console.error('Sanity application window fetch failed', error);
    return null;
  });

  return windowConfig ?? applicationWindowSeed;
}
