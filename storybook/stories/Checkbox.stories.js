import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {
  Container,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body
} from 'native-base';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Checkbox')
  .addDecorator(withKnobs)
  .add(
    'Checkbox',
    () => (
      <Container>
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green" />
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    ),
    {
      notes: '  notes...'
    }
  );
