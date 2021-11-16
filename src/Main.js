import Amplify, {Auth} from 'aws-amplify';
import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import {SafeAreaProvider} from 'react-native-safe-area-context';
/**
 * If aws-exports file does not exist then you need to configure the Amplify project.
 * Check the README for more information on how to do this.
 */
import config from './aws-exports';
import Boundary from './components/errors/Boundary';
import {AuthProvider} from './contexts/AuthContext';
import {ThingProvider} from './contexts/ThingContext';
import {LoaderProvider} from './contexts/LoaderContext';
import MainNavigation from './navigation/TabNavigation';
import TigerbudTheme from './styles/TigerbudTheme';

Amplify.configure({
  ...config,
  Auth: {
    mandatorySignIn: false,
    region: config.aws_cognito_region,
    userPoolId: config.aws_user_pools_id,
    identityPoolId: config.aws_cognito_identity_pool_id,
    userPoolWebClientId: config.aws_user_pools_web_client_id,
  },
  Analytics: {
    disabled: true,
  },
});
Auth.configure(config);

const Main = () => {
  return (
    <>
      <SafeAreaProvider>
        <TigerbudTheme>
          <ErrorBoundary FallbackComponent={Boundary}>
            <LoaderProvider>
              <AuthProvider>
                <ThingProvider>
                  <MainNavigation />
                </ThingProvider>
              </AuthProvider>
            </LoaderProvider>
          </ErrorBoundary>
        </TigerbudTheme>
      </SafeAreaProvider>
    </>
  );
};

Main.propTypes = {};

export default Main;
