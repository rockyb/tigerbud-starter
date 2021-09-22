import React from 'react';
import {SignUp as ASignUp} from 'aws-amplify-react-native';
import {
  Text,
  View,
  Item,
  Input,
  Button,
  Container,
  Content,
  Header,
  Body,
} from 'native-base';
//node_modules/aws-amplify-react-native/src/Auth/SignUp.tsx:1
import I18n from '../../localisation/I18n';
import {TEST_IDS} from '../../constants/index';
import {styles} from './styles';
import CustomInputPassword from '../customInputPassword/CustomInputPassword';

export default class SignUp extends ASignUp {
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
          rounded
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
        <>
          <Input
            onChangeText={(text) => this.setState({username: text})}
            label={I18n.t(this.getUsernameLabel())}
            placeholder={I18n.t('enter_username')}
            testID={TEST_IDS.AUTH.USERNAME_INPUT}
            value={value}
            autoCapitalize="none"
          />
        </>
      );
    }
  }

  showComponent(theme) {
    this.sortFields();

    if (this.checkCustomSignUpFields()) {
      this.signUpFields = this.props.signUpConfig.signUpFields;
    }

    return (
      <Container>
        <Header testID={TEST_IDS.AUTH.SIGN_UP_TEXT} noShadow>
          <Body>
            <Text headerTitle> {I18n.t('create_account')} </Text>
          </Body>
        </Header>

        <Content style={styles.content}>
          <Item rounded style={styles.input}>
            {this.renderUsernameField(theme)}
          </Item>
          {/* There is a bug in fontFamily RN Input with secureTextEntry we stop use this once is solved */}
          <Item rounded>
            <CustomInputPassword
              label={I18n.t('password')}
              placeholder={I18n.t('enter_password')}
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry={true}
              testID={TEST_IDS.AUTH.PASSWORD_INPUT}
              autoCapitalize="none"
            />
          </Item>
          <View>
            <Text errorMessage style={styles.errorMessage} theme={theme}>
              {this.state.error}
            </Text>
          </View>

          <View style={styles.sectionButtons}>
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
    );
  }
}
