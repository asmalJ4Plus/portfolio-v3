import { Box, Fade, Space, Typography } from 'petald';
import { Panel } from '../../../components/Panel';
import { Page } from '../../../utils/constants';
import { useAppSelector } from '../../../utils/hooks';
import useStyles from '../Main.styles';

export const About = () => {
  const classes = useStyles();
  const { page } = useAppSelector((state) => state.app);

  return (
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
  );
};
