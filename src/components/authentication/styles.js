import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
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
    paddingTop: 46,
    padding: 10,
    minWidth: 410,
  },
  input: {
    marginBottom: 38,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '98%',
    alignSelf: 'center',
    marginTop: 24,
  },
  //SignUp
  sectionButtonsSignUp: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: -38,
  },
  buttonConfirmCode: {
    marginLeft: -10,
    alignSelf: 'flex-start',
  },
  buttonSignIn: {
    alignSelf: 'flex-end',
    marginRight: -10,
  },
  //forgotPWD
  buttonBackSignIn: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    alignSelf: 'center',
    marginRight: -30,
  },
  //ConfirmSignUp
  buttonBackSignIn: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    alignSelf: 'center',
    paddingTop: 0,
    marginRight: -30,
    marginTop: -12,
  },

  sectionButtons: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonSigUp: {
    marginLeft: -10,
    alignSelf: 'flex-start',
  },
  buttonForgotPassword: {
    alignSelf: 'flex-end',
    marginRight: -10,
  },
  errorMessage: {
    lineHeight: 20,
    marginLeft: 5,
    fontWeight: '300',
  },
});
