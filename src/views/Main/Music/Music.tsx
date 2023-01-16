import { Box, Fade, Skeleton, Space, Typography } from 'petald';
import { useEffect } from 'react';
import { ReactComponent as IconSpotify } from '../../../assets/icons/icon_spotify.svg';
import { Panel } from '../../../components/Panel';
import { fetchListeningTo } from '../../../store/listeningTo';
import { ApiStatusCode } from '../../../utils/apiHelpers';
import { Page, music } from '../../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import useStyles from '../Main.styles';

export const Music = () => {
  const classes = useStyles();
  const { page } = useAppSelector((state) => state.app);
  const listeningTo = useAppSelector((state) => state.listeningTo);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    if (listeningTo.status === ApiStatusCode.idle) {
      appDispatch(fetchListeningTo());
    }
  }, []);

  return (
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
              {music}
            </Typography>
            <Space style={{ alignItems: 'center' }} gap='small'>
              <Box className={classes.icon}>
                <IconSpotify />
              </Box>
              <Typography variant='body1'>
                {listeningTo.status === ApiStatusCode.pending ? (
                  <Skeleton width={200} height={16} variant='rounded' style={{ margin: '4px 0' }} />
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
  );
};
