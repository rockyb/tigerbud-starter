import {API} from 'aws-amplify';
import get from 'lodash-es/get';
import {
  Content,
  Container,
  Toast,
  Header,
  Left,
  Right,
  Text,
  Body,
  Button,
  Icon,
} from 'native-base';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';
import ThingForm from '../../components/things/ThingForm';
import AuthContext from '../../contexts/AuthContext';
import LoaderContext from '../../contexts/LoaderContext';
import * as mutations from '../../graphql/mutations';
import OpenDrawerButton from '../../navigation/OpenDrawerButton';
import I18n from '../../localisation/I18n';
import CustomHeader from '../../components/customHeader/CustomHeader';

const CreateThing = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {loggedInUser} = useContext(AuthContext);
  const {setLoading} = useContext(LoaderContext);
  /**
   *
   */
  const createThing = async () => {
    setLoading(true);
    await API.graphql({
      query: mutations.createThing,
      variables: {
        input: {
          title,
          description,
          thingUserId: get(loggedInUser, 'attributes.sub'),
          type: 'card',
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });

    /**
     * Pop a toast to show it worked
     */
    Toast.show({
      text: 'Thing created!',
      position: 'top',
    });

    setTitle('');
    setDescription('');
    navigation.goBack();
    setLoading(false);
  };

  /**
   * Save button should be disabled if the title or description are falsey (ie the inputs are empty)
   */
  const isDisabled = !title || !description;

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <CustomHeader
        title={I18n.t('create_new_post')}
        onPress={() => navigation.goBack('Feed')}>
        <OpenDrawerButton navigation={navigation} />
      </CustomHeader>
      <ScrollView>
        <Container style={styles.container}>
          <Content style={styles.content}>
            <ThingForm
              image={null}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              buttonDisabled={isDisabled}
              buttonHandler={createThing}
            />
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
});

export default CreateThing;
