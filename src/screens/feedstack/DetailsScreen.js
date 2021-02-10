import React from 'react';
import Card from '../../components/card/Card';
import {
  Content,
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Text,
} from 'native-base';
import {StyleSheet} from 'react-native';
import I18n from '../../localisation/I18n';
import CustomHeader from '../../components/customHeader/CustomHeader';
import {styles} from './styles';

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

export default DetailsScreen;
