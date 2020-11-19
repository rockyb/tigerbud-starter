import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';

const CreateThingDrawerItem = ({navigation}) => {
  return (
    <DrawerItem
      label="Create Thing"
      onPress={() => navigation.navigate('Create')}
    />
  );
};

export default CreateThingDrawerItem;
