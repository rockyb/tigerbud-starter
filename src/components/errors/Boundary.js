import React from 'react';
import PropTypes from 'prop-types';
import {Button, Container, Content, H1, Text, View} from 'native-base';
import I18n from '../../localisation/I18n';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

const Boundary = ({error, resetError}) => {
  return (
    <SafeAreaView>
      <Container style={styles.container}>
        <H1>{I18n.t('whoops')}</H1>
        <Text>{error.toString()}</Text>
        <Button onPress={resetError}>
          <Text>{I18n.t('try_again')}</Text>
        </Button>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default Boundary;
