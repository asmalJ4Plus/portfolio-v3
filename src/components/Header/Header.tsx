import { Box, Fade, Space, Typography } from 'petald';
import { scrollTo } from '../../utils/helpers';
import { useAppSelector } from '../../utils/hooks';
import useStyles from './Header.styles';

export const Header = () => {
  const classes = useStyles();
  const { page } = useAppSelector((state) => state.app);

  return (
    <Fade appear={page === 'home'} slide='down' style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      {/* <Box className={classes.logo}>
        <Typography variant='h4'>timkinsman</Typography>
      </Box> */}
      <Space gap='large'>
        <Typography
          variant='h4'
          className={classes.page}
          style={{ opacity: page === 'home' ? '1 !important' : 0.4 }}
        >
          <Box onClick={() => scrollTo('#home')}>home</Box>
        </Typography>
        <Typography
          variant='h4'
          className={classes.page}
          style={{ opacity: page === 'work' ? '1 !important' : 0.4 }}
        >
          <Box onClick={() => scrollTo('#work')}>work</Box>
        </Typography>
        <Typography
          variant='h4'
          className={classes.page}
          style={{ opacity: page === 'about' ? '1 !important' : 0.4 }}
        >
          <Box onClick={() => scrollTo('#about')}>about</Box>
        </Typography>
      </Space>
      {/* <Box className={classes.music}>
        <Typography variant='h4'>music</Typography>
      </Box> */}
    </Fade>
  );
};
