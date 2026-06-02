import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Calendar, User, Clock, Bookmark, Heart } from 'lucide-react';
import { DonateCTA } from '@/components/sections/DonateCTA';

const articlesData: Record<string, any> = {
  'patiko-medical-outreach-2025': {
    title: "Patiko Medical Outreach Reaches 1,000+ Households",
    category: "Outreach",
    image: "/images/lucky.webp",
    author: "AWIHF Communications",
    date: "July 14, 2025",
    readTime: "3 min read",
    content: [
      "Acholi Women in Health Foundation (AWIHF) successfully concluded its largest single-programme event of the year, the Patiko Medical Outreach, which ran from July 10 to July 13, 2025. Operating over four intense days in underserved rural communities across Patiko sub-county, Northern Uganda, our team of local clinicians, health workers, and student volunteers delivered high-volume, multi-service community health care to exactly 1,000+ households.",
      "Our mobile health hubs provided completely free primary medical consultations, diagnostic testing, and professional vision screenings with corrective resource provisions. Focusing heavily on reproductive safety, our nurses conducted Sexual and Reproductive Health and Rights (SRHR) workshops for adolescent girls, distributed maternal care packages to mothers, and facilitated critical post-abortion care referrals.",
      "This successful outreach validates AWIHF's operational capacity to organize and deliver high-volume, culturally trusted health programs in Northern Uganda's most underserved rural settings."
    ]
  },
  'national-mentorship-launch': {
    title: "National Mentorship Programme Launched",
    category: "Mentorship",
    image: "/images/stephen.webp",
    author: "Operations Desk",
    date: "November 5, 2025",
    readTime: "4 min read",
    content: [
      "In Phase 3 of AWIHF's 2025 operations plan, we officially launched our national mentorship program, designed to bridge the structural gap in Northern Uganda's post-conflict clinical capacity. The initiative directly connects nursing students, medical student professionals, and Community Health Workers (CHWs) across the country with experienced mentors.",
      "Through intensive skills mentorship, peer education frameworks, and leadership development workshops, the program equips the next generation of healthcare professionals with the tools, confidence, and community-anchored principles needed to lead local health innovations.",
      "To date, over 50 healthcare student professionals nationwide have been successfully equipped and paired with leading clinical mentors. By building this pipeline of women-led healthcare leadership, we ensure that Northern Uganda's public health infrastructure becomes structurally resilient for the long term."
    ]
  },
  'cervical-cancer-regional-initiative': {
    title: "Regional Cervical Cancer Prevention Initiative Rolled Out",
    category: "Preventive Care",
    image: "/images/lucky.webp",
    author: "AWIHF Health Committee",
    date: "September 25, 2025",
    readTime: "3 min read",
    content: [
      "Cervical cancer represents a leading, yet completely preventable, health burden among women in Northern Uganda, where limited diagnostic access and clinical awareness create a silent crisis. In response, AWIHF rolled out its Regional Cervical Cancer Prevention Initiative across rural sub-counties.",
      "Our outreach teams conducted large-scale diagnostic literacy campaigns, helping community members understand early-detection symptoms, risk factors, and screening benefits. We worked in close coordination with local public health facilities to organize rural screening checkups, helping hundreds of women access primary diagnostic services.",
      "Moving into 2026, AWIHF's targets include establishing functional rural screening hubs and training an additional 1,000 Community Health Workers (CHWs) to integrate cervical cancer screenings with maternal health checkups, establishing robust preventive care networks."
    ]
  },
  'gbv-aids-national-advocacy': {
    title: "AWIHF Joins National GBV and AIDS Awareness Campaigns",
    category: "Advocacy",
    image: "/images/stephen.webp",
    author: "Advocacy Team",
    date: "December 1, 2025",
    readTime: "4 min read",
    content: [
      "To address the lingering social and physical health scars of Gulu's post-conflict landscape, AWIHF joined national advocacy coalitions to mark campaigns for Gender-Based Violence (GBV) prevention and HIV/AIDS awareness.",
      "Integrating direct clinical checkups with critical psychosocial support, our advocates brought a distinct Northern Uganda community perspective to the national policy dialogue. The legacy of conflict has left local rates of PTSD, depression, and GBV trauma alarmingly high, requiring layered, highly sensitive advocacy and counseling.",
      "By training 200+ SRHR peer educators at the sub-county level and establishing robust psychological referral channels, AWIHF continues to advocate for systemic protection and localized care pathways, ensuring survivors can access equity and healing without stigma."
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export default async function NewsDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = articlesData[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Navigation breadcrumb */}
      <div className="w-full bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-gray-500">
          <Link href="/news" className="flex items-center gap-2 hover:text-brand-orange transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to News Updates
          </Link>
          <div className="flex items-center gap-1 text-brand-green font-semibold uppercase tracking-wider text-xs">
            <Bookmark className="w-4 h-4 shrink-0" /> Official Milestone
          </div>
        </div>
      </div>

      {/* Main article */}
      <article className="section-wrapper bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Badge variant="news" className="bg-brand-orange text-white mb-4 text-[12px]">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-brand-brown leading-tight mb-6">
              {article.title}
            </h1>
            
            {/* Metadata */}
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-500 border-y border-gray-100 py-4">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-brand-orange" /> By {article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-brand-orange" /> {article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-orange" /> {article.readTime}</span>
            </div>
          </div>

          {/* Banner image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-10 shadow-sm border border-gray-200">
            <Image 
              src={article.image} 
              alt={article.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Body content */}
          <div className="text-[#111111] text-[18px] leading-[1.7] space-y-6">
            {article.content.map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Share / Back footer */}
          <div className="border-t border-gray-100 pt-8 mt-12 flex items-center justify-between">
            <Link href="/news">
              <Button variant="secondary" size="medium">
                All Articles
              </Button>
            </Link>
            <Link href="/donate">
              <Button variant="primary" size="medium">
                Support AWIHF Programs
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <DonateCTA />
    </>
  );
}