import {DrawerItem} from '@react-navigation/drawer';
import {Auth} from 'aws-amplify';
import React, {useContext} from 'react';
import AuthContext from '../../contexts/AuthContext';

const SignOutButton = () => {
  const {isLoggedIn} = useContext(AuthContext);
  if (!isLoggedIn) {
    return null;
  } else {
    return <DrawerItem label="Logout" onPress={() => Auth.signOut()} />;
  }
};

export default SignOutButton;
