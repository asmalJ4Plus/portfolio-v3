import React from 'react';
import $ from 'jquery';
import { Typography } from '@material-ui/core';
import Panel from '../Panel/Panel';
import useStyles from './MainStyles';
import { ReactComponent as ArrowDownSVG } from '../../assets/icons/arrow_down.svg';
import { ReactComponent as MeSVG } from '../../assets/images/me.svg';

const Main = () => {
  const classes = useStyles();

  const handleOnClick = (id) => {
    $('html,body').animate(
      {
        scrollTop: $(id).offset()?.top,
      },
      'slow',
    );
  };

  return (
    <>
      <Panel id='home'>
        <div className={classes.meContainer}>
          <MeSVG />
        </div>
        <div className={classes.keshaContainer}>
          <Typography variant='h5'>
            illustration{' '}
            <a href='https://www.instagram.com/stickwhack/' target='_blank' rel='noreferrer'>
              stickwhack
            </a>
          </Typography>
        </div>
        <div className={classes.container}>
          <Typography variant='subtitle1'>tim kinsman</Typography>
          <Typography variant='subtitle2'>based in adelaide, australia</Typography>
          <Typography variant='subtitle2'>
            front-end dev at{' '}
            <a href='https://eatclub.com.au/' target='_blank' rel='noreferrer'>
              eatclub
            </a>
          </Typography>
        </div>
        <div
          className={classes.arrowDownContainer}
          onClick={() => handleOnClick('#work')}
          aria-hidden='true'
        >
          <ArrowDownSVG className={classes.arrowDown} />
        </div>
      </Panel>
      <Panel id='work'>
        <div className={classes.container}>
          <Typography variant='subtitle1'>work</Typography>
        </div>
      </Panel>
      <Panel id='about'>
        <div className={classes.container}>
          <Typography variant='subtitle1'>about</Typography>
        </div>
      </Panel>
    </>
  );
};

export default Main;
