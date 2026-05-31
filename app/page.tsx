import { Hero } from '@/components/sections/Hero';
import { ImpactStrip } from '@/components/sections/ImpactStrip';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { Spotlight } from '@/components/sections/Spotlight';
import { DonateCTA } from '@/components/sections/DonateCTA';
import { LatestNews } from '@/components/sections/LatestNews';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <ProgramsGrid />
      <Spotlight />
      <DonateCTA />
      <LatestNews />
      <NewsletterSignup />
    </>
  );
}