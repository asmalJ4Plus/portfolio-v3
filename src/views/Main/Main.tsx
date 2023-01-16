import { Box, Fade, Pill, Skeleton, Space, Typography } from 'petald';
import { useEffect, useState } from 'react';
import { ReactComponent as IconSpotify } from '../../assets/icons/icon_spotify.svg';
import { ReactComponent as TimySVG } from '../../assets/images/timy.svg';
import { Panel } from '../../components/Panel';
import { fetchListeningTo } from '../../store/listeningTo';
import { ApiStatusCode } from '../../utils/apiHelpers';
import { Page, works } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import useStyles from './Main.styles';
import { Pagination } from './Pagination';

export const Main = () => {
  const classes = useStyles();
  const [where, setWhere] = useState(works[0].where);
  const { page } = useAppSelector((state) => state.app);
  const listeningTo = useAppSelector((state) => state.listeningTo);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    if (listeningTo.status === ApiStatusCode.idle) {
      appDispatch(fetchListeningTo());
    }
  }, []);

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
            <Space direction='vertical' gap='large' style={{ paddingBottom: '300px' }}>
              <Typography variant='h1'>work</Typography>
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
                {works.map((work) => (
                  <Box style={{ position: 'absolute' }} key={work.where}>
                    <Fade appear={where === work.where} slide='right'>
                      <Space direction='vertical'>
                        <Typography variant='h3'>
                          {/* <a href={work.link} target='_blank' rel='noreferrer'> */}
                          {work.where}
                          {/* </a> */}
                        </Typography>
                        <Typography variant='h5'>
                          {work.role} | {work.when}
                        </Typography>
                        <Typography variant='body1' style={{ whiteSpace: 'pre-line' }}>
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
              <Typography variant='h5' style={{ whiteSpace: 'pre-line' }}>
                {`I'm Tim Kinsman, a React web developer at EatClub based in Adelaide, Australia.
                
                I am fully proficient in TypeScript and JavascriptI have some pretty sick Tech Deck moves, hire me and you just might find out.`}
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
      <Panel id={Page.music}>
        <Box className={classes.container}>
          <Fade
            appear={page === Page.music}
            slide='right'
            style={{ maxWidth: '680px', width: '100%' }}
          >
            <Space direction='vertical'>
              <Typography variant='h1'>music</Typography>
              <Typography variant='h5' style={{ whiteSpace: 'pre-line' }}>
                {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}
              </Typography>
              <Space style={{ alignItems: 'center' }} gap='small'>
                <Box className={classes.icon}>
                  <IconSpotify />
                </Box>
                <Typography variant='body1'>
                  {listeningTo.status !== ApiStatusCode.pending ? (
                    <Skeleton
                      width={200}
                      height={16}
                      variant='rounded'
                      style={{ margin: '4px 0' }}
                    />
                  ) : (
                    <>
                      Listening to{' '}
                      <a href={listeningTo.data.link} target='_blank' rel='noreferrer'>
                        {listeningTo.data.artist} - {listeningTo.data.track}
                      </a>
                    </>
                  )}
                </Typography>
              </Space>
            </Space>
          </Fade>
        </Box>
      </Panel>
      <Fade
        appear={page !== Page.home}
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
          pointerEvents: page == Page.home ? 'none' : undefined,
        }}
      >
        <Pagination />
      </Fade>
    </>
  );
};
