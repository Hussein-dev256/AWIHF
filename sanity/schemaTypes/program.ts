export const program = {
  name: 'program',
  title: 'Programme',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: 'required' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: 'required' },
    { name: 'status', title: 'Status', type: 'string', options: { list: ['active', 'archived'] }, initialValue: 'active' },
    { name: 'summary', title: 'Summary', type: 'text', rows: 3 },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'fieldImage', title: 'Field Image', type: 'image', options: { hotspot: true } },
    { name: 'objective', title: 'Objective', type: 'text', rows: 3 },
    { name: 'focusArea', title: 'Focus Area', type: 'text', rows: 3 },
    { name: 'activities', title: 'Activities', type: 'array', of: [{ type: 'string' }] },
    { name: 'successIndicators', title: 'Success Indicators', type: 'array', of: [{ type: 'string' }] },
    { name: 'stats', title: 'Statistics', type: 'array', of: [{ type: 'statItem' }] },
    { name: 'body', title: 'Detailed Content', type: 'array', of: [{ type: 'block' }] },
  ],
};
