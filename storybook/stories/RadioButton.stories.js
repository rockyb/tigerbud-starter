import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
} from 'native-base';

import {withKnobs} from '@storybook/addon-knobs';

storiesOf('Custom Radio Button', module)
  .addDecorator(withKnobs)
  .add(
    'Custom radio Button',
    () => (
      <Container>
        <Header>
          <Text>Grid</Text>
        </Header>
        <Content>
          <ListItem selected={false}>
            <Left>
              <Text>Lunch Break</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={false}
              />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={true}
              />
            </Right>
          </ListItem>
        </Content>
      </Container>
    ),
    {
      notes: ' Note: ...',
    },
  );
