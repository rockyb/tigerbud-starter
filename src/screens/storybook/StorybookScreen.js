/* eslint-disable react/display-name */
import {Container, Content} from 'native-base';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import StoryBook from '../../../storybook';

const StorybookScreen = (props) => {
  return (
    <StoryBook {...props} />
  );
};

StorybookScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default StorybookScreen;
