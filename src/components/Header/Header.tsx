import { Box, Fade, Space, Typography } from 'petald';
import { Page, pages } from '../../utils/constants';
import { scrollTo } from '../../utils/helpers';
import { useAppSelector } from '../../utils/hooks';
import useStyles from './Header.styles';

export const Header = () => {
  const classes = useStyles();
  const { page } = useAppSelector((state) => state.app);

  return (
    <Fade
      appear={page === Page.home}
      slide='down'
      style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
    >
      {/* <Box className={classes.logo}>
        <Typography variant='h4'>timkinsman</Typography>
      </Box> */}
      <Space gap='large'>
        {pages.map((pageToView) => (
          <Typography
            key={pageToView}
            variant='h4'
            className={classes.page}
            style={{ opacity: page === pageToView ? '1 !important' : 0.4 }}
          >
            <Box onClick={() => scrollTo(pageToView)}>{pageToView}</Box>
          </Typography>
        ))}
      </Space>
      {/* <Box className={classes.music}>
        <Typography variant='h4'>music</Typography>
      </Box> */}
    </Fade>
  );
};
