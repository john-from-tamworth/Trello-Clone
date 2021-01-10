import { Typography, InputBase } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import storeApi from '../../utilities/storeApi';

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: 'flex',
  },
  editableTitle: {
    flexGrow: 1,
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  input: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    margin: theme.spacing(1),
    '&:focus': {
      background: '#858585',
    },
  },
}));

function Title({ title, listId }) {
  const [open, setOpen] = useState();
  const classes = useStyle();
  const [newTitle, setNewTitle] = useState('title');
  const { updateListTitle } = useContext(storeApi);
  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            {title}
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
}

export default Title;
