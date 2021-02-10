import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    flex: 1,
    padding: 10,
    minWidth: deviceWidth,
  },
  input: {
    marginBottom: 38,
    fontWeight: '400',
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
  buttonBackSignIn: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    alignSelf: 'center',
    marginRight: -30,
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
