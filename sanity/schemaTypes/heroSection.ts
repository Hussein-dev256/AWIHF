export const heroSection = {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'page', title: 'Page', type: 'string', validation: 'required' },
    { name: 'headline', title: 'Headline', type: 'string', validation: 'required' },
    { name: 'subheading', title: 'Subheading', type: 'text', rows: 2 },
    { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string' },
    { name: 'primaryCtaHref', title: 'Primary CTA URL', type: 'string' },
    { name: 'secondaryCtaLabel', title: 'Secondary CTA Label', type: 'string' },
    { name: 'secondaryCtaHref', title: 'Secondary CTA URL', type: 'string' },
  ],
};
