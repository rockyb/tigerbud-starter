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
import {Icon} from '../components/icon/Icon';
import variables from '../../native-base-theme/variables/tigerbud';

// tab navigation
const Tab = createBottomTabNavigator();
const Home = I18n.t('home');
const User = I18n.t('user');
const Storybook = I18n.t('storybook');

const Tabs = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === Home) {
            iconName = focused ? 'HomeActive' : 'Home';
          } else if (route.name === User) {
            iconName = focused ? 'Log' : 'Log';
          } else if (route.name === Storybook) {
            iconName = focused ? 'StoryBook' : 'StoryBook';
          }
          return (
            <Icon name={iconName} height={size} width={size} fill={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#6825AD',
        inactiveTintColor: '#131313',
        showLabel: true,
        labelStyle: {
          fontSize: 11,
          paddingTop: 5,
          fontWeight: '400',
        },
        style: {
          paddingTop: 10,
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 1,
          backgroundColor: variables.brandBgLight,
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        },
      }}>
      <Tab.Screen
        name={Home}
        component={FeedStack}
        options={{
          tabBarTestID: TEST_IDS.NAV.TABS.FEED,
        }}
      />
      <Tab.Screen
        name={User}
        component={AuthContainer}
        options={{
          tabBarTestID: TEST_IDS.NAV.TABS.LOGIN,
        }}
      />
      <Tab.Screen
        name={Storybook}
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
