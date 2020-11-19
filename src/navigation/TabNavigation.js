import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {TEST_IDS} from '../constants';
import AuthContext from '../contexts/AuthContext';
import I18n from '../localisation/I18n';
import StorybookScreen from '../screens/storybook/StorybookScreen';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import AuthContainer from './AuthContainer';
import {FeedStack} from './StackNavigation';

//Tabnavigation
const Tab = createBottomTabNavigator();
const Tabs = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#B586F8',
        inactiveTintColor: '#131313',
        showLabel: true,
        labelStyle: {
          fontSize: 14,
          fontWeight: '100',
        },
        style: {
          borderTopWidth: 1,
          position: 'absolute',
          elevation: 0,
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        },
      }}>
      <Tab.Screen
        name={I18n.t('home')}
        component={FeedStack}
        options={{
          tabBarTestID: TEST_IDS.NAV.TABS.FEED,
        }}
      />
      <Tab.Screen
        name={I18n.t('user')}
        component={AuthContainer}
        options={{
          tabBarTestID: TEST_IDS.NAV.TABS.LOGIN,
        }}
      />
      <Tab.Screen
        name={I18n.t('storybook')}
        component={StorybookScreen}
        options={{
          tabBarTestID: TEST_IDS.NAV.TABS.STORYBOOK,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default () => {
  const [welcome, setWelcome] = useState(true);
  const {isLoggedIn} = useContext(AuthContext);

  return welcome && !isLoggedIn ? (
    <WelcomeScreen exitWelcome={() => setWelcome(false)} />
  ) : (
    <Tabs />
  );
};
