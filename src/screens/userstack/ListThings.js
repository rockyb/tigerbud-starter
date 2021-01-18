import get from 'lodash-es/get';
import {Button, Text, Content, Container, Toast, View, Icon} from 'native-base';
import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
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

  /**
   * To render the buttons in the footer of the cards in the list
   *
   * @param {object} props
   */
  const renderCardFooter = (props) => {
    return (
      <View style={styles.buttonContainer}>
        <Button
          iconLeft
          bordered
          style={styles.buttonRightPadding}
          onPress={() => navigation.navigate('Edit', props)}
          testID={TEST_IDS.THINGS.EDIT.BUTTON}>
          <Icon type="FontAwesome" name="edit" />
          <Text>{I18n.t('edit')}</Text>
        </Button>
        <Button
          iconLeft
          bordered
          dark
          onPress={() => deleteThing(props.id)}
          testID={TEST_IDS.THINGS.DELETE.BUTTON}>
          <Icon type="FontAwesome" name="trash" />
          <Text>{I18n.t('delete')}</Text>
        </Button>
      </View>
    );
  };

  /**
   * Gets a set of props for the card list
   */
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

  return (
    <SafeAreaView>
      <ScrollView>
        <Container style={styles.container}>
          <Content style={styles.content}>
            <CardList {...listProps} renderCardFooter={renderCardFooter} />
          </Content>
        </Container>
      </ScrollView>
    </SafeAreaView>
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
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonRightPadding: {
    marginRight: 20,
  },
});

export default ThingsScreen;
