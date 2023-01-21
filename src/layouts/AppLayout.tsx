import $ from 'jquery';
import { Layout, useTheme } from 'petald';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { updatePage } from '../store/app';
import { Page } from '../utils/constants';
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
    if (isBetween(Page.home, Page.work)) {
      $('body').css(lightThemeCSS);
      appDispatch(updatePage(Page.home));
    } else if (isBetween(Page.work, Page.about)) {
      $('body').css(darkThemeCSS);
      appDispatch(updatePage(Page.work));
    } else if (isBetween(Page.about, Page.music)) {
      $('body').css(lightThemeCSS);
      appDispatch(updatePage(Page.about));
    } else {
      $('body').css(darkThemeCSS);
      appDispatch(updatePage(Page.music));
    }
  };

  useEffect(() => {
    $('body').css(lightThemeCSS);
    appDispatch(updatePage(Page.home));
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Layout>
      <Layout.Header fixed style={{ padding: '0 12px' }}>
        <Header />
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer style={{ padding: '0 12px' }}>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};
