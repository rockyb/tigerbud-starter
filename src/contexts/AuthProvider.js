import {Auth, Hub} from 'aws-amplify';
import React, {useCallback, useEffect, useState} from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(
    useCallback(() => {
      const getIsLoggedIn = async () => {
        try {
          let user = await Auth.currentAuthenticatedUser();
          setLoggedInUser(user);
        } catch {
          setLoggedInUser(null);
        }
      };
      getIsLoggedIn();

      Hub.listen('auth', getIsLoggedIn);

      return () => Hub.remove('auth', getIsLoggedIn);
    }, []),
  );

  return (
    <AuthContext.Provider
      value={{isLoggedIn: Boolean(loggedInUser), loggedInUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
