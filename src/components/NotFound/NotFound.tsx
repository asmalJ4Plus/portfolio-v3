import { Box, Typography } from 'petald';
import React from 'react';
import Panel from '../Panel/Panel';
import useStyles from './NotFoundStyles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <Panel>
      <Box className={classes.container}>
        <Typography variant='h2'>you don&apos;t belong here..</Typography>
      </Box>
    </Panel>
  );
};

export default NotFound;
