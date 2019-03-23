export const getMockAddPlayer = (projectAttributes = {}) => {
  return Object.assign({}, defaultMockProjectAttributes, projectAttributes);
};

const defaultMockProjectAttributes = [
  {
    id: 1,
    firstName: 'Bob',
    lastName: 'Ross',
    earnings: 1234,
    country: 'AU'
  },
]
