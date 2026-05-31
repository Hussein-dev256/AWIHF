import React from 'react';
import { notFound } from 'next/navigation';
import { ProgramLayout } from '@/components/shared/ProgramLayout';

const programsData: Record<string, any> = {
  'maternal-reproductive-health': {
    title: 'Maternal & Reproductive Health',
    badgeLabel: 'Program',
    heroImage: '/images/logo.svg',
    stats: [
      { value: '1,000+', label: 'Women Supported' },
      { value: '500+', label: 'Teenage Mothers Assisted' },
      { value: '100%', label: 'Commitment to Safe Motherhood' },
    ],
    description: (
      <div className="space-y-6">
        <p>
          Our Maternal & Reproductive Health program focuses on safe motherhood, antenatal care, family planning, and Sexual and Reproductive Health and Rights (SRHR) services for women of all ages.
        </p>
        <p>
          In rural Acholi, maternal mortality and teenage pregnancy rates remain alarmingly high. We provide free medical consultations, refer high-risk pregnancies to capable facilities, and distribute essential maternal health supplies to close the gap in healthcare access.
        </p>
      </div>
    ),
    galleryImages: ['/images/logo.svg', '/images/logo.svg', '/images/logo.svg']
  },
  'mental-health-trauma-support': {
    title: 'Mental Health & Trauma Support',
    badgeLabel: 'Program',
    heroImage: '/images/logo.svg',
    stats: [
      { value: '200+', label: 'Counseling Sessions' },
      { value: '5+', label: 'Community Healing Groups' },
      { value: '24/7', label: 'Support Networks' },
    ],
    description: (
      <div className="space-y-6">
        <p>
          Psychosocial support and trauma-informed care for women living with the aftermath of conflict. The legacy of the LRA insurgency left deep psychological scars, requiring sensitive, community-driven mental health interventions.
        </p>
        <p>
          We establish mental health referral pathways and safe spaces for women to share their experiences, heal together, and access professional trauma counseling when needed.
        </p>
      </div>
    ),
    galleryImages: ['/images/logo.svg', '/images/logo.svg', '/images/logo.svg']
  },
  'community-health-education': {
    title: 'Community Health Education',
    badgeLabel: 'Program',
    heroImage: '/images/logo.svg',
    stats: [
      { value: '200+', label: 'Peer Educators Trained' },
      { value: '1,000+', label: 'Households Reached' },
      { value: '50+', label: 'Outreach Campaigns' },
    ],
    description: (
      <div className="space-y-6">
        <p>
          Knowledge is the first line of defense. Our Community Health Education program involves widespread outreach campaigns, peer education, and health literacy initiatives designed to empower women to protect their own health.
        </p>
        <p>
          We conduct cervical cancer awareness, SRHR education, and hygiene programs—including the distribution of reusable sanitary pads to vulnerable girls to keep them in school.
        </p>
      </div>
    ),
    galleryImages: ['/images/logo.svg', '/images/logo.svg', '/images/logo.svg']
  },
  'healthcare-systems-strengthening': {
    title: 'Healthcare Systems Strengthening',
    badgeLabel: 'Program',
    heroImage: '/images/logo.svg',
    stats: [
      { value: '1,000+', label: 'CHWs Equipped' },
      { value: '50+', label: 'Healthcare Students Mentored' },
      { value: '10+', label: 'Clinics Supported' },
    ],
    description: (
      <div className="space-y-6">
        <p>
          We believe in building the local health workforce. Through trainings, mentorships, and resource provision, we strengthen the capacity of Community Health Workers (CHWs) and healthcare students across the region.
        </p>
        <p>
          By equipping the frontline workers with better skills and tools, we ensure that the entire healthcare system in Northern Uganda becomes more resilient and responsive to the needs of its people.
        </p>
      </div>
    ),
    galleryImages: ['/images/logo.svg', '/images/logo.svg', '/images/logo.svg']
  }
};

export function generateStaticParams() {
  return Object.keys(programsData).map((slug) => ({ slug }));
}

export default async function ProgramPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const program = programsData[params.slug];

  if (!program) {
    notFound();
  }

  return <ProgramLayout {...program} />;
}