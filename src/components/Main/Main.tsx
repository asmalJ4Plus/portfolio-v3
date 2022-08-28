import React, { useState } from 'react';
import { Box, Fade, Pill, Space, Typography } from 'petald';
import { connect } from 'react-redux';
import Panel from '../Panel/Panel';
import useStyles from './MainStyles';
import { ReactComponent as ArrowDownSVG } from '../../assets/icons/arrow_down.svg';
import { ReactComponent as MeSVG } from '../../assets/images/me.svg';
import { scrollTo } from '../../utils/helpers';
import { StoreState } from '../../reducers/rootReducer';
import { works } from '../../context';

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
            <MeSVG />
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
        <Box className={classes.arrowDownContainer}>
          <ArrowDownSVG className={classes.arrowDown} onClick={() => scrollTo('#work')} />
        </Box>
      </Panel>
      <Panel id='work'>
        <Box className={classes.container}>
          <Fade appear={page === 'work'} slide='right'>
            <Space direction='vertical' gap='large' style={{ paddingBottom: '128px' }}>
              <Typography variant='h1' style={{ color: 'inherit' }}>
                work
              </Typography>
              <Space>
                {works.map((work, i) => (
                  <Pill
                    label={work.where}
                    onClick={() => setWhere(work.where)}
                    variant={where === work.where ? 'filled' : 'outlined'}
                  />
                ))}
              </Space>
              <Box>
                {works.map((work) => (
                  <Box style={{ position: 'absolute' }}>
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
          <Fade appear={page === 'about'} slide='right'>
            <Typography variant='h1'>about</Typography>
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
