/* eslint-disable react/display-name */
import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import StoryBook from '../../../storybook';

const deviceHeight = Dimensions.get('window').height;

const StorybookScreen = (props) => {
  const styles = StyleSheet.create({
    container: {
      height: Platform.OS === 'android' ? deviceHeight - 50 : deviceHeight - 80,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StoryBook {...props} />
    </SafeAreaView>
  );
};

export default StorybookScreen;
