/* eslint-disable react/display-name */
import {Container, Content} from 'native-base';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import StoryBook from '../../../storybook';

const StorybookScreen = (props) => {
  return (
    <SafeAreaView>
      <Container>
        <Content>
          <StoryBook {...props} />
        </Content>
      </Container>
    </SafeAreaView>
  );
};

StorybookScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default StorybookScreen;
