import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import SwitchRoutes from './routes/SwitchRoutes';
import AppContainer from './AppContainer';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { isBetween } from './utils/helpers';
import { updatePageAction } from './actions/appActions';
import { useTheme } from '@timkinsman/react-components';

type AppProps = {
  updatePage: Function;
};

const App = ({ updatePage }: AppProps) => {
  const theme = useTheme();

  const lightThemeCSS = {
    'background-color': theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  const darkThemeCSS = {
    'background-color': theme.palette.text.primary,
    color: theme.palette.background.default,
  };

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  const onScroll = () => {
    if (isBetween('#home', '#work')) {
      $('body').css(lightThemeCSS);
      updatePage('home');
    } else if (isBetween('#work', '#about')) {
      $('body').css(darkThemeCSS);
      updatePage('work');
    } else {
      $('body').css(lightThemeCSS);
      updatePage('about');
    }
  };

  useEffect(() => {
    $('body').css(lightThemeCSS);
    updatePage('home');
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <AppContainer>
      <NavBar />
      <SwitchRoutes />
      <Footer />
    </AppContainer>
  );
};

export default connect(null, { updatePage: updatePageAction })(App);
