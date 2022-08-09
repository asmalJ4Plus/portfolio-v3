import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './AppContainerStyles';

type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default AppContainer;
