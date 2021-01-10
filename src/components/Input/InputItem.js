import { IconButton, InputBase, Paper, Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { fade, makeStyles } from '@material-ui/core/styles';
import storeApi from '../../utilities/storeApi';

const useStyle = makeStyles((theme) => ({
  item: {
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

function InputItem({ setOpen, listId }) {
  const classes = useStyle();
  const { addCard } = useContext(storeApi);
  const handleOnChange = (e) => {
    setCardTitle(e.target.value);
  };
  const [cardTitle, setCardTitle] = useState('');

  const handleConfirmBtn = () => {
    addCard(cardTitle, listId);
    //ensure card title is cleared when submitted
    setCardTitle('');
    setOpen(false);
  };

  //clears card if user clicks away from, onBlur
  const handleBlur = () => {
    setOpen(false);
    setCardTitle('');
  };

  return (
    <div>
      <div>
        <Paper className={classes.item}>
          <InputBase
            onChange={handleOnChange}
            onBlur={handleBlur}
            multiline
            fullWidth
            inputProps={{ className: classes.input }}
            value={cardTitle}
            placeholder='Item Title...'
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.confirmBtn} onClick={handleConfirmBtn}>
          Add Item
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default InputItem;
