import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './NavbarStyles';

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Typography variant='h2'>timkinsman</Typography>
      </div>
      <div className={classes.pages}>
        <Typography variant='h2' className={classes.page} style={{ opacity: true && 1 }}>
          home
        </Typography>
        <Typography variant='h2' className={classes.page} style={{ opacity: false && 1 }}>
          about
        </Typography>
        <Typography variant='h2' className={classes.page} style={{ opacity: false && 1 }}>
          work
        </Typography>
      </div>
      <div className={classes.music}>
        <Typography variant='h2'>music</Typography>
      </div>
    </div>
  );
};

export default NavBar;
