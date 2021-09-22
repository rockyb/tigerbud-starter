import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Image} from 'react-native';
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from 'native-base';
import {withKnobs} from '@storybook/addon-knobs';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    //image: require('./img/swiper-1.png'),
  },
  {
    text: 'Card 2',
    name: 'One',
    //image: require('./img/swiper-1.png'),
  },
  {
    text: 'Card 3',
    name: 'One',
    //image: require('./img/swiper-1.png'),
  },
];
const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

storiesOf('Deck Swiper', module)
  .addDecorator(withKnobs)
  .add(
    'Deck Swiper',
    () => (
      <Container>
        <Header>
          <Text>Accordion Example</Text>
        </Header>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={(item) => (
              <Card style={{elevation: 3}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: uri}} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{height: 300, flex: 1}} source={{uri: uri}} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{color: '#ED4A6A'}} />
                  <Text>{item.text}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    ),
    {notes: ' Accordion setup notes...'},
  );
