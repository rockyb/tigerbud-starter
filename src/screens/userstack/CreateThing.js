import {API} from 'aws-amplify';
import get from 'lodash-es/get';
import {Toast} from 'native-base';
import React, {useContext, useState} from 'react';
import ThingForm from '../../components/things/ThingForm';
import AuthContext from '../../contexts/AuthContext';
import LoaderContext from '../../contexts/LoaderContext';
import * as mutations from '../../graphql/mutations';

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
    <ThingForm
      image={null}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      buttonDisabled={isDisabled}
      buttonHandler={createThing}
    />
  );
};

export default CreateThing;
