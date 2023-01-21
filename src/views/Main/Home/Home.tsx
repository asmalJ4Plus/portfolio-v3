import { Box, Fade, Typography } from 'petald';
import { ReactComponent as TimySVG } from '../../../assets/images/timy.svg';
import { Panel } from '../../../components/Panel';
import { Page } from '../../../utils/constants';
import useMediaQuery, { useAppSelector } from '../../../utils/hooks';
import useStyles from '../Main.styles';

export const Home = () => {
  const classes = useStyles();
  const { page } = useAppSelector((state) => state.app);

  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Panel id={Page.home}>
      <Fade appear={page === Page.home} slide='left'>
        <Box
          className={classes.image}
          style={{ justifyContent: isDesktop ? 'flex-start' : 'center' }}
        >
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
          <Typography variant={'h1'} style={{ textAlign: 'center' }}>
            tim kinsman
          </Typography>
          <Typography variant={isDesktop ? 'h2' : 'h3'} style={{ textAlign: 'center' }}>
            based in adelaide, australia
          </Typography>
          <Typography variant={isDesktop ? 'h2' : 'h3'} style={{ textAlign: 'center' }}>
            front-end dev at{' '}
            <a href='https://eatclub.com.au/' target='_blank' rel='noreferrer'>
              EatClub
            </a>
          </Typography>
        </Fade>
      </Box>
    </Panel>
  );
};
