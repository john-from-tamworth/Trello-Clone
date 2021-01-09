import { Collapse, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputItem from './InputItem';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  addItem: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    backgroundColor: '#dbdbdb',
    '&:hover': {
      backgroundColor: '#858585',
    },
  },
}));

function InputContainer({ listId }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputItem setOpen={setOpen} listId={listId} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addItem}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>+ Add an Item</Typography>
        </Paper>
      </Collapse>
    </div>
  );
}

export default InputContainer;
