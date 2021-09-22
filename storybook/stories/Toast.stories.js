import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Header, Title} from 'native-base';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .add(
    'Toast',
    () => (
      <Container>
        <Header>
          <Title>Tabs</Title>
        </Header>
      </Container>
    ),
    {
      notes: ' Note: ...',
    },
  );
