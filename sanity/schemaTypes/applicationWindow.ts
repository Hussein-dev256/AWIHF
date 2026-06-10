export const applicationWindow = {
  name: 'applicationWindow',
  title: 'Mentorship Application Window',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', initialValue: 'Mentorship Applications' },
    { name: 'isOpen', title: 'Applications Open', type: 'boolean', initialValue: false },
    { name: 'cycleName', title: 'Cycle Name', type: 'string' },
    { name: 'openMessage', title: 'Open Message', type: 'text', rows: 2 },
    { name: 'closedMessage', title: 'Closed Message', type: 'text', rows: 2 },
    { name: 'opensAt', title: 'Opens At', type: 'datetime' },
    { name: 'closesAt', title: 'Closes At', type: 'datetime' },
  ],
};
