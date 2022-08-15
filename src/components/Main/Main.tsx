import React from 'react';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import Panel from '../Panel/Panel';
import useStyles from './MainStyles';
import { ReactComponent as ArrowDownSVG } from '../../assets/icons/arrow_down.svg';
import { ReactComponent as MeSVG } from '../../assets/images/me.svg';
import { scrollTo } from '../../utils/helpers';
import { StoreState } from '../../reducers/rootReducer';
import { Box, Fade } from '@timkinsman/react-components';

type MainProps = {
  page?: string;
};

const Main = ({ page }: MainProps) => {
  const classes = useStyles();

  return (
    <>
      <Panel id='home'>
        <Fade appear={page === 'home'} slide='left'>
          <Box className={classes.image}>
            <MeSVG />
          </Box>
        </Fade>
        <Box className={classes.container}>
          <Fade appear={page === 'home'} slide='right'>
            <Typography variant='subtitle1'>tim kinsman</Typography>
            <Typography variant='subtitle2'>based in adelaide, australia</Typography>
            <Typography variant='subtitle2'>
              front-end dev at{' '}
              <a href='https://eatclub.com.au/' target='_blank' rel='noreferrer'>
                eatclub
              </a>
            </Typography>
          </Fade>
        </Box>
        <Box className={classes.arrowDownContainer}>
          <ArrowDownSVG className={classes.arrowDown} onClick={() => scrollTo('#work')} />
        </Box>
      </Panel>
      <Panel id='work'>
        <Box className={classes.container}>
          <Fade appear={page === 'work'} slide='right'>
            <Typography variant='subtitle1'>work</Typography>
          </Fade>
        </Box>
      </Panel>
      <Panel id='about'>
        <Box className={classes.container}>
          <Fade appear={page === 'about'} slide='right'>
            <Typography variant='subtitle1'>about</Typography>
          </Fade>
        </Box>
      </Panel>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  page: state.app.page,
});

export default connect(mapStateToProps, null)(Main);
