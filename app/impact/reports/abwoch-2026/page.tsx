import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowDownToLine,
  CheckCircle2,
  FileText,
  HeartHandshake,
  Activity,
  AlertCircle,
  TrendingUp,
  Building2,
  Users,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Baby,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PageHero } from '@/components/shared/PageHero';
import { ProgrammeInPracticeGallery } from '@/components/shared/ProgrammeInPracticeGallery';
import { getAbwochReportData } from '@/lib/content/abwochReport';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'Abwoch Medical Outreach Report 2026',
  description:
    'Detailed clinical outcomes, service statistics, charts, partner contributions, and operational lessons from AWIHF pre-launch medical outreach at Abwoch Health Centre III reaching 301 community members.',
  alternates: {
    canonical: '/impact/reports/abwoch-2026',
  },
  openGraph: {
    title: 'Abwoch Medical Outreach Report 2026 | AWIHF',
    description:
      'Explore the complete report from AWIHF 3 July 2026 medical outreach at Abwoch Health Centre III, Omoro District. Reaching 301 community members across five essential health services.',
    url: '/impact/reports/abwoch-2026',
    images: [
      {
        url: '/images/AWIHF-Abwoch.webp',
        alt: 'AWIHF Abwoch Medical Outreach Report 2026',
      },
    ],
  },
};

export default async function AbwochReportPage() {
  const report = await getAbwochReportData();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Impact', path: '/impact' },
          { name: 'Reports', path: '/impact/report' },
          { name: 'Abwoch Medical Outreach Report', path: '/impact/reports/abwoch-2026' },
        ]}
      />

      <PageHero
        title={report.title}
        subtitle={`${report.date} • ${report.location} • Theme: "${report.theme}"`}
      >
        <a href={report.downloadUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="medium"
            className="w-full sm:w-auto bg-white text-brand-brown hover:bg-white hover:brightness-100 border-none shadow-md"
          >
            <ArrowDownToLine className="w-5 h-5 mr-2 text-brand-orange" />
            Download Full Report
          </Button>
        </a>
        <Link href="/impact">
          <Button
            size="medium"
            variant="ghost"
            className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white"
          >
            Back to Impact
          </Button>
        </Link>
      </PageHero>

      {/* Executive Summary & Key Indicators */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
            <Card className="p-5 md:p-8 bg-brown-tint/50 border border-brand-brown/15">
              <div className="w-12 h-12 rounded-xl bg-white text-brand-orange flex items-center justify-center mb-5 shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-2">
                Official Pre-Launch Outreach
              </span>
              <h2 className="text-[23px] md:text-[26px] font-bold text-brand-brown mb-4 leading-tight">
                Executive Summary
              </h2>
              <div className="space-y-4">
                {report.executiveSummary.map((paragraph, idx) => (
                  <p key={idx} className="text-[#111111] text-[15px] md:text-[16px] leading-[1.7]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-brand-brown/15 text-xs text-gray-600 space-y-1">
                <p><strong>Outreach Date:</strong> {report.date}</p>
                <p><strong>Venue:</strong> {report.location}</p>
                <p><strong>Theme:</strong> &ldquo;{report.theme}&rdquo;</p>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {report.keyMetrics.map((metric) => (
                <Card
                  key={metric.label}
                  className="p-5 md:p-6 bg-white border border-gray-200 shadow-sm hover:border-brand-orange/40 transition-colors"
                >
                  <div className="text-[30px] md:text-[34px] font-bold text-brand-orange leading-none mb-2">
                    {metric.value}
                  </div>
                  <h3 className="text-[17px] font-bold text-brand-brown mb-2">{metric.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{metric.detail}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistical Visualisation: Service Distribution */}
      <section className="section-wrapper bg-gray-50 border-y border-gray-100">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-brand-green font-bold text-sm uppercase tracking-wider block mb-2">
              Clinical Evidence & Data
            </span>
            <h2 className="section-heading">Service Distribution</h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Breakdown of the 301 community members served across five integrated medical services in a single day at Abwoch Health Centre III.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Visual Bar Graph */}
            <Card className="p-6 md:p-8 bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-brown mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-brand-orange" />
                Service Distribution Graph
              </h3>
              <div className="space-y-5">
                {report.serviceDistribution.map((item) => (
                  <div key={item.service}>
                    <div className="flex justify-between items-center text-sm font-semibold mb-1.5">
                      <span className="text-brand-brown">{item.service}</span>
                      <span className="text-brand-orange font-bold">
                        {item.count} <span className="text-gray-500 font-normal">({item.percentage})</span>
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-brand-orange to-amber-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: item.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-5 border-t border-gray-100 flex justify-between items-center text-sm font-bold text-brand-brown">
                <span>Total People Served</span>
                <span className="text-brand-green text-base">301 / 100%</span>
              </div>
            </Card>

            {/* Structured Data Table */}
            <Card className="p-6 md:p-8 bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-brand-brown mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-green" />
                Service Volume Summary Table
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-brown text-white text-sm">
                      <th className="py-3 px-4 rounded-l-lg">Service Stream</th>
                      <th className="py-3 px-4 text-right">People Served</th>
                      <th className="py-3 px-4 text-right rounded-r-lg">Share of Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm text-[#111111]">
                    {report.serviceDistribution.map((item, idx) => (
                      <tr key={item.service} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="py-3.5 px-4 font-medium">{item.service}</td>
                        <td className="py-3.5 px-4 text-right font-bold text-brand-brown">{item.count}</td>
                        <td className="py-3.5 px-4 text-right text-gray-600">{item.percentage}</td>
                      </tr>
                    ))}
                    <tr className="bg-amber-50/70 font-bold text-brand-brown">
                      <td className="py-3.5 px-4">Total Community Reach</td>
                      <td className="py-3.5 px-4 text-right text-brand-orange text-base">301</td>
                      <td className="py-3.5 px-4 text-right">100.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                *General consultations accounted for the largest share of attendance (40.2%), while specialized screening and reproductive health streams provided critical preventive touchpoints.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Clinical Findings */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-wider block mb-2">
              Service-By-Service Detail
            </span>
            <h2 className="section-heading">Detailed Clinical Findings</h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Full analysis of consultations, laboratory screenings, diagnosis patterns, and clinical referral linkages recorded during the outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* 1. General Consultations */}
            <Card className="p-6 md:p-8 bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-tint text-brand-orange flex items-center justify-center font-bold">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown">1. General Consultations</h3>
                    <p className="text-xs text-gray-500">121 patients seen • 71.1% women</p>
                  </div>
                </div>
                <p className="text-sm text-[#111111] leading-relaxed mb-5">
                  General consultations represented the busiest service point, providing primary diagnosis and prescription support. A total of <strong>71 consultations</strong> resulted in a documented diagnosis and immediate medication dispensing, demonstrating widespread unmet demand for basic curative care.
                </p>

                <h4 className="text-sm font-bold text-brand-brown uppercase tracking-wider mb-3">
                  Leading Documented Diagnoses (71 Total):
                </h4>
                <div className="space-y-3 mb-6">
                  {report.diagnoses.map((diag) => (
                    <div key={diag.condition}>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-gray-700">{diag.condition}</span>
                        <span className="text-brand-brown font-bold">
                          {diag.count} ({diag.percentage})
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-brand-orange h-2 rounded-full"
                          style={{ width: diag.percentage }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-amber-50 p-3.5 border border-amber-200/60 text-xs text-brand-brown">
                <strong>Chronic Disease Continuity:</strong> Hypertension (13) and diabetes (7) were identified as major non-communicable conditions requiring ongoing clinical follow-up and structured referral pathways.
              </div>
            </Card>

            {/* 2. Sickle Cell Screening */}
            <Card className="p-6 md:p-8 bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-tint text-brand-green flex items-center justify-center font-bold">
                    <Microscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown">2. Sickle Cell Screening</h3>
                    <p className="text-xs text-gray-500">Delivered with Tackle Sickle Cell Africa (TSCA)</p>
                  </div>
                </div>
                <p className="text-sm text-[#111111] leading-relaxed mb-5">
                  Conducted in partnership with TSCA, rapid screening and pre/post-test counseling were provided to <strong>76 community members</strong>. Approximately <strong>30.3% (23 individuals)</strong> of those screened were found to carry either sickle cell trait or disease.
                </p>

                <h4 className="text-sm font-bold text-brand-brown uppercase tracking-wider mb-3">
                  Screening Results Breakdown (76 Screened):
                </h4>
                <div className="space-y-3 mb-6">
                  {report.sickleCellStats.map((sc) => (
                    <div key={sc.genotype} className="p-3 rounded-lg border border-gray-100 bg-gray-50/70">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-sm font-bold text-brand-brown">{sc.status}</span>
                          <span className="text-xs font-mono ml-2 px-2 py-0.5 rounded bg-white border text-brand-green font-bold">
                            {sc.genotype}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-brand-orange">{sc.count}</span>
                          <span className="text-xs text-gray-500 ml-1">({sc.percentage})</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-green-tint/60 p-3.5 border border-brand-green/20 text-xs text-brand-brown">
                <strong>Reproductive Counseling Impact:</strong> Knowledge of sickle cell status enables these 23 carrier and affected individuals to make informed reproductive and family planning decisions, helping prevent future sickle cell births.
              </div>
            </Card>

            {/* 3. HIV Counseling & Screening */}
            <Card className="p-6 md:p-8 bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-tint text-brand-orange flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown">3. HIV Screening & Prevention</h3>
                    <p className="text-xs text-gray-500">Delivered with TASO Gulu Centre</p>
                  </div>
                </div>
                <p className="text-sm text-[#111111] leading-relaxed mb-5">
                  A total of <strong>56 community members</strong> were reached through voluntary HIV education, counseling, and diagnostic testing. 52 clients completed testing, while 1 client received counseling only.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-lg border border-gray-100 bg-gray-50 text-center">
                    <div className="text-2xl font-bold text-brand-green">{report.hivStats.negative}</div>
                    <div className="text-xs font-semibold text-gray-600">Tested Negative (98.1%)</div>
                  </div>
                  <div className="p-3.5 rounded-lg border border-brand-orange/30 bg-orange-tint/40 text-center">
                    <div className="text-2xl font-bold text-brand-orange">{report.hivStats.positive}</div>
                    <div className="text-xs font-semibold text-brand-brown">Tested Positive (1.9%)</div>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-[#111111] mb-5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span><strong>PrEP Initiation:</strong> 3 high-risk clients were initiated on Pre-Exposure Prophylaxis (PrEP).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span><strong>Linkage to Care:</strong> The individual testing positive was immediately connected with confidential follow-up counseling and treatment services.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-3.5 border border-gray-200 text-xs text-gray-600">
                Integrated delivery paired testing with preventive counseling, eliminating stigma through broad community facility access.
              </div>
            </Card>

            {/* 4. Cervical Cancer & Family Planning */}
            <Card className="p-6 md:p-8 bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                    <Baby className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-brown">4. Cervical Cancer & Family Planning</h3>
                    <p className="text-xs text-gray-500">Delivered with Reproductive Health Uganda (RHU), Gulu Branch</p>
                  </div>
                </div>
                <p className="text-sm text-[#111111] leading-relaxed mb-4">
                  RHU midwives provided Visual Inspection with Acetic Acid (VIA) cervical cancer screening for <strong>35 women</strong> and modern contraceptive services for <strong>13 clients</strong>.
                </p>

                <div className="border-t border-gray-100 pt-4 mb-4">
                  <h4 className="text-xs font-bold text-brand-brown uppercase tracking-wider mb-2">
                    Cervical Cancer Screening (35 Women):
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
                    <div className="p-2 bg-gray-50 rounded border">
                      <div className="font-bold text-brand-brown">12 (34.3%)</div>
                      <div className="text-gray-500">Under 30 yrs</div>
                    </div>
                    <div className="p-2 bg-gray-50 rounded border">
                      <div className="font-bold text-brand-brown">5 (14.3%)</div>
                      <div className="text-gray-500">30–35 yrs</div>
                    </div>
                    <div className="p-2 bg-gray-50 rounded border">
                      <div className="font-bold text-brand-brown">18 (51.4%)</div>
                      <div className="text-gray-500">Over 35 yrs</div>
                    </div>
                  </div>
                  <p className="text-xs text-brand-orange font-semibold">
                    *1 woman (2.9%) was identified with suspicious lesions and referred for comprehensive assessment.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs font-bold text-brand-brown uppercase tracking-wider mb-2">
                    Family Planning Support (13 Clients, Ages 17–45):
                  </h4>
                  <div className="flex justify-between text-xs text-gray-700 mb-1">
                    <span>Depo-Provera (Injectable): <strong>11 (84.6%)</strong></span>
                    <span>Sayana Press: <strong>2 (15.4%)</strong></span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Age distribution: 17–20 yrs (5, 38.5%), 21–25 yrs (3, 23.1%), 26–45 yrs (5, 38.5%).
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Multi-Partner Collaboration */}
      <section className="section-wrapper bg-gray-50 border-t border-gray-100">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="text-brand-green font-bold text-sm uppercase tracking-wider block mb-2">
              Coalition in Action
            </span>
            <h2 className="section-heading">Partner Collaboration</h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              The Abwoch Medical Outreach succeeded through an explicit model of task-sharing, cost-sharing, and technical coordination among leading health partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {report.partners.map((partner) => (
              <Card key={partner.name} className="p-5 md:p-6 bg-white border border-gray-200 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-orange-tint text-brand-orange flex items-center justify-center mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
                    {partner.role}
                  </span>
                  <h3 className="text-lg font-bold text-brand-brown mb-3">{partner.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{partner.contribution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Lessons Learned & Next-Phase Priorities */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Operational Lessons Learned */}
            <Card className="p-6 md:p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-tint text-brand-orange flex items-center justify-center mb-5">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-[23px] md:text-[26px] font-bold text-brand-brown mb-3">
                Operational Lessons Learned
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Accountability and programme reflection guide our continuous investment and service expansion:
              </p>
              <div className="space-y-4">
                {report.lessonsLearned.map((lesson) => (
                  <div key={lesson.title} className="border-l-4 border-brand-orange pl-4 py-1">
                    <h3 className="text-[16px] font-bold text-brand-brown">{lesson.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-1">{lesson.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Next-Phase Priorities */}
            <Card className="p-6 md:p-8 bg-green-tint border border-brand-green/20 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white text-brand-green flex items-center justify-center mb-5 shadow-sm">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-[23px] md:text-[26px] font-bold text-brand-brown mb-3">
                Next-Phase Priorities
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Validated priorities to scale the community outreach model across the Acholi sub-region:
              </p>
              <div className="space-y-4">
                {report.nextPriorities.map((item) => (
                  <div key={item.number} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-[16px] font-bold text-brand-brown">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Photographic Gallery: Programme in Practice */}
      <section className="section-wrapper bg-gray-50 border-t border-gray-100">
        <div className="content-container">
          <ProgrammeInPracticeGallery
            title="Abwoch Medical Outreach"
            heading="Outreach Field Documentation"
            description="Visual records and photographic documentation from AWIHF's 3 July 2026 pre-launch medical outreach at Abwoch Health Centre III."
            images={report.galleryImages}
            wrapInSection={false}
          />
        </div>
      </section>

      {/* Download Full Report CTA Banner with Hero-Style Background Layering */}
      <section className="relative w-full min-h-[220px] md:min-h-[300px] py-10 md:py-16 px-4 md:px-8 lg:px-16 flex items-center justify-center overflow-hidden bg-brand-brown text-white shadow-inner">
        {/* Background Layers: Photograph underneath + Semi-transparent orange/gold brand overlay on top */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Layer 3 (Bottom): Outreach/Hero background image */}
          <Image
            src="/images/AWIHF-Hero.webp"
            alt=""
            fill
            className="object-cover object-[50%_25%] md:object-[50%_20%]"
            sizes="100vw"
          />
          {/* Layer 2 (Middle): AWIHF signature orange-to-gold brand overlay with tuned translucency */}
          <div className="absolute inset-0 bg-gradient-brand opacity-85" />
          <div className="absolute inset-0 bg-brand-brown/12" />
        </div>

        {/* Layer 1 (Top): 100% Opaque Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/95 bg-white/20 px-3.5 py-1 rounded-full mb-3 md:mb-4 shadow-sm backdrop-blur-sm">
            Official Outreach Publication
          </span>
          <h2 className="text-2xl md:text-[34px] lg:text-[38px] font-bold leading-tight mb-3 md:mb-4 text-white">
            Download the Abwoch Medical Outreach Report
          </h2>
          <p className="text-white/95 text-[15px] md:text-[17px] leading-[1.7] mb-6 md:mb-8 max-w-2xl mx-auto font-normal">
            Access the complete documented outreach report containing all statistics, service distribution data, clinical findings, partner acknowledgments, and operational recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
            <a href={report.downloadUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="large"
                className="w-full sm:w-auto bg-brand-brown text-white hover:bg-brand-brown/90 hover:brightness-110 shadow-lg border-none font-semibold"
              >
                <ArrowDownToLine className="w-5 h-5 mr-2 text-brand-gold" />
                Download Complete Report
              </Button>
            </a>
            <Link href="/news/abwoch-medical-outreach-2026" className="w-full sm:w-auto">
              <Button
                size="large"
                variant="ghost"
                className="w-full sm:w-auto text-white border-2 border-white hover:bg-white/15 hover:text-white font-semibold"
              >
                Read News Article
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
