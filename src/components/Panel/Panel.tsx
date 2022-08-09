import React from 'react';
import useStyles from './PanelStyles';

type PanelProps = {
  children: React.ReactNode;
  id?: string;
};

const Panel = ({ children, id }: PanelProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container} id={id}>
      {children}
    </div>
  );
};

export default Panel;
