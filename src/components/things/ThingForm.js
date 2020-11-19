import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Input, Item, Text, Textarea} from 'native-base';
import I18n from '../../localisation/I18n';
import {Image, StyleSheet} from 'react-native';
import {TEST_IDS} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    <SafeAreaView>
      <Form>
        {image && (
          <Item>
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
            />
          </Item>
        )}
        <Item>
          <Input
            label={I18n.t('title')}
            placeholder={I18n.t('enter_title')}
            onChangeText={setTitle}
            value={title}
            testID={TEST_IDS.THINGS.EDIT.TITLE}
          />
        </Item>
        <Item>
          <Textarea
            rowSpan={5}
            label={I18n.t('description')}
            placeholder={I18n.t('enter_description')}
            onChangeText={setDescription}
            value={description}
            testID={TEST_IDS.THINGS.EDIT.DESCRIPTION}
          />
        </Item>
        <Item last>
          <Button
            onPress={buttonHandler}
            disabled={buttonDisabled}
            testID={TEST_IDS.THINGS.EDIT.SAVE}>
            <Text>{I18n.t('save_thing').toUpperCase()}</Text>
          </Button>
        </Item>
      </Form>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {height: 200, width: null, flex: 1, resizeMode: 'contain'},
});

export default ThingForm;
