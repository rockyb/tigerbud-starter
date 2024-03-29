import {Container, Content, Spinner} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Loader = () => {
  return (
    <Container style={styles.container}>
      <Content style={styles.content}>
        <Spinner color="#B586F8" />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  content: {
    width: deviceWidth,
    paddingTop: deviceHeight / 3,
  },
});

export default Loader;
