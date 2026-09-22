import React from 'react';
import Link from 'next/link';
import { Heart, Brain, Users, BookOpen, School, GraduationCap } from 'lucide-react';
import { Card } from '../ui/Card';
import { Reveal } from '@/components/motion/Reveal';

const programs = [
  {
    icon: <Heart className="w-6 h-6 md:w-7 md:h-7 text-brand-green" />,
    title: "Maternal & Reproductive Health",
    description: "Safe motherhood, antenatal care, family planning, and cervical cancer awareness for women across the Acholi sub-region.",
    href: "/programs/maternal-reproductive-health"
  },
  {
    icon: <Brain className="w-6 h-6 md:w-7 md:h-7 text-brand-green" />,
    title: "Mental Health & Trauma Support",
    description: "Community-based psychosocial support, healing circles, and peer networks for SCD warriors and women navigating trauma.",
    href: "/programs/mental-health-trauma-support"
  },
  {
    icon: <Users className="w-6 h-6 md:w-7 md:h-7 text-brand-green" />,
    title: "Community Health Education",
    description: "Schools health sessions, menstrual hygiene management, and peer health education empowering adolescent girls.",
    href: "/programs/community-health-education"
  },
  {
    icon: <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-brand-green" />,
    title: "Healthcare Systems Strengthening",
    description: "Equipping Village Health Teams (VHTs) and building health facility emergency referral coordination.",
    href: "/programs/healthcare-systems-strengthening"
  },
  {
    icon: <School className="w-6 h-6 md:w-7 md:h-7 text-brand-green" />,
    title: "School & Community Outreach Programme",
    description: "Integrated frontline medical outreaches bringing primary healthcare, screenings, and diagnostic education directly to rural communities.",
    href: "/programs/school-community-outreach-programme"
  },
  {
    icon: <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-brand-green" />,
    title: "Mentorship Programme",
    description: "Connecting medical and nursing students nationwide with clinical mentors to build future women health leadership.",
    href: "/programs/mentorship"
  }
];

export function ProgramsGrid() {
  return (
    <section className="section-wrapper bg-gray-50">
      <div className="content-container">
        <Reveal>
          <h2 className="section-heading">Our Programs</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-5 md:mt-8 items-stretch">
          {programs.map((prog, index) => (
            <Reveal key={prog.title} delayMs={index * 80} className="h-full">
              <Card className="group relative overflow-hidden flex flex-row items-center gap-4 md:gap-5 p-5 md:p-6 !rounded-2xl hover:shadow-md transition-all duration-300 h-full w-full">
                <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-brand-orange transition-all duration-300" />
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-tint flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none text-brand-green">
                  {prog.icon}
                </div>
                <div className="flex-1 flex flex-col justify-between h-full min-h-0">
                  <div>
                    <h3 className="text-[17px] md:text-[19px] lg:text-[20px] font-bold text-brand-brown mb-2 leading-snug">{prog.title}</h3>
                    <p className="text-gray-500 text-[14px] md:text-[15px] leading-[1.6] mb-4">{prog.description}</p>
                  </div>
                  <Link 
                    href={prog.href} 
                    aria-label={`Learn more about ${prog.title}`}
                    className="group/link text-brand-orange font-medium hover:text-brand-gold transition-colors inline-flex items-center text-sm md:text-[15px] mt-auto"
                  >
                    Learn More<span className="sr-only"> about {prog.title}</span> <span className="ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
