import React, { useState } from 'react';
import List from './components/List/List';
import store from './utilities/store';
import storeApi from './utilities/storeApi';
import { v4 as uuid } from 'uuid';
import InputContainer from './components/Input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: 'linear-gradient(to right bottom, #8affdd, #ffaaec)',
    overflowY: 'auto',
  },
}));

function App() {
  const [data, setData] = useState(store);
  const classes = useStyle();
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

  const addList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };

    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };

    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };
  return (
    <storeApi.Provider value={{ addCard, addList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.root}>
          {data.listIds.map((listId) => {
            const list = data.lists[listId];
            return <List list={list} key={listId} />;
          })}
          <InputContainer type='list' />
        </div>
      </DragDropContext>
    </storeApi.Provider>
  );
}

export default App;
