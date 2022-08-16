import { Box, Typography } from '@timkinsman/react-components';
import React from 'react';
import Panel from '../Panel/Panel';
import useStyles from './NotFoundStyles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <Panel>
      <Box className={classes.container}>
        <Typography variant='subheading1'>not found</Typography>
      </Box>
    </Panel>
  );
};

export default NotFound;
