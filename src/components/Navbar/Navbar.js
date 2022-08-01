import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Typography } from '@material-ui/core';
import useStyles from './NavbarStyles';
import { THEMES } from '../../AppTheme';

const NavBar = () => {
  const classes = useStyles();
  const [pageId, setPageId] = useState('home');

  const scrollTop = (id, nextId) => {
    const documentTop = $(document).scrollTop();
    const idTop = $(id).offset().top;
    const nextIdTop = $(nextId).offset().top;
    const windowHeight = $(window).height();

    return documentTop >= idTop - windowHeight / 2 && documentTop < nextIdTop - windowHeight / 2;
  };

  const onScroll = () => {
    if (scrollTop('#home', '#work')) {
      $('body').css({ 'background-color': THEMES.MAJIMA.PRIMARY, color: THEMES.MAJIMA.TEXT });
      setPageId('home');
    } else if (scrollTop('#work', '#about')) {
      $('body').css({ 'background-color': THEMES.KIRYU.PRIMARY, color: THEMES.KIRYU.TEXT });
      setPageId('work');
    } else {
      $('body').css({ 'background-color': THEMES.MAJIMA.PRIMARY, color: THEMES.MAJIMA.TEXT });
      setPageId('about');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleOnClick = (id) => {
    $('html,body').animate(
      {
        scrollTop: $(id).offset()?.top,
      },
      'slow',
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Typography variant='h2'>timkinsman</Typography>
      </div>
      <div className={classes.pages}>
        <Typography
          variant='h2'
          className={classes.page}
          style={{ opacity: pageId === 'home' && 1 }}
          onClick={() => handleOnClick('#home')}
        >
          home
        </Typography>
        <Typography
          variant='h2'
          className={classes.page}
          style={{ opacity: pageId === 'work' && 1 }}
          onClick={() => handleOnClick('#work')}
        >
          work
        </Typography>
        <Typography
          variant='h2'
          className={classes.page}
          style={{ opacity: pageId === 'about' && 1 }}
          onClick={() => handleOnClick('#about')}
        >
          about
        </Typography>
      </div>
      <div className={classes.music}>
        <Typography variant='h2'>music</Typography>
      </div>
    </div>
  );
};

export default NavBar;
