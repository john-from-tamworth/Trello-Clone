const cards = [
  {
    id: 'card-1',
    content: 'Read next chapter in current book',
  },

  {
    id: 'card-2',
    content: 'Go shopping',
  },

  {
    id: 'card-3',
    content: 'Prep Dinner',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Todo',
      cards,
    },
  },
  listIds: ['list-1'],
};

export default data;
