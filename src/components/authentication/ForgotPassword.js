import React from 'react'
import {ForgotPassword as AForgotPassword} from 'aws-amplify-react-native'
import {Text, View, Header, Form, Item, Input, Button} from 'native-base'
import {SafeAreaView} from 'react-native'

//node_modules/aws-amplify-react-native/src/Auth/ForgotPassword.tsx:1
import I18n from '../../localisation/I18n'
import {TEST_IDS} from '../../constants/index'

export default class ForgotPassword extends AForgotPassword {
  showComponent (theme) {
    return (
      <SafeAreaView style={theme.section}>
        <Header testID={TEST_IDS.AUTH.FORGOT_PASSWORD_TEXT}>
          <Text>{I18n.t('reset_password')}</Text>
        </Header>
        <View style={{flex: 1}}>
          {!this.state.delivery && this.forgotBody(theme)}
          {this.state.delivery && this.submitBody(theme)}
        </View>
        <View  style={{flex: 1}}>
          <Button
            transparent
            theme={theme}
            onPress={() => this.changeState('signIn')}
            testID={TEST_IDS.AUTH.BACK_TO_SIGN_IN_BUTTON}>
            <Text>{I18n.t('back_to_sign_in')}</Text>
          </Button>
        </View>
        <View style={{flex: 1}}>
          <Text>{this.state.error}</Text>
        </View>
      </SafeAreaView>
    )
  }

  forgotBody (theme: AmplifyThemeType) {
    return (
      <Form style={{display: 'flex', flex: 1, justifyContent: 'space-around'}}>
        <Item>{this.renderUsernameField(theme)}</Item>
        <Button
          style={{display: 'flex', alignSelf: 'center'}}
          onPress={this.send}
          disabled={!this.getUsernameFromInput()}
          testID={TEST_IDS.AUTH.SEND_BUTTON}>
          <Text>{I18n.t('send').toUpperCase()} </Text>
        </Button>
      </Form>
    )
  }
  //TODO: Refactor this to common
  renderUsernameField (theme) {
    const value = this.getUsernameFromInput()
    const {usernameAttributes = []} = this.props
    if (usernameAttributes === 'email') {
      return (
        <Input
          onChangeText={text => this.setState({email: text})}
          label={I18n.t('email')}
          placeholder={I18n.t('enter_email')}
          testID={TEST_IDS.AUTH.EMAIL_INPUT}
          value={value}
        />
      )
    } else if (usernameAttributes === 'phone_number') {
      return (
        <Input
          key={'phone_number'}
          onChangeText={text => this.setState({phone_number: text})}
          label={I18n.t('phone_number')}
          placeholder={I18n.t('enter_phone_number')}
          keyboardType='phone-pad'
          testID={TEST_IDS.AUTH.PHONE_INPUT}
          value={value}
        />
      )
    } else {
      return (
        <Input
          onChangeText={text => this.setState({username: text})}
          label={I18n.t(this.getUsernameLabel())}
          placeholder={I18n.t('enter_username')}
          testID={TEST_IDS.AUTH.USERNAME_INPUT}
          value={value}
        />
      )
    }
  }

  submitBody (theme: AmplifyThemeType) {
    return (
      <Form style={theme.sectionBody}>
        <Input
          theme={theme}
          onChangeText={text => this.setState({code: text})}
          label={I18n.t('confirmation_code')}
          placeholder={I18n.t('enter_confirmation_code')}
          required={true}
          testID={TEST_IDS.AUTH.CONFIRMATION_CODE_INPUT}
        />
        <Input
          theme={theme}
          onChangeText={text => this.setState({password: text})}
          label={I18n.t('password')}
          placeholder={I18n.t('enter_password')}
          secureTextEntry={true}
          required={true}
          testID={TEST_IDS.AUTH.PASSWORD_INPUT}
        />
        <Button
          theme={theme}
          onPress={this.submit}
          disabled={!(this.state.code && this.state.password)}
          testID={TEST_IDS.AUTH.SUBMIT_BUTTON}>
          <Text>{I18n.t('submit')}</Text>
        </Button>
      </Form>
    )
  }
}
