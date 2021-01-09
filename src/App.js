import React, { useState } from 'react';
import List from './components/List/List';
import store from './utilities/store';
import storeApi from './utilities/storeApi';
import { v4 as uuid } from 'uuid';

function App() {
  const [data, setData] = useState(store);
  const addCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  return (
    <storeApi.Provider value={{ addCard }}>
      <div>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
      </div>
    </storeApi.Provider>
  );
}

export default App;
