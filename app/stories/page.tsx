import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function StoriesPage() {
  const stories = [
    {
      slug: "safe-motherhood-patiko",
      title: "Hope & Safe Delivery in Patiko Sub-County",
      excerpt: "How a young mother accessed crucial prenatal support, clinical consultations, and emergency birth referrals during our Patiko Medical Outreach, ensuring a safe delivery.",
      category: "Maternal Health",
      image: "/images/lucky.webp",
      author: "AWIHF Outreach Team"
    },
    {
      slug: "healing-trauma-gulu",
      title: "Rebuilding Mental Wellness After Conflict",
      excerpt: "How a young woman carried the heavy post-conflict trauma burden and PTSD in Gulu, but found a secure path to recovery, clinical care, and hope through AWIHF healing circles.",
      category: "Mental Health",
      image: "/images/stephen.webp",
      author: "Psychosocial Support Team"
    },
    {
      slug: "dignity-hygiene-education",
      title: "Dignity in Education: Empowering Schoolgirls",
      excerpt: "How a teenage schoolgirl in a rural sub-county was equipped with reusable sanitary pads and trained as an SRHR peer educator, eliminating absenteeism in her classroom.",
      category: "Health Education",
      image: "/images/lucky.webp",
      author: "Education Coordinator"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-brand flex items-center justify-center min-h-[280px] px-4 md:px-8">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2] mb-4">Success Stories</h1>
          <p className="text-white/80 text-[18px]">Vivid narratives of resilience, health empowerment, and transformation in Northern Uganda.</p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section-wrapper bg-white min-h-screen">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stories.map((story) => (
              <Card key={story.slug} className="group p-0 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[3/2] w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                  <Image 
                    src={story.image} 
                    alt={story.title} 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="program" className="bg-brand-orange text-white text-[12px]">{story.category}</Badge>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <span className="text-[12px] font-semibold text-gray-400 mb-2 block">By {story.author}</span>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-brand-brown mb-3 leading-[1.4] group-hover:text-brand-orange transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {story.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link href={`/stories/${story.slug}`}>
                      <Button variant="secondary" size="small" className="w-full sm:w-auto">Read Story</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}