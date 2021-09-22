/* eslint-disable react/display-name */
import React from 'react';
import {SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import StoryBook from '../../../storybook';
import {TEST_IDS} from '../../constants';
const deviceHeight = Dimensions.get('window').height;

const StorybookScreen = (props) => {
  const styles = StyleSheet.create({
    container: {
      height: Platform.OS === 'android' ? deviceHeight - 50 : deviceHeight - 80,
    },
  });

  return (
    <SafeAreaView
      style={styles.container}
      testID={TEST_IDS.STORYBOOK.STORYBOOK}>
      <StoryBook {...props} />
    </SafeAreaView>
  );
};

export default StorybookScreen;
