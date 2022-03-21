import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';
import Account from './Account';

export const extraPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/my-account',
    element: <Account />,
  },
];
