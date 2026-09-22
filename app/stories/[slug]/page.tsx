import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Calendar, User, Clock, Heart } from 'lucide-react';
import { DonateCTA } from '@/components/sections/DonateCTA';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { getStories, getStory } from '@/lib/content/stories';

type StoryDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata(props: StoryDetailProps): Promise<Metadata> {
  const params = await props.params;
  const story = getStory(params.slug);

  if (!story) {
    return {};
  }

  return {
    title: `${story.title} | AWIHF Impact Story`,
    description: story.excerpt,
    alternates: {
      canonical: `/stories/${story.slug}`,
    },
    openGraph: {
      title: story.title,
      description: story.excerpt,
      url: `/stories/${story.slug}`,
      images: [
        {
          url: story.image,
          alt: story.title,
        },
      ],
    },
  };
}

export default async function StoryDetailPage(props: StoryDetailProps) {
  const params = await props.params;
  const story = getStory(params.slug);

  if (!story) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Impact', path: '/impact' },
          { name: 'Impact Stories', path: '/impact#stories' },
          { name: story.title, path: `/stories/${story.slug}` },
        ]}
      />

      <div className="w-full bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-gray-500">
          <Link href="/impact#stories" className="flex items-center gap-2 hover:text-brand-orange transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Impact Stories
          </Link>
          <div className="flex items-center gap-1 text-brand-green font-semibold uppercase tracking-wider text-xs">
            <Heart className="w-4 h-4 shrink-0" /> Community Proof
          </div>
        </div>
      </div>

      <article className="section-wrapper bg-white py-8 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 md:mb-8">
            <Badge variant="program" className="!bg-brand-orange !text-white mb-4 text-[12px] shadow-sm ring-1 ring-brand-orange/20">{story.category}</Badge>
            <h1 className="text-[26px] md:text-4xl lg:text-[40px] font-bold text-brand-brown leading-tight mb-5 md:mb-6">
              {story.title}
            </h1>

            <div className="flex flex-wrap gap-3 md:gap-6 text-sm text-gray-500 border-y border-gray-100 py-3 md:py-4">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-brand-orange" /> By {story.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-brand-orange" /> {story.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-orange" /> {story.readTime}</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-7 md:mb-10 shadow-sm border border-gray-200 bg-amber-50 flex items-center justify-center">
            <Image
              src={story.image}
              alt=""
              fill
              aria-hidden="true"
              className="object-cover blur-xl scale-110 opacity-30 pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-contain relative z-10 p-1 sm:p-2"
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          <div className="text-[#111111] text-[16px] md:text-[18px] leading-[1.7] space-y-5 md:space-y-6">
            {story.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-6 md:pt-8 mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <Link href="/impact#stories" className="w-full sm:w-auto">
              <Button variant="secondary" size="medium" className="w-full sm:w-auto">
                All Impact Stories
              </Button>
            </Link>
            <Link href="/donate" className="w-full sm:w-auto">
              <Button variant="primary" size="medium" className="w-full sm:w-auto">
                Support This Work
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <DonateCTA />
    </>
  );
}
