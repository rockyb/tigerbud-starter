// @ts-ignore
import {SignIn as ASignIn} from 'aws-amplify-react-native';
import {Text, View, Input, Button, Content, Container, Item} from 'native-base';
import React from 'react';
import I18n from '../../localisation/I18n';
import {TEST_IDS} from '../../constants/index';
//node_modules/aws-amplify-react-native/src/Auth/SignIn.tsx:1
import {styles} from './styles';
import CustomHeader from '../customHeader/CustomHeader';
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
          autoCapitalize="none"
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
          autoCapitalize="none"
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
          autoCapitalize="none"
        />
      );
    }
  }
  showComponent(theme) {
    return (
      <Container>
        <CustomHeader title={I18n.t('sign_in_intro')} />
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

          <View style={styles.sectionButtons}>
            <Button
              small
              transparent
              style={styles.buttonSigUp}
              onPress={() => this.changeState('signUp')}
              testID={TEST_IDS.AUTH.SIGN_UP_BUTTON}>
              <Text>{I18n.t('sign_up')}</Text>
            </Button>

            <Button
              small
              style={styles.buttonForgotPassword}
              transparent
              onPress={() => this.changeState('forgotPassword')}
              testID={TEST_IDS.AUTH.FORGOT_PASSWORD_BUTTON}>
              <Text>{I18n.t('forgot_password')}</Text>
            </Button>
          </View>
          <Button
            style={styles.button}
            onPress={this.signIn}
            disabled={!this.isValid()}
            testID={TEST_IDS.AUTH.SIGN_IN_BUTTON}>
            <Text>{I18n.t('sign_in')}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
