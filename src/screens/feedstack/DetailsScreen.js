import React from 'react';
import Card from '../../components/card/Card';
import {
  Button,
  Content,
  Text,
  Container,
  Header,
  Right,
  Left,
  Body,
  Icon,
} from 'native-base';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import I18n from '../../localisation/I18n';
import CustomHeader from '../../components/customHeader/CustomHeader';

const DetailsScreen = ({route: {params}, navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <CustomHeader
        onPress={() => navigation.goBack('Feed')}
        title={I18n.t('details')}
      />
      <ScrollView>
        <Container style={styles.container}>
          <Content style={styles.content}>
            <Card {...params} renderFooter={null} />
          </Content>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    display: 'flex',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    flex: 1,
    paddingTop: 20,
    padding: 10,
    minWidth: 410,
  },
});

export default DetailsScreen;
