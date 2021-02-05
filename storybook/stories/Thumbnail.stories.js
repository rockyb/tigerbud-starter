import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Header, Content, Thumbnail, Text, Title} from 'native-base';

import {withKnobs} from '@storybook/addon-knobs';

const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

storiesOf('Thumbnail', module)
  .addDecorator(withKnobs)
  .add(
    'Thumbnail',
    () => (
      <Container>
        <Header>
          <Title>Tabs</Title>
        </Header>
        <Content>
          <Text>Square Thumbnail</Text>
          <Thumbnail square small source={{uri: uri}} />
          <Thumbnail square source={{uri: uri}} />
          <Thumbnail square large source={{uri: uri}} />
          <Text>Circular Thumbnail</Text>
          <Thumbnail small source={{uri: uri}} />
          <Thumbnail source={{uri: uri}} />
          <Thumbnail large source={{uri: uri}} />
        </Content>
      </Container>
    ),
    {
      notes: ' Note: ...',
    },
  );
