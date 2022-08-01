import React from 'react';
// import $ from 'jquery';
import { Typography } from '@material-ui/core';
import Panel from '../Panel/Panel';
import useStyles from './MainStyles';

const Main = () => {
  const classes = useStyles();

  // const handleOnClick = (id) => {
  //   $('html,body').animate(
  //     {
  //       scrollTop: $(id).offset()?.top,
  //     },
  //     'slow',
  //   );
  // };

  return (
    <>
      <Panel id='home'>
        <div className={classes.container}>
          <Typography variant='subtitle1'>tim kinsman</Typography>
          <Typography variant='subtitle2'>based in adelaide, australia</Typography>
          <Typography variant='subtitle2'>
            front-end dev at{' '}
            <a href='https://eatclub.com.au/' target='_blank' rel='noreferrer'>
              EatClub
            </a>
          </Typography>
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
