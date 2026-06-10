export const teamMember = {
  name: 'teamMember',
  title: 'Leadership or Mentor Profile',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: 'required' },
    { name: 'role', title: 'Role', type: 'string', validation: 'required' },
    { name: 'profileType', title: 'Profile Type', type: 'string', options: { list: ['leadership', 'mentor'] }, validation: 'required' },
    { name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } },
    { name: 'bio', title: 'Biography', type: 'text', rows: 4 },
    { name: 'socialLinks', title: 'Social Links', type: 'array', of: [{ type: 'socialLink' }] },
    { name: 'sortOrder', title: 'Sort Order', type: 'number' },
  ],
};
