import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Container, Header, Tab, Tabs, Text, Title } from 'native-base';

import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Tabs')
  .addDecorator(withKnobs)
  .add(
    'Tabs',
    () => (
      <Container>
        <Header hasTabs>
          <Title>Tabs</Title>
        </Header>
        <Tabs>
          <Tab heading="Tab1">
            <Text>Tab 1</Text>
          </Tab>
          <Tab heading="Tab2">
            <Text>Tab 2</Text>
          </Tab>
          <Tab heading="Tab3">
            <Text>Tab 2</Text>
          </Tab>
        </Tabs>
      </Container>
    ),
    {
      notes: ' Note: ...'
    }
  );
