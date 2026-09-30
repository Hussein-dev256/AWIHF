import Link from 'next/link';
import { ArrowDownToLine, ArrowRight, FileText, Activity } from 'lucide-react';
import { getImpactReportContent } from '@/lib/content/impactReport';
import { getAbwochReportData } from '@/lib/content/abwochReport';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';

export async function ImpactReportSpotlight() {
  const [annualReport, abwochReport] = await Promise.all([
    getImpactReportContent(),
    getAbwochReportData(),
  ]);

  return (
    <section className="section-wrapper bg-white">
      <div className="content-container space-y-8 md:space-y-10">
        {/* Annual Impact Report Spotlight */}
        <Reveal variant="scale" className="rounded-2xl border border-brand-orange/20 bg-orange-tint/30 p-5 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-8 items-center">
          <div>
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white text-brand-orange flex items-center justify-center mb-4 md:mb-5 shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
              Annual Impact Publication
            </span>
            <h2 className="text-[24px] md:text-[36px] font-bold text-brand-brown leading-tight mb-3 md:mb-4">
              {annualReport.title}
            </h2>
            <p className="text-[#111111] text-[15px] md:text-[17px] leading-[1.7] mb-5 md:mb-6">{annualReport.executiveSummary[0]}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/impact/report">
                <Button size="medium" className="w-full sm:w-auto">
                  Explore the Impact Report
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={annualReport.downloadUrl} target="_blank" rel="noopener noreferrer">
                <Button size="medium" variant="secondary" className="w-full sm:w-auto">
                  <ArrowDownToLine className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {annualReport.stats.slice(0, 3).map((stat) => (
              <Card key={stat.label} className="bg-white p-5 border border-gray-200 shadow-sm">
                <div className="text-[28px] md:text-[30px] font-bold text-brand-orange mb-2">{stat.value}</div>
                <h3 className="text-[15px] font-bold text-brand-brown mb-2">{stat.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{stat.detail}</p>
              </Card>
            ))}
          </div>
        </Reveal>

        {/* Abwoch Medical Outreach Report Spotlight */}
        <Reveal variant="scale" className="rounded-2xl border border-brand-green/20 bg-green-tint/40 p-5 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-8 items-center">
          <div>
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white text-brand-green flex items-center justify-center mb-4 md:mb-5 shadow-sm">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
              Field Outreach Report • 3 July 2026
            </span>
            <h2 className="text-[24px] md:text-[36px] font-bold text-brand-brown leading-tight mb-3 md:mb-4">
              Abwoch Medical Outreach Report
            </h2>
            <p className="text-[#111111] text-[15px] md:text-[17px] leading-[1.7] mb-5 md:mb-6">
              Read the full report from AWIHF&apos;s 3 July 2026 medical outreach at Abwoch Health Centre III, reaching 301 community members across five essential health services.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/impact/reports/abwoch-2026">
                <Button size="medium" className="w-full sm:w-auto">
                  Explore Report
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={abwochReport.downloadUrl} target="_blank" rel="noopener noreferrer">
                <Button size="medium" variant="secondary" className="w-full sm:w-auto">
                  <ArrowDownToLine className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {abwochReport.keyMetrics.slice(0, 3).map((metric) => (
              <Card key={metric.label} className="bg-white p-5 border border-gray-200 shadow-sm">
                <div className="text-[28px] md:text-[30px] font-bold text-brand-green mb-2">{metric.value}</div>
                <h3 className="text-[15px] font-bold text-brand-brown mb-2">{metric.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{metric.detail}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
