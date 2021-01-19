import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet} from 'react-native';
import Card from './Card';
import {Button, Container, Text, View} from 'native-base';
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
    return (
      <View
        style={{
          height: 50,
          marginBottom: 50,
          paddingBottom: 50,
          paddingTop: 28,
          justifyContent: 'center',
        }}>
        {renderMore()}
      </View>
    );
  };
  return (
    <Container>
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

const styles = StyleSheet.create({});

export default CardList;
