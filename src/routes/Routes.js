import React from 'react';
import Main from '../components/Main/Main';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Main />,
  },
];

export default routes;
