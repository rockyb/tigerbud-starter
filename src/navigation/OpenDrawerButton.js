import {Button, Icon} from 'native-base';
import React from 'react';
import variables from '../../native-base-theme/variables/tigerbud';

const OpenDrawerButton = ({navigation}) => {
  return (
    <Button onPress={navigation.toggleDrawer} transparent>
      <Icon
        active
        ios="ios-menu"
        android="md-menu"
        style={{color: variables.brandDark}}
      />
    </Button>
  );
};

export default OpenDrawerButton;
