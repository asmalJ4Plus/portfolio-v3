import React from 'react';
import { connect } from 'react-redux';
import { Box, Fade, Layout, Space, Typography } from 'petald';
import useStyles from './HeaderStyles';
import { scrollTo } from '../../utils/helpers';
import { StoreState } from '../../reducers/rootReducer';

type HeaderProps = {
  page?: string;
};

const Header = ({ page }: HeaderProps) => {
  const classes = useStyles();

  console.log(page);

  return (
    <Fade appear={page === 'home'} slide='down' style={{ display: 'flex', width: '100%' }}>
      <Box className={classes.logo}>
        <Typography variant='h4'>timkinsman</Typography>
      </Box>
      <Space gap='large'>
        <Typography
          variant='h4'
          className={classes.page}
          style={{ opacity: page === 'home' ? `1 !important` : 0.4 }}
        >
          <Box onClick={() => scrollTo('#home')}>home</Box>
        </Typography>
        <Typography
          variant='h4'
          className={classes.page}
          style={{ opacity: page === 'work' ? `1 !important` : 0.4 }}
        >
          <Box onClick={() => scrollTo('#work')}>work</Box>
        </Typography>
        <Typography
          variant='h4'
          className={classes.page}
          style={{ opacity: page === 'about' ? `1 !important` : 0.4 }}
        >
          <Box onClick={() => scrollTo('#about')}>about</Box>
        </Typography>
      </Space>
      <Box className={classes.music}>
        <Typography variant='h4'>music</Typography>
      </Box>
    </Fade>
  );
};

const mapStateToProps = (state: StoreState) => ({
  page: state.app.page,
});

export default connect(mapStateToProps, null)(Header);
