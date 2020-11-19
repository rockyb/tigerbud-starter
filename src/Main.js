import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './navigation/TabNavigation';
import TigerbudTheme from './styles/TigerbudTheme';
import Amplify, {Auth} from 'aws-amplify';
import ErrorBoundary from 'react-native-error-boundary';
/**
 * If aws-exports file does not exist then you need to configure the Amplify project.
 * Check the README for more information on how to do this.
 */
import config from '../aws-exports';
import {Text, View} from 'native-base';
import {Button} from 'react-native';
import AuthProvider from './contexts/AuthProvider';
import ThingProvider from './contexts/ThingProvider';

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

const CustomFallback = ({error, resetError}) => (
  <View>
    <Text>Something happened!</Text>
    <Text>{error.toString()}</Text>
    <Button onPress={resetError} title={'Try again'} />
  </View>
);

const Main = () => {
  return (
    <>
      <SafeAreaProvider>
        <TigerbudTheme>
          <ErrorBoundary FallbackComponent={CustomFallback}>
            <AuthProvider>
              <ThingProvider>
                <MainNavigation />
              </ThingProvider>
            </AuthProvider>
          </ErrorBoundary>
        </TigerbudTheme>
      </SafeAreaProvider>
    </>
  );
};

Main.propTypes = {};

export default Main;
