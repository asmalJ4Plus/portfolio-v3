import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './PanelStyles';
import { THEMES } from '../../AppTheme';

const Panel = ({ backgroundColor, color, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} style={{ backgroundColor, color }}>
      {children}
    </div>
  );
};

Panel.defaultProps = {
  backgroundColor: THEMES.MAJIMA.PRIMARY,
  color: THEMES.MAJIMA.TEXT,
};

Panel.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Panel;
