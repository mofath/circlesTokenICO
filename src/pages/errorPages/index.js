import React from 'react';
import Error401 from './Error401';
import Error403 from './Error403';
import Error404 from './Error404';
import Error500 from './Error500';
import Error503 from './Error503';
import ComingSoon from './ComingSoon';
import Maintenance from './Maintenance';

export const errorPagesConfigs = [
  {
    path: '/error-pages/error-401',
    element: <Error401 />,
  },
  {
    path: '/error-pages/error-403',
    element: <Error403 />,
  },
  {
    path: '/error-pages/error-404',
    element: <Error404 />,
  },
  {
    path: '/error-pages/error-500',
    element: <Error500 />,
  },
  {
    path: '/error-pages/error-503',
    element: <Error503 />,
  },
  {
    path: '/error-pages/coming-soon',
    element: <ComingSoon />,
  },
  {
    path: '/error-pages/maintenance',
    element: <Maintenance />,
  },
];
