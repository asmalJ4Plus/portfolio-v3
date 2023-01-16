import { Box, Fade, Space, Typography } from 'petald';
import { Panel } from '../../../components/Panel';
import { Page, about } from '../../../utils/constants';
import { useAppSelector } from '../../../utils/hooks';
import useStyles from '../Main.styles';

const links = [
  { label: 'Discord', to: 'https://discordapp.com/users/355321462032171009/' },
  { label: 'Email', to: 'mailto:tkinsm@gmail.com' },
  { label: 'GitHub', to: 'https://www.github.com/timkinsman' },
  { label: 'LinkedIn', to: 'https://www.linkedin.com/in/timkinsman' },
];

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
            <Typography variant='h3'>hi there!</Typography>
            <Typography variant='h5' style={{ whiteSpace: 'pre-line' }}>
              {about}
            </Typography>
            <Space>
              {links.map((link) => (
                <Typography variant='body1' key={link.label}>
                  <a href={link.to} target='_blank' rel='noreferrer'>
                    {link.label}
                  </a>
                </Typography>
              ))}
            </Space>
          </Space>
        </Fade>
      </Box>
    </Panel>
  );
};
