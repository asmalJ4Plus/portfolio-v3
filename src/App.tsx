import $ from 'jquery';
import { Layout, useTheme } from 'petald';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { updatePageAction } from './actions/appActions';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SwitchRoutes from './routes/SwitchRoutes';
import { isBetween } from './utils/helpers';

type AppProps = {
  updatePage: (page: string) => void;
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
