import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { getNewsPosts } from '@/lib/content/news';

export default async function NewsPage() {
  const newsPosts = await getNewsPosts();

  return (
    <section className="section-wrapper bg-white min-h-screen">
      <div className="content-container">
        <div className="mb-10 text-center md:text-left">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-2 block">Our Chronicles</span>
          <h1 className="text-3xl md:text-[40px] font-bold text-brand-brown mb-4">News & Announcements</h1>
          <p className="text-gray-500 text-[18px]">Stay updated with our official milestones, field reports, and program announcements.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between border-b border-gray-100 pb-6">
          <input
            type="text"
            placeholder="Search news..."
            className="input-field max-w-md"
            disabled
            aria-label="Search news"
          />
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto mt-4 md:mt-0">
            <Badge variant="news" className="!bg-brand-orange !text-white shadow-sm ring-1 ring-brand-orange/20">All Updates</Badge>
            <Badge variant="news" className="bg-gray-100 text-gray-600 hover:bg-gray-200">Outreach</Badge>
            <Badge variant="news" className="bg-gray-100 text-gray-600 hover:bg-gray-200">Mentorship</Badge>
            <Badge variant="news" className="bg-gray-100 text-gray-600 hover:bg-gray-200">Preventive Care</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {newsPosts.map((item) => (
            <Card key={item.slug} className="group p-0 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-video w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 z-30">
                  <Badge variant="news" className="!bg-brand-orange !text-white text-[12px] shadow-md ring-1 ring-white/70">{item.category}</Badge>
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
                    Read Full Article <span className="ml-1">-&gt;</span>
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
