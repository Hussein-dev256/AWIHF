import React from 'react';
import { NewsSearchClient } from '@/components/news/NewsSearchClient';
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

        <NewsSearchClient posts={newsPosts} />
      </div>
    </section>
  );
}
