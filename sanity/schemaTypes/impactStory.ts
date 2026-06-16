export const impactStory = {
  name: 'impactStory',
  title: 'Impact Story',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: 'required' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: 'required' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'summary', title: 'Summary', type: 'text', rows: 3 },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'publishedAt', title: 'Publish Date', type: 'datetime' },
    { name: 'body', title: 'Story Body', type: 'array', of: [{ type: 'block' }] },
    { name: 'seo', title: 'SEO Override', type: 'reference', to: [{ type: 'seoSettings' }] },
  ],
};
