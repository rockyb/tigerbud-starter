/* eslint-disable react/display-name */
import {Button, Text} from 'native-base';
import React from 'react';
import CardList from '../../components/card/CardList';
import {TEST_IDS} from '../../constants';
import useThings from '../../hooks/useThings';
import I18n from '../../localisation/I18n';

const FeedScreen = ({navigation}) => {
  const renderCardFooter = (props) => {
    return (
      <Button
        transparent
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
  return <CardList {...listProps} renderCardFooter={renderCardFooter} />;
};

export default FeedScreen;
