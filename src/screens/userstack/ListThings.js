import get from 'lodash-es/get';
import {Button, Text, Toast, View} from 'native-base';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import CardList from '../../components/card/CardList';
import {TEST_IDS} from '../../constants';
import AuthContext from '../../contexts/AuthContext';
import useThings from '../../hooks/useThings';
import I18n from '../../localisation/I18n';
import * as mutations from '../../graphql/mutations';
import {API} from 'aws-amplify';
import ThingContext from '../../contexts/ThingContext';
import LoaderContext from '../../contexts/LoaderContext';

const ThingsScreen = ({navigation}) => {
  const {loggedInUser} = useContext(AuthContext);
  const {setThings} = useContext(ThingContext);
  const {setLoading} = useContext(LoaderContext);

  const deleteThing = async (id) => {
    setLoading(true);
    await API.graphql({
      query: mutations.deleteThing,
      variables: {
        input: {id},
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    setThings((things) => things.filter((t) => t.id !== id));
    setLoading(false);
    /**
     * Pop a toast to show it worked
     */
    Toast.show({
      text: 'Thing deleted!',
      position: 'top',
    });
  };

  const renderCardFooter = (props) => {
    return (
      <View style={styles.buttonContainer}>
        <Button
          transparent
          onPress={() => navigation.navigate('Edit', props)}
          testID={TEST_IDS.THINGS.EDIT.BUTTON}>
          <Text>{I18n.t('edit')}</Text>
        </Button>
        <Button
          transparent
          onPress={() => deleteThing(props.id)}
          testID={TEST_IDS.THINGS.DELETE.BUTTON}>
          <Text>{I18n.t('delete')}</Text>
        </Button>
      </View>
    );
  };

  const listProps = useThings({
    limit: 3,
    type: 'card', //<- this is required to make the sort work
    sortDirection: 'DESC',
    filter: {
      thingUserId: {
        eq: get(loggedInUser, 'attributes.sub'), //<- this ensures we just get things the user owns
      },
    },
  });

  return <CardList {...listProps} renderCardFooter={renderCardFooter} />;
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default ThingsScreen;
