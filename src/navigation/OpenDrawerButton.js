import {Button, Icon} from 'native-base';
import React from 'react';
import variables from '../../native-base-theme/variables/tigerbud';

const OpenDrawerButton = ({navigation}) => {
  return (
    <Button onPress={navigation.toggleDrawer} transparent>
      <Icon
        type="MaterialIcons"
        name="menu"
        style={{color: variables.brandPrimary, fontSize: 28}}
      />
    </Button>
  );
};

export default OpenDrawerButton;
