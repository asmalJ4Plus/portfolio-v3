import { Box, Fade, Pill, Space, Typography } from 'petald';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ArrowDownSVG } from '../../assets/icons/arrow_down.svg';
import { ReactComponent as TimySVG } from '../../assets/images/timy.svg';
import { works } from '../../context';
import { StoreState } from '../../reducers/rootReducer';
import { scrollTo } from '../../utils/helpers';
import Panel from '../Panel/Panel';
import useStyles from './MainStyles';

type MainProps = {
  page?: string;
};

const Main = ({ page }: MainProps) => {
  const classes = useStyles();
  const [where, setWhere] = useState(works[0].where);

  return (
    <>
      <Panel id='home'>
        <Fade appear={page === 'home'} slide='left'>
          <Box className={classes.image}>
            <TimySVG />
          </Box>
        </Fade>
        <Box className={classes.container}>
          <Fade
            appear={page === 'home'}
            slide='right'
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant='h1'>tim kinsman</Typography>
            <Typography variant='h2'>based in adelaide, australia</Typography>
            <Typography variant='h2'>
              front-end dev at{' '}
              <a href='https://eatclub.com.au/' target='_blank' rel='noreferrer'>
                EatClub
              </a>
            </Typography>
          </Fade>
        </Box>
        <Fade appear={page === 'home'} slide='down' style={{ width: 'unset' }}>
          <Box className={classes.arrowContainer}>
            <ArrowDownSVG className={classes.arrow} onClick={() => scrollTo('#work')} />
          </Box>
        </Fade>
      </Panel>
      <Panel id='work'>
        <Box className={classes.container}>
          <Fade appear={page === 'work'} slide='right' style={{ maxWidth: '680px', width: '100%' }}>
            <Space direction='vertical' gap='large' style={{ paddingBottom: '128px' }}>
              <Typography variant='h1' style={{ color: 'inherit' }}>
                work
              </Typography>
              <Space>
                {works.map((work, i) => (
                  <Pill
                    key={i}
                    label={work.where}
                    onClick={() => setWhere(work.where)}
                    variant={where === work.where ? 'filled' : 'outlined'}
                  />
                ))}
              </Space>
              <Box>
                {works.map((work, i) => (
                  <Box style={{ position: 'absolute' }} key={i}>
                    <Fade appear={where === work.where} slide='right'>
                      <Space direction='vertical'>
                        <Typography variant='h3' style={{ color: 'inherit' }}>
                          {work.where}
                        </Typography>
                        <Typography variant='h5' style={{ color: 'inherit' }}>
                          {work.role} | {work.when}
                        </Typography>
                        <Typography variant='body1' style={{ color: 'inherit' }}>
                          {work.what}
                        </Typography>
                      </Space>
                    </Fade>
                  </Box>
                ))}
              </Box>
            </Space>
          </Fade>
        </Box>
      </Panel>
      <Panel id='about'>
        <Box className={classes.container}>
          <Fade
            appear={page === 'about'}
            slide='right'
            style={{ maxWidth: '680px', width: '100%' }}
          >
            <Typography variant='h1'>about</Typography>
            <Space direction='vertical'>
              <Typography variant='h3'>Hi there!</Typography>
              <Typography variant='h5'>
                I&apos;m Tim Kinsman, a web developer based in Adelaide, Australia. Things happen to
                me
              </Typography>
              <Typography variant='body1'>Contact | Discord, Email, GitHub, LinkedIn</Typography>
            </Space>
          </Fade>
        </Box>
      </Panel>
      <Fade
        appear={page === 'work' || page === 'about'}
        slide='down'
        style={{
          width: 'unset',
          position: 'fixed',
          bottom: 0,
          right: '64px',
          height: '64px',
          transform: 'rotate(180deg)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ArrowDownSVG className={classes.arrow} onClick={() => scrollTo('#home')} />
      </Fade>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  page: state.app.page,
});

export default connect(mapStateToProps, null)(Main);
