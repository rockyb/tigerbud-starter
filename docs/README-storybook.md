## Storybook for React Native
This guide will help you to manually setup React Native Storybook and explain about addons and Storybook server.

```
    npx -p @storybook/cli sb init --type react_native

```
 ### if you have an issue with this command you can try to install using npm instead:
 ```
    npx -p @storybook/cli sb init --use-npm --type react_native

 ```

 ### Create File config: 
  => configs / config.js
     Add this: 
```
    const config = {  storybook: true/false };
    module.exports = config;

```
# Display StorybookUI in your app.
  
  Add Storybook to App.js or  App/index.js file
```
  import StoryBook from '../storybook';
  import config from './src/configs/config';
  import React {useState} from 'react;

```

```
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
```
 yarn add --dev @storybook/react-native-server babel-loader

```

To run Storybook server, you need to install a few dependencies and add a run script to your
```
"scripts": {
  ...
  "storybook": "(adb reverse tcp:7007 tcp:7007 || true) && start-storybook"
}
}
```
### Story loading

Story loading is controlled by the react-native-storybook-loader section of the project's package.json.

```
yarn add react-native-storybook-loader -D

```

```
{
  "scripts": {
    "prestorybook": "rnstl"
  }
}
```

```
  "config": {
    "react-native-storybook-loader": {
      "searchDir": ["./src", "./packages"],
      "pattern": "**/*.stories.js",
      "outputFile": "./storybook/storyLoader.js"
    }
  }
```

# Import stories and run storybook:

Go to configs/config.js
Turn Storybook true and run 
```
yarn storybook
```


If you want to have addons inside browser, create a file named addons.js file in storybook. Here is a list of default addons:

storybook/addons.js
```
import '@storybook/addon-actions';
import '@storybook/addon-links';
```


###Dependencies to install: 
```
yarn add  @storybook/addon-knobs", @storybook/addon-notes"  @storybook/addon-storyshots"

```

```
yarn add --dev
@storybook/addon-actions" @storybook/addon-links @storybook/addon-ondevice-actions @storybook/addon-ondevice-knobs @storybook/addon-ondevice-notes @storybook/addons @storybook/react-native @storybook/react-native-server

```