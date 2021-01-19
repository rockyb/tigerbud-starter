import React from 'react';
import {SignUp as ASignUp} from 'aws-amplify-react-native';
import {
  Text,
  View,
  Header,
  Form,
  Item,
  Input,
  Button,
  Body,
  Container,
  Content,
} from 'native-base';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
//node_modules/aws-amplify-react-native/src/Auth/SignUp.tsx:1
import I18n from '../../localisation/I18n';
import {TEST_IDS} from '../../constants/index';
import styles from './styles';
import CustomHeader from '../customHeader/CustomHeader';

export default class SignUp extends ASignUp {
  filterSignUpFields = (signupFields) => {
    return signupFields.key !== 'phone_number' && signupFields.key !== 'email';
  };

  isValid() {
    for (const el of this.signUpFields) {
      if (!this.state.username || !this.state.password) {
        return false;
      }
    }
    return true;
  }

  showComponent(theme) {
    this.sortFields();

    if (this.checkCustomSignUpFields()) {
      this.signUpFields = this.props.signUpConfig.signUpFields;
    }

    return (
      <SafeAreaView>
        <ScrollView>
          <CustomHeader
            testID={TEST_IDS.AUTH.SIGN_UP_TEXT}
            title={I18n.t('create_account')}
          />

          <Container style={styles.container}>
            <Content style={styles.content}>
              {this.signUpFields
                .filter(this.filterSignUpFields)
                .map((field) => {
                  return (
                    <Item key={field.key} rounded style={styles.input}>
                      <Input
                        onChangeText={(text) => {
                          const stateObj = this.state;
                          stateObj[field.key] = text;
                          this.setState(stateObj);
                        }}
                        label={I18n.t(field.label)}
                        placeholder={field.placeholder}
                        testID={field.testID}
                        required={field.required}
                        secureTextEntry={field.type === 'password'}
                      />
                    </Item>
                  );
                })}
              <Text errorMessage style={styles.errorMessage} theme={theme}>
                {this.state.error}
              </Text>
              <View style={styles.sectionButtonsSignUp}>
                <Button
                  small
                  transparent
                  theme={theme}
                  style={styles.buttonConfirmCode}
                  onPress={() => this.changeState('confirmSignUp')}
                  testID={TEST_IDS.AUTH.CONFIRM_A_CODE_BUTTON}>
                  <Text>{I18n.t('confirm_code')}</Text>
                </Button>

                <Button
                  small
                  transparent
                  style={styles.buttonSignIn}
                  theme={theme}
                  onPress={() => this.changeState('signIn')}
                  testID={TEST_IDS.AUTH.SIGN_IN_BUTTON}>
                  <Text>{I18n.t('sign_in')}</Text>
                </Button>
              </View>
              <Button
                style={styles.button}
                text={I18n.t('sign_up')}
                onPress={this.signUp}
                disabled={!this.isValid()}
                testID={TEST_IDS.AUTH.SIGN_UP_BUTTON}>
                <Text>{I18n.t('sign_up')}</Text>
              </Button>
            </Content>
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
