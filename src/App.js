import React from 'react';
import SwitchRoutes from './routes/SwitchRoutes';
import AppContainer from './AppContainer';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => (
  <AppContainer>
    <NavBar />
    <SwitchRoutes />
    <Footer />
  </AppContainer>
);

export default App;
