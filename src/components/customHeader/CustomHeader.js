import React from 'react';
import {Header, Left, Right, Text, Body, Button, Icon} from 'native-base';
import {SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const CustomHeader = ({children, onPress, title, testID}) => {
  return (
    <>
      {onPress && children && title && (
        <SafeAreaView style={styles.droidSafeArea}>
          <Header noShadow>
            <Left>
              <Button transparent onPress={onPress} testID={testID}>
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
              <Button transparent onPress={onPress} testID={testID}>
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
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});

CustomHeader.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default CustomHeader;
