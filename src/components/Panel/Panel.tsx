import { Box } from '@timkinsman/react-components';
import React from 'react';
import useStyles from './PanelStyles';

type PanelProps = {
  children: React.ReactNode;
  id?: string;
};

const Panel = ({ children, id }: PanelProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.container} id={id}>
      {children}
    </Box>
  );
};

export default Panel;
