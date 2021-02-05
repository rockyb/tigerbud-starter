import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Header, Content, Spinner, Text} from 'native-base';

import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .add(
    'Spinner',
    () => (
      <Container>
        <Header>
          <Text>Spinner</Text>
        </Header>
        <Content>
          <Spinner />
          <Spinner color="red" />
          <Spinner color="green" />
          <Spinner color="blue" />
        </Content>
      </Container>
    ),
    {
      notes: ' Note: ...',
    },
  );
