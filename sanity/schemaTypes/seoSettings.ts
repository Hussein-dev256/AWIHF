export const seoSettings = {
  name: 'seoSettings',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    { name: 'page', title: 'Page Key', type: 'string', validation: 'required' },
    { name: 'title', title: 'SEO Title', type: 'string', validation: 'required' },
    { name: 'description', title: 'SEO Description', type: 'text', rows: 3, validation: 'required' },
    { name: 'ogImage', title: 'Open Graph Image', type: 'image', options: { hotspot: true } },
  ],
};
