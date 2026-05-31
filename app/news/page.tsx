import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export default function NewsPage() {
  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <section className="section-wrapper bg-white min-h-screen">
      <div className="content-container">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-[40px] font-bold text-brand-brown mb-4">Latest News</h1>
          <p className="text-gray-500 text-[18px]">Stay updated with our recent activities and announcements.</p>
        </div>

        {/* Search & Filter placeholder */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input 
            type="text" 
            placeholder="Search news..." 
            className="input-field max-w-md"
            disabled
          />
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Badge variant="news">All</Badge>
            <Badge variant="news" className="bg-gray-100 text-gray-600">Events</Badge>
            <Badge variant="news" className="bg-gray-100 text-gray-600">Health</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {placeholders.map((i) => (
            <Card key={i} className="group p-0 overflow-hidden flex flex-col h-full">
              <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Badge variant="coming-soon">Coming Soon</Badge>
                </div>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <Badge variant="news">Update</Badge>
                </div>
                <h4 className="text-[20px] font-semibold text-brand-brown mb-2 leading-[1.4]">
                  AWIHF News Update {i}
                </h4>
                <p className="text-gray-500 text-[14px] mb-4">
                  We are working on bringing you the latest updates. Check back soon for news and announcements from our team in Gulu.
                </p>
                <div className="mt-auto">
                  <span className="text-gray-400 text-sm cursor-not-allowed">Read More</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}