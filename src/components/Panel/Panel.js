import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './PanelStyles';

const Panel = ({ children, id }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} id={id}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  id: PropTypes.string.isRequired,
};

export default Panel;
