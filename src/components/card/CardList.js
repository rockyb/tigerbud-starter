import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import Card from './Card';
import {Button, Container, Text, View} from 'native-base';
import I18n from '../../localisation/I18n';

const CardList = ({things, hasNext, fetchNext, renderCardFooter}) => {
  const renderMore = () => {
    return hasNext ? (
      <Button onPress={fetchNext}>
        <Text>{I18n.t('more')}</Text>
      </Button>
    ) : null;
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {renderMore()}
      </View>
    );
  };
  return (
    <Container style={{paddingBottom: 100}}>
      <FlatList
        data={things}
        ListFooterComponent={renderFooter}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return <Card {...itemData.item} renderFooter={renderCardFooter} />;
        }}
      />
    </Container>
  );
};

export default CardList;
