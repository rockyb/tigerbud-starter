import React from 'react';
import Card from '../../components/card/Card';
import {Button, Content, Text, Container, Header} from 'native-base';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const DetailsScreen = ({route: {params}}) => {
  return (
    <SafeAreaView>
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
