import { Box, Fade, Typography } from 'petald';
import { ReactComponent as TimySVG } from '../../../assets/images/timy.svg';
import { Panel } from '../../../components/Panel';
import { Page } from '../../../utils/constants';
import { useAppSelector } from '../../../utils/hooks';
import useStyles from '../Main.styles';

export const Home = () => {
  const classes = useStyles();
  const { page } = useAppSelector((state) => state.app);

  return (
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
  );
};
