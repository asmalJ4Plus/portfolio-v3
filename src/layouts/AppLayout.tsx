import $ from 'jquery';
import { Layout, useTheme } from 'petald';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { updatePage } from '../store/app';
import { isBetween } from '../utils/helpers';
import { useAppDispatch } from '../utils/hooks';
import { AppLayoutProps } from './AppLayout.types';

export const AppLayout = ({ children }: AppLayoutProps) => {
  const theme = useTheme();
  const appDispatch = useAppDispatch();

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
      appDispatch(updatePage('home'));
    } else if (isBetween('#work', '#about')) {
      $('body').css(darkThemeCSS);
      appDispatch(updatePage('work'));
    } else {
      $('body').css(lightThemeCSS);
      appDispatch(updatePage('about'));
    }
  };

  useEffect(() => {
    $('body').css(lightThemeCSS);
    appDispatch(updatePage('home'));
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
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};
