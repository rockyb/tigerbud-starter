# Storybook instructions

When adding a new story component you need to stop and run the server again.

## Storybook for React Native

This guide will help you to manually setup React Native Storybook and explain add-ons and the Storybook server.

``` bash
npx -p @storybook/cli sb init --type react_native
```

If you have an issue with the above command you can try to install using npm instead:

``` bash
npx -p @storybook/cli sb init --use-npm --type react_native
```

### Create config file

Add the following lines to a `configs/config.js` file:
Add this:

``` javascript
const config = { storybook: true/false };
module.exports = config;
```

## Display Storybook UI in your app

Add Storybook to App.js or App/index.js file:

``` javascript
import StoryBook from '../storybook';
import config from './src/configs/config';
import React {useState} from 'react';
```

``` javascript
const App = props => {
  const [state, setState] = useState({
    storybook: config.storybook
  });
  if (state.storybook) {
    return <StoryBook />;
  } else {
    return (
        <Text>App is runing...</Text>
    );
  }
};
export default App;
```

## Storybook server

``` bash
yarn add --dev @storybook/react-native-server babel-loader
```

To run Storybook server, you need to install a few dependencies and add a run script to your package:

``` json
{
  "scripts": {
    "storybook": "(adb reverse tcp:7007 tcp:7007 || true) && start-storybook"
  }
}
```

### Story loading

Story loading is controlled by the `react-native-storybook-loader` section of the project's `package.json`.

``` bash
yarn add react-native-storybook-loader -D
```

``` json
{
  "scripts": {
    "prestorybook": "rnstl"
  }
}
```

``` json
"config": {
  "react-native-storybook-loader": {
    "searchDir": ["./src", "./packages"],
    "pattern": "**/*.stories.js",
    "outputFile": "./storybook/storyLoader.js"
  }
}
```

## Import stories and run storybook

Go to configs/config.js
Turn Storybook to `true` and run

``` bash
yarn storybook
```

If you want to have add-ons inside the browser, create a file named `addons.js` in storybook (i.e. `storybook/addons.js`). Here is a list of default add-ons:

``` javascript
import '@storybook/addon-actions';
import '@storybook/addon-links';
```

### Dependencies to install

``` bash
yarn add @storybook/addon-knobs @storybook/addon-notes @storybook/addon-storyshots
```

``` bash
yarn add --dev @storybook/addon-actions @storybook/addon-links @storybook/addon-ondevice-actions @storybook/addon-ondevice-knobs @storybook/addon-ondevice-notes @storybook/addons @storybook/react-native @storybook/react-native-server
```
