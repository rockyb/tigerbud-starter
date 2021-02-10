import React from 'react';
import {Header, Left, Right, Text, Body, Button, Icon} from 'native-base';
import {SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const CustomHeader = ({children, onPress, title}) => {
  return (
    <>
      {onPress && children && title && (
        <SafeAreaView style={styles.droidSafeArea}>
          <Header noShadow>
            <Left>
              <Button transparent onPress={onPress}>
                <Icon
                  type="MaterialIcons"
                  style={styles.icon}
                  name="arrow-back"
                />
              </Button>
            </Left>
            <Body>
              <Text headerTitle>{title} </Text>
            </Body>
            <Right>{children}</Right>
          </Header>
        </SafeAreaView>
      )}

      {!onPress && !children && title && (
        <SafeAreaView style={styles.droidSafeArea}>
          <Header noShadow>
            <Body>
              <Text headerTitle> {title} </Text>
            </Body>
          </Header>
        </SafeAreaView>
      )}
      {!onPress && children && title && (
        <SafeAreaView style={styles.droidSafeArea}>
          <Header noShadow>
            <Left />
            <Body>
              <Text headerTitle>{title} </Text>
            </Body>
            <Right>{children}</Right>
          </Header>
        </SafeAreaView>
      )}
      {onPress && !children && title && (
        <SafeAreaView style={styles.droidSafeArea}>
          <Header noShadow>
            <Left>
              <Button transparent onPress={onPress}>
                <Icon
                  type="MaterialIcons"
                  style={styles.icon}
                  name="arrow-back"
                />
              </Button>
            </Left>

            <Body>
              <Text headerTitle>{title} </Text>
            </Body>
            <Right />
          </Header>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    color: '#AF52DE',
  },
  droidSafeArea: {
    borderBottomColor: Platform.OS === 'android' ? '#d3d3d3' : null,
    borderBottomWidth: Platform.OS === 'android' ? 1 : 0,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});

CustomHeader.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default CustomHeader;
