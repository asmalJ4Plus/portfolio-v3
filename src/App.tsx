import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import SwitchRoutes from './routes/SwitchRoutes';
import AppContainer from './AppContainer';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { isBetween } from './utils/helpers';
import { COLORS } from './AppTheme';
import { updatePageAction } from './actions/appActions';
import { StoreState } from './reducers/rootReducer';

type AppProps = {
  updatePage: Function;
};

const App = ({ updatePage }: AppProps) => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  const onScroll = () => {
    if (isBetween('#home', '#work')) {
      $('body').css({ 'background-color': COLORS.KIRYU, color: COLORS.MAJIMA });
      updatePage('home');
    } else if (isBetween('#work', '#about')) {
      $('body').css({ 'background-color': COLORS.MAJIMA, color: COLORS.KIRYU });
      updatePage('work');
    } else {
      $('body').css({ 'background-color': COLORS.KIRYU, color: COLORS.MAJIMA });
      updatePage('about');
    }
  };

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
