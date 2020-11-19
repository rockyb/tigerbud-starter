import {StyleProvider} from 'native-base';
import React from 'react';
import getTheme from '../../native-base-theme/components';
import tigerbud from '../../native-base-theme/variables/tigerbud';

const TigerbudTheme = ({children}) => {
  return <StyleProvider style={getTheme(tigerbud)}>{children}</StyleProvider>;
};

export default TigerbudTheme;
