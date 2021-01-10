import { IconButton, InputBase, Paper, Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { fade, makeStyles } from '@material-ui/core/styles';
import storeApi from '../../utilities/storeApi';

const useStyle = makeStyles((theme) => ({
  item: {
    width: '280px',
    paddingBottom: theme.spacing(4),
    margin: theme.spacing(0, 1, 1, 1),
  },
  input: {
    margin: theme.spacing(1),
  },
  confirmBtn: {
    background: '#74eb67',
    color: '#fff',
    '&:hover': {
      background: fade('#74eb67', 0.65),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

function InputItem({ setOpen, listId, type }) {
  const classes = useStyle();
  const { addCard, addList } = useContext(storeApi);
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const [title, setTitle] = useState('');

  const handleConfirmBtn = () => {
    if (type === 'card') {
      addCard(title, listId);
      //ensure card title is cleared when submitted
      setTitle('');
      setOpen(false);
    } else {
      addList(title);
      setTitle('');
      setOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Paper className={classes.item}>
          <InputBase
            onChange={handleOnChange}
            onBlur={() => setOpen(false)}
            multiline
            fullWidth
            inputProps={{ className: classes.input }}
            value={title}
            placeholder={type === 'card' ? 'Add an Item..' : 'Name of list..'}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.confirmBtn} onClick={handleConfirmBtn}>
          {type === 'card' ? 'Add Item' : 'Add List'}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default InputItem;
