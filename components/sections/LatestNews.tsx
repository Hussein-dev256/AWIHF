import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function LatestNews() {
  const newsItems = [
    {
      title: "Patiko Medical Outreach Reaches 1,000+ Households",
      category: "Outreach",
      date: "July 14, 2025",
      excerpt: "Our high-volume, community-rooted medical camp in Patiko delivered free medical consultations, vision screenings, and maternal care to 1,000+ underserved households over four days.",
      image: "/images/lucky.webp",
      href: "/news/patiko-medical-outreach-2025"
    },
    {
      title: "National Mentorship Programme Launched",
      category: "Mentorship",
      date: "November 5, 2025",
      excerpt: "In Phase 3 of our programming, AWIHF officially launched a national pipeline connecting nursing and medical student professionals with experienced clinical leaders across Uganda.",
      image: "/images/stephen.webp",
      href: "/news/national-mentorship-launch"
    },
    {
      title: "Regional Cervical Cancer Initiative Rolled Out",
      category: "Preventive Care",
      date: "September 25, 2025",
      excerpt: "AWIHF rolled out extensive public screening awareness and diagnosis literacy campaigns across sub-counties, educating rural women on early-detection preventive pathways.",
      image: "/images/lucky.webp",
      href: "/news/cervical-cancer-regional-initiative"
    }
  ];

  return (
    <section className="section-wrapper bg-white">
      <div className="content-container">
        <div className="text-center md:text-left mb-8">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-2 block">Recent Milestones</span>
          <h2 className="section-heading">Latest News & Updates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 mb-10">
          {newsItems.map((item, index) => (
            <Card key={index} className="group p-0 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-video w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="news" className="bg-brand-orange text-white text-[12px]">{item.category}</Badge>
                </div>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <span className="text-gray-400 text-xs mb-2 block font-medium">{item.date}</span>
                <h4 className="text-[18px] md:text-[20px] font-semibold text-brand-brown mb-3 leading-[1.4] group-hover:text-brand-orange transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-4 flex-1">{item.excerpt}</p>
                <div className="mt-auto">
                  <Link href={item.href} className="text-brand-orange font-semibold text-sm hover:text-brand-gold transition-colors inline-flex items-center">
                    Read More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/news">
            <Button variant="secondary" size="medium">View All News & Announcements</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}