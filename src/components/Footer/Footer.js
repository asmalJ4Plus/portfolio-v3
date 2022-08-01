import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './FooterStyles';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant='h2'>© 2022 tim kinsman, adelaide, australia</Typography>
    </div>
  );
};

export default Footer;
