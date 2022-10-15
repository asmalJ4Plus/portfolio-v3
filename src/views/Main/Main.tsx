import { Box, Fade, Pill, Space, Typography } from 'petald';
import { useState } from 'react';
import { ReactComponent as TimySVG } from '../../assets/images/timy.svg';
import { Panel } from '../../components/Panel';
import { Page, works } from '../../utils/constants';
import { scrollTo } from '../../utils/helpers';
import { useAppSelector } from '../../utils/hooks';
import useStyles from './Main.styles';
import { Pagination } from './Pagination/Pagination';

export const Main = () => {
  const classes = useStyles();
  const [where, setWhere] = useState(works[0].where);
  const { page } = useAppSelector((state) => state.app);

  return (
    <>
      <Panel id={Page.home}>
        <Fade appear={page === Page.home} slide='left'>
          <Box className={classes.image}>
            <TimySVG />
          </Box>
        </Fade>
        <Box className={classes.container}>
          <Fade
            appear={page === Page.home}
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
      </Panel>
      <Panel id={Page.work}>
        <Box className={classes.container}>
          <Fade
            appear={page === Page.work}
            slide='right'
            style={{ maxWidth: '680px', width: '100%' }}
          >
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
      <Panel id={Page.about}>
        <Box className={classes.container}>
          <Fade
            appear={page === Page.about}
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
              <Space>
                <Typography variant='body1'>
                  <a
                    href='https://discordapp.com/users/355321462032171009/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Discord
                  </a>
                </Typography>
                <Typography variant='body1'>
                  <a href='mailto:tkinsm@gmail.com'>Email</a>
                </Typography>
                <Typography variant='body1'>
                  <a href='https://www.github.com/timkinsman' target='_blank' rel='noreferrer'>
                    GitHub
                  </a>
                </Typography>
                <Typography variant='body1'>
                  <a href='https://www.linkedin.com/in/timkinsman' target='_blank' rel='noreferrer'>
                    LinkedIn
                  </a>
                </Typography>
              </Space>
            </Space>
          </Fade>
        </Box>
      </Panel>
      <Fade
        appear={page === Page.work || page === Page.about}
        slide='down'
        style={{
          width: 'unset',
          position: 'fixed',
          top: '50%',
          right: '64px',
          height: '64px',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Pagination />
      </Fade>
    </>
  );
};
