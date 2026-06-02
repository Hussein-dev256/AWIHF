import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Users, Shield, Landmark, GraduationCap, HeartHandshake } from 'lucide-react';

export default function PartnersPage() {
  const stakeholderGroups = [
    {
      icon: <HeartHandshake className="w-8 h-8 text-brand-green" />,
      title: "Donors & Development Partners",
      role: "Funding & Operational Support",
      description: "Providing the essential resources, technical oversight, and institutional grants needed to scale health delivery in Northern Uganda's most vulnerable sub-counties."
    },
    {
      icon: <Landmark className="w-8 h-8 text-brand-green" />,
      title: "Government & Regulatory Bodies",
      role: "Systemic Alignment & Compliance",
      description: "Working in close alignment with Gulu City local government, the Ministry of Health (MoH), and regulatory boards to ensure all programs meet national clinical standards."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-green" />,
      title: "Community Leaders & Elders",
      role: "Local Ownership & Cultural Trust",
      description: "Collaborating with Acholi cultural chiefs, local council leaders (LCs), and women's circles to ensure community buy-in, local ownership, and culturally safe program delivery."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-brand-green" />,
      title: "Academic & Research Partners",
      role: "Evidence Generation",
      description: "Partnering with healthcare student professionals, regional universities, and researchers to conduct community-based baseline studies on SRHR and trauma outcomes."
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-green" />,
      title: "Civil Society & Allied NGOs",
      role: "Shared Advocacy Networks",
      description: "Participating in national campaigns for Gender-Based Violence (GBV) prevention, HIV/AIDS awareness, and mental health policy reform alongside local allied coalitions."
    }
  ];

  const operationalPartners = [
    {
      name: "Local Health Facilities",
      detail: "Facilities like Patiko Health Center III and local clinics, providing secondary medical consulting, vision screenings, and maternal referral pathways."
    },
    {
      name: "Mobile Money Networks",
      detail: "MTN Uganda & Airtel Uganda, enabling secure local micro-donations and transparent peer-to-peer mobilization networks."
    },
    {
      name: "National Health Professional Associations",
      detail: "Enabling recruitment, training, and mentoring of nursing and medical students nationwide to build a pipeline of future women leaders."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-brand flex items-center justify-center min-h-[280px] px-4 md:px-8">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2] mb-4">Partners & Stakeholders</h1>
          <p className="text-white/80 text-[18px]">Building cooperative health ecosystems in Northern Uganda.</p>
        </div>
      </section>

      {/* Introduction & Philosophy */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">Our Collaborative Model</span>
            <h2 className="section-heading mb-6">No Organization Climbs Alone</h2>
            <p className="text-[#111111] text-[18px] leading-[1.6] mb-6">
              Acholi Women in Health Foundation (AWIHF) was founded on the principle that sustainable health equity requires collective action. In Northern Uganda, where two decades of LRA insurgency decimated public health infrastructure, closing gaps requires co-designed systems.
            </p>
            <p className="text-gray-600 text-[16px] leading-[1.6]">
              We sit at the intersection of local community networks, healthcare student pools, local health authorities, and supportive donors. By weaving these stakeholder groups together, we ensure that every community outreach, counseling circle, and systems mentorship translates to long-term impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholder Matrix */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-semibold text-xs tracking-wider uppercase mb-2 block">Legitimacy & Integration</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-brown">Our Stakeholder Engagement Matrix</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stakeholderGroups.map((group, i) => (
              <Card key={i} className="p-6 md:p-8 bg-white border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-green-tint rounded-xl flex items-center justify-center mb-6 text-brand-green shrink-0">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-brown mb-1">{group.title}</h3>
                <span className="text-brand-orange font-semibold text-xs uppercase tracking-wider mb-4 block">{group.role}</span>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {group.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Concrete Achievements */}
      <section className="section-wrapper bg-white">
        <div className="content-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-semibold text-xs tracking-wider uppercase mb-2 block">Operational Proof</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-brown">Collaborative Integration in Action</h2>
          </div>
          <div className="space-y-6">
            {operationalPartners.map((item, i) => (
              <div key={i} className="bg-brown-tint/30 border border-brand-brown/10 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-brand-brown text-white font-bold text-[20px] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  {`0${i+1}`}
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-brand-brown mb-2">{item.name}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-wrapper bg-gradient-brand text-white">
        <div className="content-container text-center max-w-2xl mx-auto py-6">
          <h2 className="text-[30px] font-bold mb-4 leading-tight">Partner With AWIHF</h2>
          <p className="text-white/80 text-[18px] leading-relaxed mb-8">
            Acholi Women in Health Foundation welcomes institutional grants, corporate collaborations, and research partnerships from individuals and organizations that share our values of health, dignity, and equity in Northern Uganda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact?subject=partnership">
              <Button variant="secondary" size="large" className="w-full sm:w-auto">
                Inquire About Partnerships
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button variant="ghost" size="large" className="w-full sm:w-auto text-white border-white hover:bg-white/10">
                Explore Ways to Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
