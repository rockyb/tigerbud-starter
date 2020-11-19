import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Container, Header, Content, Icon, Text } from 'native-base';

import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Icons')
  //.addDecorator(BufferView)
  .addDecorator(withKnobs)
  .add(
    'Icons',
    () => (
      <Container>
        <Header>
          <Text>Icons</Text>
        </Header>
        <Content>
          <Icon name="home" />
          <Icon
            ios="ios-menu"
            android="md-menu"
            style={{ fontSize: 20, color: 'red' }}
          />
          <Icon type="FontAwesome" name="home" />
        </Content>
      </Container>
    ),
    {
      notes: ' Note: ...'
    }
  );
