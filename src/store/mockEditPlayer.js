export const getMockEditPlayer = (projectAttributes = {}) => {
  return Object.assign({}, defaultMockProjectAttributes, projectAttributes);
};

const defaultMockProjectAttributes = [
  {
    id: 1,
    firstName: 'Bobby',
    lastName: 'Ross',
    earnings: 1234,
    country: 'AU'
  },
]
