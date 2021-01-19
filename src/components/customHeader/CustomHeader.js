import React, {useContext, useState} from 'react';
import {Header, Left, Right, Text, Body, Button, Icon} from 'native-base';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import OpenDrawerButton from '../../navigation/OpenDrawerButton';
import I18n from '../../localisation/I18n';

const CustomHeader = ({children, onPress, title}) => {
  return (
    <Header>
      {onPress ? (
        <Left>
          <Button transparent onPress={onPress}>
            <Icon
              type="MaterialIcons"
              style={{fontSize: 28, color: '#AF52DE'}}
              name="arrow-back"
            />
          </Button>
        </Left>
      ) : (
        <Left />
      )}

      <Body>
        <Text headerTitle>{title} </Text>
      </Body>
      {children ? <Right>{children}</Right> : <Right />}
    </Header>
  );
};

const styles = StyleSheet.create({});

export default CustomHeader;
