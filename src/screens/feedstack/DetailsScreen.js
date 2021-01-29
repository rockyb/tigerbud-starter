import React from 'react';
import Card from '../../components/card/Card';
import {Content, Container} from 'native-base';
import {StyleSheet} from 'react-native';
import I18n from '../../localisation/I18n';
import CustomHeader from '../../components/customHeader/CustomHeader';

const DetailsScreen = ({route: {params}, navigation}) => {
  return (
    <Container>
      <CustomHeader
        onPress={() => navigation.goBack('Feed')}
        title={I18n.t('details')}
      />

      <Content style={styles.content}>
        <Card {...params} renderFooter={null} />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    flex: 1,
    paddingTop: 20,
    padding: 10,
  },
});

export default DetailsScreen;
