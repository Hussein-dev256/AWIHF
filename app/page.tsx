import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { AboutSummary } from '@/components/sections/AboutSummary';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { Spotlight } from '@/components/sections/Spotlight';
import { ImpactSection } from '@/components/sections/ImpactSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { LatestNews } from '@/components/sections/LatestNews';
import { GetInvolvedCTA } from '@/components/sections/GetInvolvedCTA';
import { DonateCTA } from '@/components/sections/DonateCTA';
import { PartnershipsSection } from '@/components/sections/PartnershipsSection';

export const metadata: Metadata = {
  title: 'Acholi Women in Health Foundation',
  description: 'Acholi Women in Health Foundation improves healthcare outcomes for women and girls in Gulu and the Acholi sub-region through community-rooted health programmes.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Introduce the organization */}
      <Hero />

      {/* 2. Explain who they are */}
      <AboutSummary />

      {/* 3. Explain what they do */}
      <ProgramsGrid />

      {/* 4. Programme in action - subsection of Programs */}
      <Spotlight />

      {/* 5. Show measurable results */}
      <ImpactSection />

      {/* 6. Impact evidence - stories from beneficiaries */}
      <Testimonials />

      {/* 7. Updates and current activities */}
      <LatestNews />

      <PartnershipsSection />

      {/* 8. Engagement opportunities */}
      <GetInvolvedCTA />

      {/* 9. Final call to action */}
      <DonateCTA />
    </>
  );
}
