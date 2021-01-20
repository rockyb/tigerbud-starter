/* eslint-disable react/display-name */
import React from 'react';
import {Button, Content, Text, Container} from 'native-base';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CardList from '../../components/card/CardList';
import {TEST_IDS} from '../../constants';
import useThings from '../../hooks/useThings';
import I18n from '../../localisation/I18n';
import CustomHeader from '../../components/customHeader/CustomHeader';

const FeedScreen = ({navigation}) => {
  const renderCardFooter = (props) => {
    return (
      <Button
        onPress={() => navigation.navigate('Details', props)}
        testID={TEST_IDS.THINGS.DETAILS.BUTTON}>
        <Text>{I18n.t('details')}</Text>
      </Button>
    );
  };

  const listProps = useThings({
    limit: 3,
    type: 'card', //<- this is required to make the sort work
    sortDirection: 'DESC',
  });
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <CustomHeader title={I18n.t('feed')} />
        <ScrollView>
          <Container style={styles.container}>
            <Content style={styles.content}>
              <CardList {...listProps} renderCardFooter={renderCardFooter} />
            </Content>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
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

export default FeedScreen;
