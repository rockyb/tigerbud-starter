import React from 'react';
import {Button, Container, Content, H1, Text} from 'native-base';
import I18n from '../../localisation/I18n';
import {StyleSheet} from 'react-native';

const Boundary = ({error, resetError}) => {
  return (
    <Container style={styles.container}>
      <Content style={styles.content}>
        <H1 style={styles.title}>{I18n.t('whoops')}</H1>
        <Text style={styles.text}>{I18n.t('whoops_description')}</Text>
        <Text style={styles.errMessage}>{error.toString('')}</Text>
        <Button style={styles.button} onPress={resetError}>
          <Text>{I18n.t('try_again')}</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    maxWidth: 400,
  },
  text: {
    fontSize: 18,
    fontWeight: '300',
    marginVertical: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
  },
  errMessage: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default Boundary;
