import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import ConfirmSignupAwsCognito from './ConfirmSignupAwsCognito';
import ResetPasswordAwsCognito from './ResetPasswordAwsCognito';

export const authRouteConfig = [
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
  {
    path: '/confirm-signup',
    element: <ConfirmSignupAwsCognito />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordAwsCognito />,
  },
];
