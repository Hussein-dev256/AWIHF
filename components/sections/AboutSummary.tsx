import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function AboutSummary() {
  return (
    <section className="section-wrapper bg-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">Who We Are</span>
            <h2 className="text-[30px] md:text-[36px] font-semibold text-brand-brown leading-[1.3] mb-6">
              Women-led. Community-rooted. Health-focused.
            </h2>
            <p className="text-[#111111] text-[18px] leading-[1.6] mb-4">
              Acholi Women in Health Foundation (AWIHF) was founded in 2024 to address the persistent health challenges facing women and girls in the post-conflict Acholi sub-region of Northern Uganda.
            </p>
            <p className="text-gray-600 text-[16px] leading-[1.6] mb-8">
              Our mission is to close the gaps left behind by two decades of insurgency. We believe that when women are empowered to lead, innovate, and deliver high-quality care, the entire community thrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button variant="secondary" size="medium">Learn More About Us</Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-orange-tint p-6 rounded-xl border border-brand-orange/10">
                <div className="text-brand-orange font-bold text-3xl mb-2">106.0</div>
                <div className="text-sm font-medium text-brand-brown">Maternal deaths per 100k live births in Acholi</div>
              </div>
              <div className="bg-green-tint p-6 rounded-xl border border-brand-green/10">
                <div className="text-brand-green font-bold text-3xl mb-2">24%</div>
                <div className="text-sm font-medium text-brand-brown">Teenage pregnancy rate in rural areas</div>
              </div>
            </div>
            <div className="bg-brown-tint p-6 rounded-xl border border-brand-brown/10 flex flex-col justify-center mt-8 md:mt-12">
              <h3 className="text-[20px] font-bold text-brand-brown mb-3">Our Vision</h3>
              <p className="text-[#111111] text-[15px] leading-[1.6] italic">
                "A community where women and girls are able to access equitable and holistic healthcare services."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}