import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './NavbarStyles';
import { scrollTo } from '../../utils/helpers';
import { StoreState } from '../../reducers/rootReducer';
import { connect } from 'react-redux';
import ControlledFade from '../ControlledFade/ControlledFade';

type NavBarProps = {
  page?: string;
};

const NavBar = ({ page }: NavBarProps) => {
  const classes = useStyles();

  return (
    <ControlledFade
      show={page === 'home'}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}
      slide='down'
    >
      <div className={classes.container}>
        <div className={classes.logo}>
          <Typography variant='h2'>timkinsman</Typography>
        </div>
        <div className={classes.pages}>
          <Typography
            variant='h2'
            className={classes.page}
            style={{ opacity: page === 'home' ? 1 : 0.4 }}
            onClick={() => scrollTo('#home')}
          >
            home
          </Typography>
          <Typography
            variant='h2'
            className={classes.page}
            style={{ opacity: page === 'work' ? 1 : 0.4 }}
            onClick={() => scrollTo('#work')}
          >
            work
          </Typography>
          <Typography
            variant='h2'
            className={classes.page}
            style={{ opacity: page === 'about' ? 1 : 0.4 }}
            onClick={() => scrollTo('#about')}
          >
            about
          </Typography>
        </div>
        <div className={classes.music}>
          <Typography variant='h2'>music</Typography>
        </div>
      </div>
    </ControlledFade>
  );
};

const mapStateToProps = (state: StoreState) => ({
  page: state.app.page,
});

export default connect(mapStateToProps, null)(NavBar);
