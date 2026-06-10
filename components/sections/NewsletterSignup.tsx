"use client";

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <section className="section-wrapper bg-gray-50">
      <div className="content-container flex flex-col items-center text-center max-w-[560px] mx-auto">
        <h2 className="text-[30px] font-semibold text-brand-brown leading-[1.3] mb-3">
          Stay Connected
        </h2>
        <p className="text-gray-500 text-[18px] leading-[1.6] mb-8">
          Get updates on our programmes, events, and community health news.
        </p>
        
        {status === 'success' ? (
          <div className="w-full bg-green-tint text-brand-green p-4 rounded-lg flex items-center justify-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Thank you - you&apos;re subscribed!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row gap-3">
            <input
              type="email"
              required
              disabled={status === 'loading'}
              placeholder="Enter your email address"
              className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-base text-[#111111] placeholder:text-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-colors duration-150 disabled:opacity-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              variant="primary" 
              size="medium"
              isLoading={status === 'loading'}
              className="w-full md:w-auto"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
