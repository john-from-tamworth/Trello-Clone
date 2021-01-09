import { IconButton, InputBase, Paper, Button } from '@material-ui/core';
import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { fade, makeStyles } from '@material-ui/core/styles';

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

function InputItem({ setOpen }) {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Paper className={classes.item}>
          <InputBase
            onBlur={() => setOpen(false)}
            multiline
            fullWidth
            inputProps={{ className: classes.input }}
            placeholder='Item Title...'
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.confirmBtn} onClick={() => setOpen(false)}>
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
