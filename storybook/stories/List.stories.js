import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  List,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Thumbnail,
  Separator
} from 'native-base';

import { withKnobs } from '@storybook/addon-knobs';
const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

storiesOf('List')
  //.addDecorator(BufferView)
  .addDecorator(withKnobs)
  .add(
    'List',
    () => (
      <Container>
        <Header>
          <Text>List</Text>
        </Header>
        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#FF9501' }}>
                  <Icon active name="airplane" />
                </Button>
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <Separator bordered>
              <Text>MIDFIELD</Text>
            </Separator>

            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#007AFF' }}>
                  <Icon active name="wifi" />
                </Button>
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem selected>
              <Left>
                <Text>Simon Mignolet</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Nathaniel Clyne</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: uri }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
        </Content>
      </Container>
    ),
    {
      notes: ' Note: ...'
    }
  );
