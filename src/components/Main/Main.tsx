import React from 'react';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import Panel from '../Panel/Panel';
import useStyles from './MainStyles';
import { ReactComponent as ArrowDownSVG } from '../../assets/icons/arrow_down.svg';
import { ReactComponent as MeSVG } from '../../assets/images/me.svg';
import { scrollTo } from '../../utils/helpers';
import ControlledFade from '../ControlledFade/ControlledFade';
import { StoreState } from '../../reducers/rootReducer';

type MainProps = {
  page?: string;
};

const Main = ({ page }: MainProps) => {
  const classes = useStyles();

  return (
    <>
      <Panel id='home'>
        <ControlledFade show={page === 'home'} slide='left'>
          <div className={classes.image}>
            <MeSVG />
          </div>
        </ControlledFade>
        <div className={classes.container}>
          <ControlledFade show={page === 'home'} slide='right'>
            <Typography variant='subtitle1'>tim kinsman</Typography>
            <Typography variant='subtitle2'>based in adelaide, australia</Typography>
            <Typography variant='subtitle2'>
              front-end dev at{' '}
              <a href='https://eatclub.com.au/' target='_blank' rel='noreferrer'>
                eatclub
              </a>
            </Typography>
          </ControlledFade>
        </div>
        <div className={classes.arrowDownContainer}>
          <ArrowDownSVG className={classes.arrowDown} onClick={() => scrollTo('#work')} />
        </div>
      </Panel>
      <Panel id='work'>
        <div className={classes.container}>
          <ControlledFade show={page === 'work'} slide='right'>
            <Typography variant='subtitle1'>work</Typography>
          </ControlledFade>
        </div>
      </Panel>
      <Panel id='about'>
        <div className={classes.container}>
          <ControlledFade show={page === 'about'} slide='right'>
            <Typography variant='subtitle1'>about</Typography>
          </ControlledFade>
        </div>
      </Panel>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  page: state.app.page,
});

export default connect(mapStateToProps, null)(Main);
