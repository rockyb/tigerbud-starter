import React from 'react';
import {Button, Content, Text, Container} from 'native-base';
import CardList from '../../components/card/CardList';
import {TEST_IDS} from '../../constants';
import useThings from '../../hooks/useThings';
import I18n from '../../localisation/I18n';
import {styles} from './styles';
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
    <Container>
      <CustomHeader title={I18n.t('feed')} />
      <Content style={styles.content}>
        <CardList {...listProps} renderCardFooter={renderCardFooter} />
      </Content>
    </Container>
  );
};

export default FeedScreen;
