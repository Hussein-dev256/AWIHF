export const mentorshipPackage = {
  name: 'mentorshipPackage',
  title: 'Mentorship Package',
  type: 'document',
  fields: [
    { name: 'name', title: 'Package Name', type: 'string', validation: 'required' },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
    { name: 'price', title: 'Price', type: 'string', validation: 'required' },
    { name: 'eligibility', title: 'Application Eligibility', type: 'text', rows: 3 },
    { name: 'sortOrder', title: 'Sort Order', type: 'number' },
  ],
};
