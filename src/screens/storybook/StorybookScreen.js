/* eslint-disable react/display-name */
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import {SafeAreaView, Dimensions, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React from 'react';
// import SafeAreaView from 'react-native-safe-area-view';
import StoryBook from '../../../storybook';

const deviceHeight = Dimensions.get('window').height;

const StorybookScreen = (props) => {
  const styles = StyleSheet.create({
    container: {
      height: deviceHeight - 80,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StoryBook {...props} />
    </SafeAreaView>
  );
};

StorybookScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default StorybookScreen;
