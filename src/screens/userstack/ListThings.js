import get from 'lodash-es/get';
import {Button, Text, Content, Container, Toast, View, Icon} from 'native-base';
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
import variables from '../../../native-base-theme/variables/tigerbud';
import OpenDrawerButton from '../../navigation/OpenDrawerButton';
import CustomHeader from '../../components/customHeader/CustomHeader';

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
          style={styles.buttonEdit}
          onPress={() => navigation.navigate('Edit', props)}
          testID={TEST_IDS.THINGS.EDIT.BUTTON}>
          <Icon type="MaterialIcons" name="edit" />
          <Text>{I18n.t('edit')}</Text>
        </Button>
        <Button
          iconLeft
          bordered
          dark
          style={styles.buttonDelete}
          onPress={() => deleteThing(props.id)}
          testID={TEST_IDS.THINGS.DELETE.BUTTON}>
          <Icon type="MaterialIcons" name="delete" />
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
    <Container>
      <CustomHeader title={I18n.t('your_things')}>
        <OpenDrawerButton
          navigation={navigation}
          testID={TEST_IDS.DRAWER.OPEN}
        />
      </CustomHeader>
      <Content style={styles.content}>
        <CardList {...listProps} renderCardFooter={renderCardFooter} />
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
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonEdit: {
    marginRight: 20,
  },
  buttonDelete: {
    color: variables.brandDark,
  },
});

export default ThingsScreen;
