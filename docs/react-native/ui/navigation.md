# Navigation

Follow [this link](https://reactnavigation.org/docs/5.x/getting-started) for how to get started.

Run the folllowing command in your terminal to install required dependencies for `React Navigation`:

```bash
yarn add react-navigation react-navigation-tabs react-navigation-stack react-navigation-drawer
```

You can install additional options with:

```bash
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Now in your project directory `App/src`, create a `Navigation` folder. In this, create a `MainNavigation.js` file.

The `MainNavigation.js` contains the logic to create multiple screens to navigate through. `createStackNavigator()` does this by taking an object argument containing `Name : Component` pairs.

In the same format, `createBottomTabNavigator()` can be used to create the classical style of mobile app navigation, the `TabNavigator`.

In `MainNavigation.js`, import:

```javascript
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
```

And then create the Navigators:

```javascript
// note that HomeScreen, ListScreen and ProfileScreen in this example are components that need to be created separately and imported accordingly

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  List: ListScreen,
  Profile: ProfileScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: MainNavigator,
  List: ListScreen,
  Profile: ProfileScreen,
});
```

Now in `App/index.js`, import the `MainNavigation.js` component and return it.

```javascript
import MainNavigation from './src/navigation/MainNavigation';
```

```javascript
const App = (props) => {
  return <MainNavigation />;
};
export default App;
```

> Note that if using the `React` Context API, the `MainNavigation` component should be enclosed in a `NavigationContainer` component, also containing any `Context` components used.
>
> ```javascript
> <NavigationContainer>
>   <PageContext.Provider>
>     <MainNavigation />
>   </PageContext.Provider>
> </NavigationContainer>
> ```
