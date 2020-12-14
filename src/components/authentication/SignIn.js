// @ts-ignore
import {SignIn as ASignIn} from 'aws-amplify-react-native';
import {
  Text,
  View,
  Header,
  Item,
  Input,
  Button,
  Body,
  Content,
  Container,
} from 'native-base';
import React from 'react';
import I18n from '../../localisation/I18n';
import {TEST_IDS} from '../../constants/index';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
//node_modules/aws-amplify-react-native/src/Auth/SignIn.tsx:1

export default class SignIn extends ASignIn {
  isValid() {
    if (!this.state.username || !this.state.password) {
      return false;
    }
    return true;
  }
  renderUsernameField(theme) {
    const value = this.getUsernameFromInput();
    const {usernameAttributes = []} = this.props;
    if (usernameAttributes === 'email') {
      return (
        <Input
          onChangeText={(text) => this.setState({email: text})}
          label={I18n.t('email')}
          placeholder={I18n.t('enter_email')}
          testID={TEST_IDS.AUTH.EMAIL_INPUT}
          value={value}
        />
      );
    } else if (usernameAttributes === 'phone_number') {
      return (
        <Input
          key={'phone_number'}
          onChangeText={(text) => this.setState({phone_number: text})}
          label={I18n.t('phone_number')}
          placeholder={I18n.t('enter_phone_number')}
          keyboardType="phone-pad"
          testID={TEST_IDS.AUTH.PHONE_INPUT}
          value={value}
        />
      );
    } else {
      return (
        <Input
          onChangeText={(text) => this.setState({username: text})}
          label={I18n.t(this.getUsernameLabel())}
          placeholder={I18n.t('enter_username')}
          testID={TEST_IDS.AUTH.USERNAME_INPUT}
          value={value}
        />
      );
    }
  }
  showComponent(theme) {
    return (
      <SafeAreaView>
        <ScrollView>
          <Header>
            <Body>
              <Text>{I18n.t('sign_in_intro')}</Text>
            </Body>
          </Header>
          <Container style={styles.container}>
            <Content style={styles.content}>
              <Item rounded style={styles.input}>
                {this.renderUsernameField(theme)}
              </Item>
              <Item rounded>
                <Input
                  label={I18n.t('password')}
                  placeholder={I18n.t('enter_password')}
                  onChangeText={(text) => this.setState({password: text})}
                  secureTextEntry={true}
                  testID={TEST_IDS.AUTH.PASSWORD_INPUT}
                />
              </Item>
              <View>
                <Text errorMessage style={styles.errorMessage}>
                  {this.state.error}
                </Text>
              </View>

              <View style={theme.sectionBody}>
                <Button
                  small
                  style={styles.buttonForgotPassword}
                  transparent
                  onPress={() => this.changeState('forgotPassword')}
                  testID={TEST_IDS.AUTH.FORGOT_PASSWORD_BUTTON}>
                  <Text>{I18n.t('forgot_password')}</Text>
                </Button>

                <Button
                  style={styles.button}
                  onPress={this.signIn}
                  disabled={!this.isValid()}
                  testID={TEST_IDS.AUTH.SIGN_IN_BUTTON}>
                  <Text>{I18n.t('sign_in')}</Text>
                </Button>

                <View style={styles.sectionFooter}>
                  <Button
                    bordered
                    style={styles.button}
                    onPress={() => this.changeState('signUp')}
                    testID={TEST_IDS.AUTH.SIGN_UP_BUTTON}>
                    <Text>{I18n.t('sign_up')}</Text>
                  </Button>
                </View>
              </View>
            </Content>
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    display: 'flex',
    minWidth: 410,
    maxWidth: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    flex: 1,
    paddingTop: 46,
    padding: 10,
  },
  input: {
    marginBottom: 38,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonForgotPassword: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    alignSelf: 'center',
    paddingTop: 0,
    marginRight: -30,
  },
  errorMessage: {
    paddingTop: 5,
  },
  sectionFooter: {
    height: 370,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
