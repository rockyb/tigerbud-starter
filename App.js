import {Root} from 'native-base';
import React, {useEffect} from 'react';
import Main from './src/Main';

import {LogBox} from 'react-native';

// Ignore log notification by message
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
//Ignore all log notifications
//LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Root>
      <Main />
    </Root>
  );
};

export default App;
