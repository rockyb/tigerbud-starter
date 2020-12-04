import {
  ConfirmSignIn,
  RequireNewPassword,
  VerifyContact,
  withAuthenticator,
} from 'aws-amplify-react-native';

import React from 'react';
import SignIn from '../components/authentication/SignIn';
import ConfirmSignUp from '../components/authentication/ConfirmSignUp';
import ForgotPassword from '../components/authentication/ForgotPassword';
import SignUp from '../components/authentication/SignUp';

import {DrawerNavigation} from './DrawerNavigation';

export default withAuthenticator(
  DrawerNavigation,
  false,
  [
    <SignIn />,
    <ConfirmSignIn />,
    <VerifyContact />,
    <SignUp />,
    <ConfirmSignUp />,
    <ForgotPassword />,
    <RequireNewPassword />,
  ],
  null,
);
