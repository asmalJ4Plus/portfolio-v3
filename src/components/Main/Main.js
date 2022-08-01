import React from 'react';
import { Typography } from '@material-ui/core';
import Panel from '../Panel/Panel';
import { THEMES } from '../../AppTheme';
import useStyles from './MainStyles';

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <Panel>
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
      <Panel backgroundColor={THEMES.KIRYU.PRIMARY} color={THEMES.KIRYU.TEXT}>
        <div className={classes.container}>
          <Typography variant='subtitle1'>about</Typography>
        </div>
      </Panel>
      <Panel>
        <div className={classes.container}>
          <Typography variant='subtitle1'>work</Typography>
        </div>
      </Panel>
    </>
  );
};

export default Main;
