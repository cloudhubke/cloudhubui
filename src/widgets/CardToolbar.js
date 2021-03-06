import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Toolbar } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    height: 65,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3),
  },
}));

// ----------------------------------------------------------------------

function CardToolbar({ className, children, ...props }) {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.root, className)}>{children}</Toolbar>
  );
}

export default CardToolbar;
