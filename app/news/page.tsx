import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function NewsPage() {
  const newsItems = [
    {
      title: "Patiko Medical Outreach Reaches 1,000+ Households",
      category: "Outreach",
      slug: "patiko-medical-outreach-2025",
      date: "July 14, 2025",
      excerpt: "Our high-volume, community-rooted medical camp in Patiko Sub-County delivered free medical consultations, vision screenings, and maternal care to 1,000+ underserved households over four days.",
      image: "/images/lucky.webp"
    },
    {
      title: "National Mentorship Programme Launched",
      category: "Mentorship",
      slug: "national-mentorship-launch",
      date: "November 5, 2025",
      excerpt: "In Phase 3 of our programming, AWIHF officially launched a national pipeline connecting nursing and medical student professionals with experienced clinical leaders across Uganda.",
      image: "/images/stephen.webp"
    },
    {
      title: "Regional Cervical Cancer Initiative Rolled Out",
      category: "Preventive Care",
      slug: "cervical-cancer-regional-initiative",
      date: "September 25, 2025",
      excerpt: "AWIHF rolled out extensive public screening awareness and diagnosis literacy campaigns across sub-counties, educating rural women on early-detection preventive pathways.",
      image: "/images/lucky.webp"
    },
    {
      title: "AWIHF Joins National GBV and AIDS Awareness Campaigns",
      category: "Advocacy",
      slug: "gbv-aids-national-advocacy",
      date: "December 1, 2025",
      excerpt: "Integrating healthcare with critical psychosocial support, AWIHF raised our voices during national GBV and HIV/AIDS campaigns to provide a dedicated Northern Uganda perspective.",
      image: "/images/stephen.webp"
    }
  ];

  return (
    <section className="section-wrapper bg-white min-h-screen">
      <div className="content-container">
        <div className="mb-10 text-center md:text-left">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-2 block">Our Chronicles</span>
          <h1 className="text-3xl md:text-[40px] font-bold text-brand-brown mb-4">News & Announcements</h1>
          <p className="text-gray-500 text-[18px]">Stay updated with our official milestones, field reports, and program announcements.</p>
        </div>

        {/* Search & Filter Component */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between border-b border-gray-100 pb-6">
          <input 
            type="text" 
            placeholder="Search news..." 
            className="input-field max-w-md"
            disabled
          />
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto mt-4 md:mt-0">
            <Badge variant="news" className="bg-brand-orange text-white">All Updates</Badge>
            <Badge variant="news" className="bg-gray-100 text-gray-600 hover:bg-gray-200">Outreach</Badge>
            <Badge variant="news" className="bg-gray-100 text-gray-600 hover:bg-gray-200">Mentorship</Badge>
            <Badge variant="news" className="bg-gray-100 text-gray-600 hover:bg-gray-200">Preventive Care</Badge>
            <Badge variant="news" className="bg-gray-100 text-gray-600 hover:bg-gray-200">Advocacy</Badge>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((item) => (
            <Card key={item.slug} className="group p-0 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-video w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="news" className="bg-brand-orange text-white text-[12px]">{item.category}</Badge>
                </div>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <span className="text-gray-400 text-xs mb-2 block font-medium">{item.date}</span>
                <h4 className="text-[18px] md:text-[20px] font-semibold text-brand-brown mb-3 leading-[1.4] group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 flex-1">
                  {item.excerpt}
                </p>
                <div className="mt-auto">
                  <Link href={`/news/${item.slug}`} className="text-brand-orange font-semibold text-sm hover:text-brand-gold transition-colors inline-flex items-center">
                    Read Full Article <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}