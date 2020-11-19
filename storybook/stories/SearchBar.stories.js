import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from 'native-base';

import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Search Bar')
  .addDecorator(withKnobs)
  .add(
    'Search Bar',
    () => (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    ),
    {
      notes: ' Note: ...'
    }
  );
