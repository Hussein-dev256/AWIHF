import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function LatestNews() {
  // Placeholder cards since no real posts exist yet
  const placeholders = [1, 2, 3];

  return (
    <section className="section-wrapper bg-white">
      <div className="content-container">
        <h2 className="section-heading text-center md:text-left">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 mb-10">
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
                <h4 className="text-[20px] font-semibold text-brand-brown mb-2 leading-[1.4] group-hover:text-brand-orange transition-colors">
                  AWIHF News Update {i}
                </h4>
                <p className="text-gray-500 text-[14px] mb-4">Coming soon...</p>
                <div className="mt-auto">
                  <span className="text-gray-400 text-sm cursor-not-allowed">Read More</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link href="/news">
            <Button variant="secondary" size="medium">View All News</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}