import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Input, Item, Text, Textarea, Icon} from 'native-base';
import I18n from '../../localisation/I18n';
import {Image, StyleSheet} from 'react-native';
import {TEST_IDS} from '../../constants';

const ThingForm = ({
  image,
  title,
  description,
  setTitle,
  setDescription,
  buttonDisabled,
  buttonHandler,
}) => {
  return (
    <Form>
      {image && (
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      )}
      <Item rounded style={styles.input}>
        <Input
          label={I18n.t('title')}
          placeholder={I18n.t('enter_title')}
          onChangeText={setTitle}
          value={title}
          testID={TEST_IDS.THINGS.EDIT.TITLE}
        />
      </Item>
      <Item rounded>
        <Textarea
          rowSpan={5}
          label={I18n.t('description')}
          placeholder={I18n.t('enter_description')}
          onChangeText={setDescription}
          value={description}
          testID={TEST_IDS.THINGS.EDIT.DESCRIPTION}
        />
      </Item>

      <Button
        iconLeft
        bordered
        style={styles.button}
        onPress={buttonHandler}
        disabled={buttonDisabled}
        testID={TEST_IDS.THINGS.EDIT.SAVE}>
        <Icon
          type="MaterialIcons"
          name="save"
          style={{color: buttonDisabled ? '#b5b5b5' : '#AF52DE'}}
        />
        <Text>{I18n.t('save_thing')}</Text>
      </Button>
    </Form>
  );
};

ThingForm.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonDisabled: PropTypes.bool,
  buttonHandler: PropTypes.func,
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    flex: 1,
    resizeMode: 'contain',
    marginBottom: 20,
  },
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
  input: {
    marginBottom: 38,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    alignSelf: 'flex-start',
    marginTop: 19,
  },
});

export default ThingForm;
