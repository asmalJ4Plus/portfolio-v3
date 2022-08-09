import { Typography } from '@material-ui/core';
import React from 'react';
import Panel from '../Panel/Panel';
import useStyles from './NotFoundStyles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <Panel>
      <div className={classes.container}>
        <Typography variant='subtitle1'>not found</Typography>
      </div>
    </Panel>
  );
};

export default NotFound;
