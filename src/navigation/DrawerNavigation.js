import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DrawerContent from '../screens/drawer/DrawerContent';
import {UserStack} from './StackNavigation';
const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Your Things"
      drawerContent={(props) => {
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen name="Your Things" component={UserStack} />
    </Drawer.Navigator>
  );
};
