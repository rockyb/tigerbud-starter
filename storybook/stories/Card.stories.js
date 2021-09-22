import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Body,
  Right,
  Left,
  Thumbnail,
  Button,
} from 'native-base';

import {withKnobs, text, boolean} from '@storybook/addon-knobs';
const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add(
    'Card',
    () => (
      <Container>
        <Header>
          <Text>Card Component</Text>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>{text('Text for card ', 'This is a card ')}</Text>
              </Body>
            </CardItem>
          </Card>

          {/* Card List */}
          <Card>
            <CardItem header bordered>
              <Text>Card Header </Text>
            </CardItem>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>

          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  This is just a transparent card with some text to boot.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem button onPress={() => alert('This is card Item Button')}>
              <Text>Card Button </Text>
            </CardItem>
            {/* Card Button  */}
            <CardItem
              button
              onPress={() => alert('This is another card item Button')}>
              <Text>Another Item Card Button </Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered={boolean('Add border to header', false)}>
              <Text>Card Header </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Your text here</Text>
              </Body>
            </CardItem>
            <CardItem bordered={boolean('Add border to your content', false)}>
              <Body>
                <Text>Your text here</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered={boolean('Add border to footer', false)}>
              <Text>Card Footer</Text>
            </CardItem>
          </Card>

          {/* Card Image */}
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{uri: uri}}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    ),
    {
      notes: ' Note: Card',
    },
  );
