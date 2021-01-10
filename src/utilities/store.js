const cards = [
  {
    id: 'card-1',
    title: 'Read next chapter in current book',
  },

  {
    id: 'card-2',
    title: 'Go shopping',
  },

  {
    id: 'card-3',
    title: 'Prep Dinner',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'To Be Done',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Doing',
      cards: [],
    },
  },
  listIds: ['list-1', 'list-2'],
};

export default data;
