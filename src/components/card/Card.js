import {isNull} from 'lodash';
import {Body, Card as NBCard, CardItem, Text, H2} from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TEST_IDS} from '../../constants';

const Card = ({navigate, ...props}) => {
  const {image, title, description, renderFooter} = props;
  return (
    <NBCard style={styles.card} testID={TEST_IDS.THINGS.CONTAINER}>
      <CardItem cardBody>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </CardItem>
      <CardItem style={styles.content}>
        <Body>
          <H2 style={styles.title}>{title}</H2>
          <Text style={styles.description}>{description}</Text>
        </Body>
      </CardItem>
      <CardItem footer style={styles.footer}>
        <Body>{renderFooter && renderFooter(props)}</Body>
      </CardItem>
    </NBCard>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  renderFooter: PropTypes.func,
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 40,
  },
  image: {height: 200, width: null, flex: 1, resizeMode: 'cover'},
  title: {
    fontSize: 28,
  },
  description: {
    fontSize: 17,
  },
  content: {
    marginTop: 10,
  },
  footer: {
    paddingBottom: 20,
  },
});

export default Card;
