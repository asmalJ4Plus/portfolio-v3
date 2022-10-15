import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// Routes
import NotFound from '../components/NotFound/NotFound';
import routes from './Routes';

const SwitchRoutes = () => (
  <Router>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.main()} />
      ))}
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
);

export default SwitchRoutes;
