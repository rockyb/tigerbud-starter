import {API} from 'aws-amplify';
import get from 'lodash-es/get';
import {Toast} from 'native-base';
import React, {useContext, useState} from 'react';
import ThingForm from '../../components/things/ThingForm';
import LoaderContext from '../../contexts/LoaderContext';
import * as mutations from '../../graphql/mutations';

/**
 *
 * @param {*} param0
 */
const EditScreen = ({route: {params}}) => {
  const [current, setCurrent] = useState(params);
  const [title, setTitle] = useState(params.title);
  const [description, setDescription] = useState(params.description);
  const {setLoading} = useContext(LoaderContext);

  /**
   *
   */
  const updateThing = async () => {
    setLoading(true);
    let update = await API.graphql({
      query: mutations.updateThing,
      variables: {
        input: {
          id: params.id,
          title,
          description,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });

    /**
     * To disable the save button
     */
    const thing = get(update, 'data.updateThing');
    setCurrent(thing);
    setLoading(false);

    /**
     * Pop a toast to show it worked
     */
    Toast.show({
      text: 'Thing saved!',
      position: 'top',
    });
  };

  /**
   * Save button should be disabled if the title & description are unchanged
   * or, if the title or description are falsey (ie the inputs are empty)
   */
  const isDisabled =
    (title === current.title && description === current.description) ||
    !title ||
    !description;

  return (
    <ThingForm
      image={params.image}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      buttonDisabled={isDisabled}
      buttonHandler={updateThing}
    />
  );
};

export default EditScreen;
