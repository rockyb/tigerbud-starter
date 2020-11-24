import React from 'react'
import {SignUp as ASignUp} from 'aws-amplify-react-native'
import {Text, View, Header, Form, Item, Input, Button} from 'native-base'
import {SafeAreaView} from 'react-native'

//node_modules/aws-amplify-react-native/src/Auth/ConfirmSignUp.tsx:1
import I18n from '../../localisation/I18n'
import {TEST_IDS} from '../../constants/index'

export default class SignUp extends ASignUp {
  showComponent (theme) {
      return(
        <Text> Signup </Text>
      )
  }
}