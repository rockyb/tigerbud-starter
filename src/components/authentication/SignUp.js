import React from 'react'
import {SignUp as ASignUp} from 'aws-amplify-react-native'
import {Text, View, Header, Form, Item, Input, Button} from 'native-base'
import {SafeAreaView, ScrollView} from 'react-native'

//node_modules/aws-amplify-react-native/src/Auth/SignUp.tsx:1
import I18n from '../../localisation/I18n'
import {TEST_IDS} from '../../constants/index'

export default class SignUp extends ASignUp {
  showComponent (theme) {
    if (this.checkCustomSignUpFields()) {
      this.signUpFields = this.props.signUpConfig.signUpFields
    }
    this.sortFields()
    return (
      <SafeAreaView>
        <ScrollView>
          <Header theme={theme} testID={TEST_IDS.AUTH.SIGN_UP_TEXT}>
            <Text>{I18n.t('create_account')}</Text>
          </Header>
          <View style={theme.sectionBody}>
            <Form>
              {
                this.signUpFields.map(field => {
                  return field.key !== 'phone_number' ? (
                    <Item>
                      <Input
                        key={field.key}
                        onChangeText={text => {
                          const stateObj = this.state
                          stateObj[field.key] = text
                          this.setState(stateObj)
                        }}
                        label={I18n.t(field.label)}
                        placeholder={field.placeholder}
                        testID={field.testID}
						required={field.required}
                        secureTextEntry={field.type === 'password'}
                      />
                    </Item>
                  ) : (
                    <Item last>
                     {/** Check this default dial code*/}
                      <Text style={{marginRight:20}}>{this.getDefaultDialCode()}</Text>
                      <Input
                        key={'phone_number'}
                        onChangeText={text =>
                          this.setState({phone_number: text})
                        }
                        label={I18n.t('phone_number')}
                        placeholder={I18n.t('phone_number')}
                        keyboardType='phone-pad'
						required={field.required}
                        testID={TEST_IDS.AUTH.PHONE_INPUT}

                      />
                    </Item>
                  )
                })}
              <Button
                style={{display: 'flex', alignSelf: 'center',marginTop:20}}
                text={I18n.t('sign_up')}
                onPress={this.signUp}
                disabled={!this.isValid()}
                testID={TEST_IDS.AUTH.SIGN_UP_BUTTON}
              >
              <Text>{I18n.t('sign_in').toUpperCase()}</Text>
            </Button>
            </Form>
          </View>
          <View style={theme.sectionFooter}>
            <Button
              transparent
              theme={theme}
              onPress={() => this.changeState('confirmSignUp')}
              testID={TEST_IDS.AUTH.CONFIRM_A_CODE_BUTTON}>
              <Text>{I18n.t('confirm_code')}</Text>
            </Button>
            <Button
              transparent
              theme={theme}
              onPress={() => this.changeState('signIn')}
              testID={TEST_IDS.AUTH.SIGN_IN_BUTTON}>
              <Text>{I18n.t('sign_in')}</Text>
            </Button>
          </View>
          <Text theme={theme}>{this.state.error}</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
