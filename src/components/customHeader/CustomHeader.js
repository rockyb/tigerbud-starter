import React, {useContext, useState} from 'react';
import {Header, Left, Right, Text, Body, Button, Icon} from 'native-base';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import OpenDrawerButton from '../../navigation/OpenDrawerButton';
import I18n from '../../localisation/I18n';

const CustomHeader = ({children, onPress, title}) => {
  return (
    <>
      {onPress && children && title && (
        <Header>
          <Left>
            <Button transparent onPress={onPress}>
              <Icon
                type="MaterialIcons"
                style={{fontSize: 28, color: '#AF52DE'}}
                name="arrow-back"
              />
            </Button>
          </Left>
          <Body>
            <Text headerTitle>{title} </Text>
          </Body>
          <Right>{children}</Right>
        </Header>
      )}

      {!onPress && !children && title && (
        <Header>
          <Body>
            <Text headerTitle>{title} </Text>
          </Body>
        </Header>
      )}
      {!onPress && children && title && (
        <Header>
          <Left />
          <Body>
            <Text headerTitle>{title} </Text>
          </Body>
          <Right>{children}</Right>
        </Header>
      )}
      {onPress && !children && title && (
        <Header>
          <Left>
            <Button transparent onPress={onPress}>
              <Icon
                type="MaterialIcons"
                style={{fontSize: 28, color: '#AF52DE'}}
                name="arrow-back"
              />
            </Button>
          </Left>

          <Body>
            <Text headerTitle>{title} </Text>
          </Body>
          <Right />
        </Header>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default CustomHeader;
