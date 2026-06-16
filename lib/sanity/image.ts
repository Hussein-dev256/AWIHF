import imageUrlBuilder from '@sanity/image-url';
import { getSanityClient } from './client';

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0];

export function urlFor(source: SanityImageSource) {
  const client = getSanityClient();
  if (!client) {
    return null;
  }

  return imageUrlBuilder(client).image(source);
}

export function imageUrl(source: SanityImageSource | string | undefined, width = 1200, height?: number) {
  if (!source) {
    return '';
  }

  if (typeof source === 'string') {
    return source;
  }

  const builder = urlFor(source);
  if (!builder) {
    return '';
  }

  const transformed = builder.width(width).auto('format').quality(85);
  return height ? transformed.height(height).fit('crop').url() : transformed.url();
}
