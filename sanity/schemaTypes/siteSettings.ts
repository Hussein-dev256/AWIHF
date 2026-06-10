export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'aboutContent', title: 'About Page Content', type: 'array', of: [{ type: 'block' }] },
    { name: 'mission', title: 'Mission', type: 'text', rows: 3 },
    { name: 'vision', title: 'Vision', type: 'text', rows: 3 },
    { name: 'values', title: 'Core Values', type: 'array', of: [{ type: 'string' }] },
    { name: 'contactEmail', title: 'Contact Email', type: 'string' },
    { name: 'phoneNumbers', title: 'Phone Numbers', type: 'array', of: [{ type: 'string' }] },
    { name: 'address', title: 'Address', type: 'text', rows: 2 },
    { name: 'footerText', title: 'Footer Text', type: 'string' },
    { name: 'socialLinks', title: 'Social Links', type: 'array', of: [{ type: 'socialLink' }] },
  ],
};
