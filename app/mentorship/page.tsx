"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

/* 
 * TODO: This page is currently a placeholder.
 * It will be replaced with a full mentorship portal in a future version.
 */
export default function MentorshipPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <>
      <section className="w-full bg-gradient-brand flex items-center justify-center min-h-[240px] px-4 md:px-8">
        <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2]">Mentorship Programme</h1>
      </section>

      <section className="section-wrapper bg-gray-50 min-h-[50vh] flex items-center">
        <div className="content-container w-full max-w-xl mx-auto">
          <Card className="text-center p-8 md:p-12">
            <div className="mb-6">
              <Badge variant="coming-soon">Coming Soon</Badge>
            </div>
            <h2 className="text-[24px] font-semibold text-brand-brown mb-4">Mentorship Portal</h2>
            <p className="text-[#111111] text-[18px] leading-[1.6] mb-8">
              Connecting healthcare students and Community Health Workers across Uganda with experienced mentors.
            </p>
            
            {status === 'success' ? (
              <div className="bg-green-tint text-brand-green p-4 rounded-lg flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Thanks! We'll notify you when it launches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  disabled={status === 'loading'}
                  placeholder="Enter your email address"
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-base text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-colors duration-150 disabled:opacity-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Notify me when it launches"
                />
                <Button 
                  type="submit" 
                  size="medium"
                  isLoading={status === 'loading'}
                  className="w-full sm:w-auto bg-gray-500 text-white hover:bg-gray-600 border-none"
                >
                  Notify me
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </>
  );
}