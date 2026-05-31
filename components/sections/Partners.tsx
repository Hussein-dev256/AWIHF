import React from 'react';
import { Badge } from '../ui/Badge';

export function Partners() {
  return (
    <section className="section-wrapper bg-gray-50">
      <div className="content-container text-center">
        <h2 className="section-heading mb-4">Our Partners & Stakeholders</h2>
        <p className="text-gray-500 text-[18px] max-w-2xl mx-auto mb-10">
          We collaborate with local governments, community leaders, and international organizations to create sustainable healthcare solutions.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {/* Placeholders for partner logos */}
          <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400 font-bold text-xl">Partner 1</span>
          </div>
          <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400 font-bold text-xl">Partner 2</span>
          </div>
          <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400 font-bold text-xl">Partner 3</span>
          </div>
          <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400 font-bold text-xl">Partner 4</span>
          </div>
        </div>
      </div>
    </section>
  );
}