import {Container, Content, Spinner} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Loader = () => {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      height: deviceHeight,
    },
    content: {
      width: deviceWidth,
      paddingTop: deviceHeight / 3,
    },
  });

  return (
    <Container style={styles.container}>
      <Content style={styles.content}>
        <Spinner />
      </Content>
    </Container>
  );
};

export default Loader;
