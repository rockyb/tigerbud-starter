import {API} from 'aws-amplify';
import get from 'lodash-es/get';
import {Content, Container, Toast} from 'native-base';
import {StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import ThingForm from '../../components/things/ThingForm';
import LoaderContext from '../../contexts/LoaderContext';
import * as mutations from '../../graphql/mutations';
import CustomHeader from '../../components/customHeader/CustomHeader';
import OpenDrawerButton from '../../navigation/OpenDrawerButton';
import I18n from '../../localisation/I18n';

/**
 *
 * @param {*} param0
 */
const EditScreen = ({route: {params}, navigation}) => {
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
    navigation.goBack();
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
   * or, if the title or description are false  (ie the inputs are empty)
   */
  const isDisabled =
    (title === current.title && description === current.description) ||
    !title ||
    !description;

  return (
    <Container>
      <CustomHeader
        title={I18n.t('edit')}
        onPress={() => navigation.goBack('Feed')}>
        <OpenDrawerButton navigation={navigation} />
      </CustomHeader>
      <Content style={styles.content}>
        <ThingForm
          image={params.image}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          buttonDisabled={isDisabled}
          buttonHandler={updateThing}
        />
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
});

export default EditScreen;
