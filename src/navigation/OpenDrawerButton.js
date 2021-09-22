import {Button, Icon} from 'native-base';
import React from 'react';
import variables from '../../native-base-theme/variables/tigerbud';
import {TEST_IDS} from '../constants';

const OpenDrawerButton = ({navigation, testID}) => {
  return (
    <Button onPress={navigation.toggleDrawer} transparent testID={testID}>
      <Icon
        type="MaterialIcons"
        name="menu"
        style={{color: variables.brandPrimary, fontSize: 28}}
      />
    </Button>
  );
};

export default OpenDrawerButton;
