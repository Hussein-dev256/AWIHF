import { Hero } from '@/components/sections/Hero';
import { AboutSummary } from '@/components/sections/AboutSummary';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { ImpactStrip } from '@/components/sections/ImpactStrip';
import { Spotlight } from '@/components/sections/Spotlight';
import { Testimonials } from '@/components/sections/Testimonials';
import { Partners } from '@/components/sections/Partners';
import { DonateCTA } from '@/components/sections/DonateCTA';
import { LatestNews } from '@/components/sections/LatestNews';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <ProgramsGrid />
      <ImpactStrip />
      <Spotlight />
      <Testimonials />
      <Partners />
      <DonateCTA />
      <LatestNews />
      <NewsletterSignup />
    </>
  );
}