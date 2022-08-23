import { Box, Typography } from 'petald';
import React from 'react';
import useStyles from './FooterStyles';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant='h5'>
        © {new Date().getFullYear()} tim kinsman, adelaide, australia
      </Typography>
    </Box>
  );
};

export default Footer;
