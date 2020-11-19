/* eslint-disable react/display-name */
import React from 'react';
import StoryBook from '../../../storybook';

const StorybookScreen = (props) => {
  return <StoryBook {...props} />;
};

StorybookScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default StorybookScreen;
