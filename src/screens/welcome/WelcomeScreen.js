import {Button, Container, Content, H1, Text} from 'native-base';
import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import Background from '../../components/background/Background';
import {TEST_IDS} from '../../constants';
import I18n from '../../localisation/I18n';

const deviceHeight = Dimensions.get('window').height;

const WelcomeScreen = ({exitWelcome}) => {
  return (
    <Container style={styles.container} testID={TEST_IDS.WELCOME.CONTENT}>
      <Background />
      <Content style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/dark_logo_vertical.png')}
        />
        <Content style={styles.content}>
          <H1 style={styles.title}>{I18n.t('welcome')}!</H1>
          <Text style={styles.text}>{I18n.t('intro1')}</Text>
          <Text style={styles.text}>{I18n.t('intro2')}</Text>
          <Button
            style={styles.button}
            onPress={exitWelcome}
            testID={TEST_IDS.WELCOME.BUTTON}>
            <Text>{I18n.t('welcome')}</Text>
          </Button>
        </Content>
      </Content>
    </Container>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    display: 'flex',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    flex: 1,
  },
  logo: {
    marginTop: deviceHeight / 20,
    height: deviceHeight / 5,
    resizeMode: 'contain',
    alignSelf: 'center',
    aspectRatio: 1,
  },
  title: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 28,
    fontFamily: 'Poppins-Light',
  },
  text: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#fff',
    paddingHorizontal: 35,
    fontSize: 17,
    fontFamily: 'Poppins-Light',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '90%',
    alignSelf: 'center',
    marginTop: deviceHeight / 10,
  },
});
