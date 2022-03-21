import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';
const Main = React.lazy(() => import('./Main'));

export const icoPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/ico/main',
    element: <Main />,
  },
];
