import React from 'react';
import Card from '../../components/card/Card';
import {Content, Container, Button, Text} from 'native-base';
import I18n from '../../localisation/I18n';
import CustomHeader from '../../components/customHeader/CustomHeader';
import {styles} from './styles';
import {TEST_IDS} from '../../constants';

const DetailsScreen = ({route: {params}, navigation}) => {
  return (
    <Container>
      <CustomHeader
        onPress={() => navigation.goBack('Feed')}
        title={I18n.t('details')}
      />

      <Content style={styles.content}>
        <Button
          onPress={() => navigation.goBack('Feed')}
          testID={TEST_IDS.THINGS.FEED.BUTTON}>
          <Text>{I18n.t('Feed')}</Text>
        </Button>
        <Card {...params} renderFooter={null} />
      </Content>
    </Container>
  );
};

export default DetailsScreen;
