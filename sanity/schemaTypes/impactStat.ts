export const impactStat = {
  name: 'impactStat',
  title: 'Impact Statistic',
  type: 'document',
  fields: [
    { name: 'label', title: 'Label', type: 'string', validation: 'required' },
    { name: 'value', title: 'Value', type: 'string', validation: 'required' },
    { name: 'icon', title: 'Lucide Icon Name', type: 'string' },
    { name: 'order', title: 'Display Order', type: 'number', initialValue: 0 },
  ],
};
