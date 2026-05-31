import React from 'react';
import Image from 'next/image';
import { Heart, Users, BookOpen, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { DonateCTA } from '@/components/sections/DonateCTA';

export default function AboutPage() {
  const values = ['Empower', 'Educate', 'Research', 'Network', 'Self Improvement', 'Leadership', 'Equity', 'Collaboration'];
  
  const approaches = [
    { icon: <Users className="w-6 h-6 text-brand-green" />, title: "Community Ownership", desc: "Solutions designed with, not just for, the community." },
    { icon: <Heart className="w-6 h-6 text-brand-green" />, title: "Integrated Care", desc: "Holistic health services addressing physical and mental wellbeing." },
    { icon: <BookOpen className="w-6 h-6 text-brand-green" />, title: "Capacity Building", desc: "Equipping local health workers for sustainable impact." },
    { icon: <Brain className="w-6 h-6 text-brand-green" />, title: "Advocacy", desc: "Amplifying women's voices in health policy." }
  ];

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-brand flex items-center justify-center min-h-[280px] px-4 md:px-8">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2] mb-4">About AWIHF</h1>
          <p className="text-white/80 text-[18px]">Women-led. Community-rooted. Health-focused.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <p className="text-[16px] leading-[1.6] text-[#111111] mb-4">
                Established in 2024, Acholi Women in Health Foundation (AWIHF) was founded in response to the persistent and disproportionate health challenges facing women and girls in the post-conflict Acholi sub-region of Northern Uganda.
              </p>
              <p className="text-[16px] leading-[1.6] text-[#111111]">
                Two decades of LRA insurgency left behind mass displacement, widespread gender-based violence, and a decimated public health infrastructure. With maternal mortality figures at 106.0 per 100,000 live births (compared to 69.1 nationally) and a 24% teenage pregnancy rate in rural areas, AWIHF exists to close the gaps that peace has not yet closed.
              </p>
            </div>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-100">
              <Image src="/images/logo.svg" alt="AWIHF Team" fill className="object-cover opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 border-[1.5px] border-brand-brown rounded-xl bg-white">
              <h3 className="text-[24px] font-semibold text-brand-orange mb-4">Our Mission</h3>
              <p className="text-[#111111] text-[16px] leading-[1.6] italic">
                "To improve healthcare outcomes of women and girls in northern Uganda through delivery of accessible community-based health services, building a community of empowered women in healthcare through mentorship, education and research."
              </p>
            </div>
            <div className="p-8 border-[1.5px] border-brand-brown rounded-xl bg-white">
              <h3 className="text-[24px] font-semibold text-brand-orange mb-4">Our Vision</h3>
              <p className="text-[#111111] text-[16px] leading-[1.6] italic">
                "A community where women and girls are able to access equitable and holistic healthcare services, and where women in healthcare are valued, supported and empowered to lead, innovate and deliver high-quality care."
              </p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-[24px] font-semibold text-brand-brown mb-6">Our Core Values</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {values.map((v) => (
                <span key={v} className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-orange-tint text-brand-orange">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-wrapper bg-green-tint">
        <div className="content-container">
          <h2 className="section-heading text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {approaches.map((app, i) => (
              <Card key={i} className="bg-white border-transparent">
                <div className="w-12 h-12 rounded-full bg-green-tint flex items-center justify-center mb-4">
                  {app.icon}
                </div>
                <h4 className="text-[20px] font-semibold text-brand-brown mb-2">{app.title}</h4>
                <p className="text-gray-500 text-[14px] leading-[1.6]">{app.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <h2 className="section-heading text-center mb-10">Why It Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-brown-tint p-6 rounded-xl border border-brand-brown/20">
              <div className="text-brand-orange text-3xl font-bold mb-2">106.0</div>
              <p className="text-[#111111] font-medium">Maternal deaths per 100,000 live births in Acholi (vs 69.1 nationally).</p>
            </div>
            <div className="bg-brown-tint p-6 rounded-xl border border-brand-brown/20">
              <div className="text-brand-orange text-3xl font-bold mb-2">24%</div>
              <p className="text-[#111111] font-medium">Teenage pregnancy rate in rural Northern Uganda.</p>
            </div>
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}