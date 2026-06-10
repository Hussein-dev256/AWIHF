export const statItem = {
  name: 'statItem',
  title: 'Statistic',
  type: 'object',
  fields: [
    { name: 'value', title: 'Value', type: 'string' },
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 2 },
  ],
};

export const socialLink = {
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'url', title: 'URL', type: 'url' },
  ],
};
