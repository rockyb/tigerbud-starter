import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Header, Content, H1, H2, H3, Text, Title} from 'native-base';

import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Typografy', module)
  .addDecorator(withKnobs)
  .add(
    'Typografy',
    () => (
      <Container>
        <Header>
          <Title>Tabs</Title>
        </Header>
        <Content>
          <H1>Header One</H1>
          <H2>Header Two</H2>
          <H3>Header Three</H3>
          <Text>Default</Text>
        </Content>
      </Container>
    ),
    {
      notes: ' Note: ...',
    },
  );
