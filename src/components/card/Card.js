import {Body, Card as NBCard, CardItem, Text, Title} from 'native-base';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TEST_IDS} from '../../constants';

const Card = ({navigate, ...props}) => {
  const {image, title, description, renderFooter} = props;
  return (
    <NBCard testID={TEST_IDS.THINGS.CONTAINER}>
      <CardItem cardBody>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </CardItem>
      <CardItem>
        <Title>{title}</Title>
      </CardItem>
      <CardItem>
        <Text>{description}</Text>
      </CardItem>
      <CardItem>
        <Body>{renderFooter && renderFooter(props)}</Body>
      </CardItem>
    </NBCard>
  );
};

const styles = StyleSheet.create({
  image: {height: 200, width: null, flex: 1, resizeMode: 'cover'},
});

export default Card;
