import React from 'react';
import Image from 'next/image';
import { ImpactStrip } from '@/components/sections/ImpactStrip';
import { Card } from '@/components/ui/Card';
import { DonateCTA } from '@/components/sections/DonateCTA';

export default function ImpactPage() {
  const targets2026 = [
    { target: "Reach 5,000+ additional households", category: "Outreach" },
    { target: "Distribute reusable sanitary pads to 1,000+ vulnerable girls", category: "Education & SRHR" },
    { target: "Support 500+ teenage mothers", category: "Maternal Health" },
    { target: "Train 200+ SRHR peer educators", category: "Capacity Building" },
    { target: "Equip 1,000 Community Health Workers", category: "Systems Strengthening" },
    { target: "Establish maternal health referral hubs", category: "Infrastructure" },
    { target: "Scale cervical cancer screening", category: "Preventive Care" },
    { target: "Establish mental health referral hubs", category: "Mental Health" },
  ];

  return (
    <>
      <section className="w-full bg-gradient-brand flex items-center justify-center min-h-[280px] px-4 md:px-8">
        <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2]">Our 2025 Impact</h1>
      </section>

      <ImpactStrip />

      {/* Programme Phases Timeline */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <h2 className="section-heading text-center mb-12">2025 Programme Phases</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />
            
            {[
              { phase: "Phase 1", date: "January - April", desc: "Initial community assessments, stakeholder engagements, and the launch of our foundational SRHR education initiatives in rural Gulu." },
              { phase: "Phase 2", date: "May - August", desc: "Execution of the Patiko Medical Outreach, scaling up of antenatal care support, and the first cohort of Community Health Worker trainings." },
              { phase: "Phase 3", date: "September - December", desc: "Establishment of mental health support groups, distribution of sanitary pads, and year-end impact evaluation." }
            ].map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-[16px] md:left-1/2 w-6 h-6 rounded-full bg-brand-orange border-4 border-white md:-translate-x-1/2 mt-1 z-10" />
                <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                  <span className="text-brand-green font-bold text-sm uppercase tracking-wider">{item.date}</span>
                  <h3 className="text-xl font-bold text-brand-brown mb-2 mt-1">{item.phase}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patiko Outreach Spotlight */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center px-4 md:px-8 py-16">
        <div className="absolute inset-0 z-0">
          <Image src="/images/logo.svg" alt="Patiko Medical Outreach" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-brand-brown/80" />
        </div>
        <div className="relative z-10 text-center max-w-4xl">
          <h2 className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-4">Spotlight Event</h2>
          <h3 className="text-white text-3xl md:text-[40px] font-bold leading-[1.2] mb-6">Patiko Medical Outreach</h3>
          <p className="text-white/90 text-[18px] leading-[1.6] mb-4 font-medium">July 10–13, 2025</p>
          <p className="text-white/80 text-[18px] leading-[1.6]">
            Reached 1,000+ households across four days with free medical consultations, vision screenings, SRHR education, and post-abortion care referrals in the most underserved rural Acholi communities.
          </p>
        </div>
      </section>

      {/* Programme Highlights */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <h2 className="section-heading text-center mb-10">Programme Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-t-4 border-t-brand-orange">
              <h4 className="text-[20px] font-semibold text-brand-brown mb-3">SRHR Research</h4>
              <p className="text-gray-600 leading-[1.6]">
                Conducted critical baseline research on sexual and reproductive health needs in rural settings, forming the foundation for targeted interventions.
              </p>
            </Card>
            <Card className="border-t-4 border-t-brand-orange">
              <h4 className="text-[20px] font-semibold text-brand-brown mb-3">GBV & AIDS Campaigns</h4>
              <p className="text-gray-600 leading-[1.6]">
                Led community-wide awareness campaigns addressing Gender-Based Violence and HIV/AIDS prevention, integrating care with psychosocial support.
              </p>
            </Card>
            <Card className="border-t-4 border-t-brand-orange">
              <h4 className="text-[20px] font-semibold text-brand-brown mb-3">Cervical Cancer Awareness</h4>
              <p className="text-gray-600 leading-[1.6]">
                Launched an extensive educational drive on cervical cancer screening, helping women understand risks and access early diagnostic services.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Looking Ahead 2026 */}
      <section className="section-wrapper bg-white">
        <div className="content-container max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-10">Looking Ahead: 2026 Targets</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-brown text-white">
                  <th className="px-6 py-4 font-semibold text-[16px]">Target Area</th>
                  <th className="px-6 py-4 font-semibold text-[16px]">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {targets2026.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-brand-green whitespace-nowrap">{item.category}</td>
                    <td className="px-6 py-4 text-[#111111]">{item.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}