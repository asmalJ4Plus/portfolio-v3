import { Box, Typography } from '@timkinsman/react-components';
import React from 'react';
import useStyles from './FooterStyles';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant='h2'>
        © {new Date().getFullYear()} tim kinsman, adelaide, australia
      </Typography>
    </Box>
  );
};

export default Footer;
