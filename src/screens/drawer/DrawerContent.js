import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import SignOutDrawerItem from './SignOutDrawerItem';
import CreateThingDrawerItem from './CreateThingDrawerItem';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <CreateThingDrawerItem navigation={props.navigation} />
      <SignOutDrawerItem />
    </DrawerContentScrollView>
  );
};

DrawerContent.propTypes = {};

export default DrawerContent;
