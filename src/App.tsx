import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Layout, Typography, useTheme } from 'petald';
import SwitchRoutes from './routes/SwitchRoutes';
import Header from './components/Header/Header';
import { isBetween } from './utils/helpers';
import { updatePageAction } from './actions/appActions';
import Footer from './components/Footer/Footer';

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
    <Layout>
      <Layout.Header fixed>
        <Header />
      </Layout.Header>
      <Layout.Content>
        <SwitchRoutes />
      </Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default connect(null, { updatePage: updatePageAction })(App);
