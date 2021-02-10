import React, {useRef, useEffect} from 'react';
import {Input, Item} from 'native-base';
import PropTypes from 'prop-types';

//There is a Issue in Input with Security Text Area so this can be stop used once this issue is fixed
const CustomInputPassword = ({
  placeholder,
  onChangeText,
  testID,
  required,
  autoCapitalize,
}) => {
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.setNativeProps({
      style: {
        fontFamily: 'Poppins',
      },
    });
  }, []);

  return (
    <Input
      ref={inputElement}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={true}
      testID={testID}
      required={required}
      autoCapitalize={autoCapitalize}
    />
  );
};

CustomInputPassword.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  testID: PropTypes.any,
  required: PropTypes.any,
  autoCapitalize: PropTypes.string,
};

export default CustomInputPassword;
