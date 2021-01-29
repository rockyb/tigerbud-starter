/* eslint-disable react/display-name */
import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet} from 'react-native';

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
