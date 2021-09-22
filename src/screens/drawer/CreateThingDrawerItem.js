import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';

const CreateThingDrawerItem = ({navigation}) => {
  return (
    <DrawerItem
      label="Create Thing"
      onPress={() => navigation.navigate('Create')}
      activeBackgroundColor="red"
      activeTintColor="green"
      inactiveTintColor="purple"
    />
  );
};

export default CreateThingDrawerItem;
