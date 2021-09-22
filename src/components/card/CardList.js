import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from './Card';
import {Button, Text, View} from 'native-base';
import I18n from '../../localisation/I18n';

const CardList = ({things, hasNext, fetchNext, renderCardFooter}) => {
  const renderMore = () => {
    return hasNext ? (
      <Button bordered block style={styles.button} onPress={fetchNext}>
        <Text>{I18n.t('more')}</Text>
      </Button>
    ) : null;
  };

  const renderFooter = () => {
    return <View style={styles.container}>{renderMore()}</View>;
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={things}
      ListFooterComponent={renderFooter}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return <Card {...itemData.item} renderFooter={renderCardFooter} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 50,
    paddingBottom: 50,
    paddingTop: 28,
    justifyContent: 'center',
  },
});

export default CardList;
