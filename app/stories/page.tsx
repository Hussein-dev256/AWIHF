import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function StoriesPage() {
  const placeholders = [1, 2, 3];

  return (
    <section className="section-wrapper bg-white min-h-screen">
      <div className="content-container">
        <div className="mb-10 text-center md:text-left max-w-2xl mx-auto md:mx-0">
          <h1 className="text-3xl md:text-[40px] font-bold text-brand-brown mb-4">Success Stories</h1>
          <p className="text-gray-500 text-[18px]">
            Real stories from community members helped by AWIHF programmes in Northern Uganda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {placeholders.map((i) => (
            <Card key={i} className="group p-0 overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="relative aspect-[3/2] w-full bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Badge variant="coming-soon">Coming Soon</Badge>
                </div>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1 text-center md:text-left">
                <h4 className="text-[20px] font-semibold text-brand-brown mb-2 leading-[1.4]">
                  Community Story {i}
                </h4>
                <p className="text-gray-500 text-[14px] mb-6">
                  Inspiring stories of resilience and health empowerment are being collected and will be shared here soon.
                </p>
                <div className="mt-auto">
                  <Button variant="secondary" size="small" disabled className="w-full md:w-auto">Read Story</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}