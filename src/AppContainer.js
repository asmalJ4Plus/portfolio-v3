import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './AppContainerStyles';

const AppContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

AppContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AppContainer;
