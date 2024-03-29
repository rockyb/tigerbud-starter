import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import {withKnobs} from '@storybook/addon-knobs';

import AnatomyNotes from '../notes/AnatomyNotes';

storiesOf('Anatomy', module)
  .addDecorator(withKnobs)
  .add(
    'Anatomy',
    () => (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    ),
    {notes: AnatomyNotes},
  );
