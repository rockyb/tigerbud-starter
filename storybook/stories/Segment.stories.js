import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Segment,
  Text,
  Title
} from 'native-base';

import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Segment')
  .addDecorator(withKnobs)
  .add(
    'Segment',
    () => (
      <Container>
        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button first>
                <Text>Puppies</Text>
              </Button>
              <Button last active>
                <Text>Cubs</Text>
              </Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>

        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Segments</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Segment>
          <Button first>
            <Text>Puppies</Text>
          </Button>
          <Button>
            <Text>Kittens</Text>
          </Button>
          <Button last active>
            <Text>Cubs</Text>
          </Button>
        </Segment>

        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button first active>
                <Icon name="arrow-back" />
              </Button>
              <Button last>
                <Icon name="arrow-forward" />
              </Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
      </Container>
    ),
    {
      notes: ' Note: ...'
    }
  );
