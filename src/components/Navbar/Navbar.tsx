import React from 'react';
import { connect } from 'react-redux';
import { Box, Fade, Space, Typography } from 'petald';
import useStyles from './NavbarStyles';
import { scrollTo } from '../../utils/helpers';
import { StoreState } from '../../reducers/rootReducer';

type NavBarProps = {
  page?: string;
};

const NavBar = ({ page }: NavBarProps) => {
  const classes = useStyles();

  return (
    <Fade
      appear={page === 'home'}
      slide='down'
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, width: '100%' }}
    >
      <Box className={classes.container}>
        <Box className={classes.logo}>
          <Typography variant='h4'>timkinsman</Typography>
        </Box>
        <Space gap='large'>
          <Typography
            variant='h4'
            className={classes.page}
            style={{ opacity: page === 'home' ? 1 : 0.4 }}
          >
            <Box onClick={() => scrollTo('#home')}>home</Box>
          </Typography>
          <Typography
            variant='h4'
            className={classes.page}
            style={{ opacity: page === 'work' ? 1 : 0.4 }}
          >
            <Box onClick={() => scrollTo('#work')}>work</Box>
          </Typography>
          <Typography
            variant='h4'
            className={classes.page}
            style={{ opacity: page === 'about' ? 1 : 0.4 }}
          >
            <Box onClick={() => scrollTo('#about')}>about</Box>
          </Typography>
        </Space>
        <Box className={classes.music}>
          <Typography variant='h4'>music</Typography>
        </Box>
      </Box>
    </Fade>
  );
};

const mapStateToProps = (state: StoreState) => ({
  page: state.app.page,
});

export default connect(mapStateToProps, null)(NavBar);
