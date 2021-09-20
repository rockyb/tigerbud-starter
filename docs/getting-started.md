# Amplify-Starter

## The aim of this project is

this and that and this and that and

yada

yada

yada

[TOC]

## Getting Started

### Installing Dependencies

To do this, we are using 🧶[Yarn](https://classic.yarnpkg.com/en/docs/getting-started).

Yarn is a **package (aka a module)** manager for code. This allows sharing software easily.

The **package** contains the *shared code* and a *package.json* file describing the package.

 🛠[Install Yarn](https://classic.yarnpkg.com/en/docs/install/) using 🍺 [HomeBrew](https://brew.sh/)

Then in your **terminal**, run the following commands:

``` bashell
yarn install
yarn start
```

### Installing & Building a React Native App

 Check out the [React Native Documentation](https://reactnative.dev/docs/getting-started) for info beyond the setup described here.

#### 🛠 Tools to install

- [**Node**](https://nodejs.org/en/about/) is a JavaScript runtime environment that executes JavaScript code outside of a browser.

- [**Watchman**](https://facebook.github.io/watchman/) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

  ``` bash
  brew install node
  brew install watchman
  ```

- **Xcode** can be installed via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). It will include the iOS simulator and necessary tools to build the iOS app.

  - **Command Line Tools**: Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.
  - **iOS Simulator**: Open **Xcode > Preferences...** and select the **Components** tab. Select a simulator with the corresponding version of iOS you wish to use.

- the **React Native CLI** (command line interface): React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using `npx`, which ships with Node.js. With `npx react-native`, the current stable version of the CLI will be downloaded and executed at the time the command is run.

#### _iOS_

##### iOS Tools

The following tools also need to be installed when developing for Android.

- [**CocoaPods**](https://guides.cocoapods.org/using/getting-started.html) is a dependency manager. It is built with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager, however we recommend that you use the standard Ruby available on macOS unless you know what you're doing.

  Using the default Ruby install will require you to use `sudo` when installing gems. (This is only an issue for the duration of the gem installation, though.)

  ``` bash
  sudo gem install cocoapods
  ```

##### ⚛️ **Create a new application**

You can use React Native's built-in command line interface to generate a new project. Let's create a new React Native project called "AwesomeProject":

``` bash
yarn react-native init AwesomeProject
```

##### **🏃🏼‍♀️Running the application**

Eiter run the command below after changing into your project directory or run it directly from Xcode.

``` bash
cd AwesomeProject
yarn react-native run-ios
```

#### _Android_

##### Android Tools

The following tools also need to be installed when developing for Android.

- **Java Development Kit (JDK)**

  *JDK 8 or newer*

  We recommend installing JDK using [Homebrew](https://brew.sh/).

  In your **terminal**, run the following commands:

  ``` bash
  brew tap AdoptOpenJDK/openjdk
  brew cask install adoptopenjdk8
  ```

- **Android Development Environment**

  [**Download and install Android Studio**](https://developer.android.com/studio/index.html). Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

  - Android SDK
  - Android SDK Platform
  - Performance (Intel ® HAXM) [See here for AMD](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)
  - Android Virtual Device

  > If the checkboxes are grayed out, you will have a chance to install these components later on.

- **Install the Android SDK**. Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the `Android 9 (Pie)` SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

  The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

  > The SDK Manager can also be found within the Android Studio "Preferences" dialog, under **Appearance & Behavior** → **System Settings** → **Android SDK**.

  Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the `Android 9 (Pie)` entry, then make sure the following items are checked:

  - `Android SDK Platform 28`
  - `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`

  Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that `28.0.3` is selected.

  Finally, click "Apply" to download and install the Android SDK and related build tools.

- **Configure the ANDROID_HOME envionment variable**. The React Native tools require some environment variables to be set up in order to build apps with native code.

  Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` config file:

  ``` bash
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/tools
  export PATH=$PATH:$ANDROID_HOME/tools/bin
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

  > `.bash_profile` is specific to `bash`. If you're using another shell, you will need to edit the appropriate shell-specific config file.

  Type `source $HOME/.bash_profile` to load the config into your current shell. Verify that ANDROID_HOME has been added to your path by running `echo $PATH`.

  > Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under **Appearance & Behavior** → **System Settings** → **Android SDK**.

##### ⚛️ Creating a new application

  > If you previously installed a global `react-native-cli` package, please remove it as it may cause unexpected issues.

 React Native has a built-in command line interface, which you can use to generate a new project. You can access it without installing anything globally using `npx`, which ships with Node.js. Let's create a new React Native project called "AwesomeProject":

  ``` bash
  npx react-native init AwesomeProject
  ```

  This is not necessary if you are integrating React Native into an existing application, if you "ejected" from Expo, or if you're adding Android support to an existing React Native project (see [Platform Specific Code](https://reactnative.dev/docs/platform-specific-code)). You can also use a third-party CLI to init your React Native app, such as [Ignite CLI](https://github.com/infinitered/ignite).

> _[Optional] Using a specific version or template_
>
> If you want to start a new project with a specific React Native version, you can use the `--version` argument:
>
> ``` bash
> npx react-native init AwesomeProject --version X.XX.X
> ```
>
> You can also start a project with a custom React Native template, like TypeScript, with `--template` argument:
>
> ``` bash
>   npx react-native init AwesomeTSProject --template react-native-template-typescript
> ```

---

##### 📱**Preparing the Android device**

  You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer.

  Either way, you will need to prepare the device to run Android apps for development.

- Using a physical device

    If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions [here](https://reactnative.dev/docs/running-on-device).

- Using a virtual device

    If you use Android Studio to open `./AwesomeProject/android`, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. Look for an icon that looks like this:

    ![Android Studio AVD Manager](https://reactnative.dev/docs/assets/GettingStartedAndroidStudioAVD.png)

    If you have recently installed Android Studio, you will likely need to [create a new AVD](https://developer.android.com/studio/run/managing-avds.html). Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the **Pie** API Level 28 image.

> If you don't have HAXM installed, follow [these instructions](https://github.com/intel/haxm/wiki/Installation-Instructions-on-macOS) to set it up, then go back to the AVD Manager.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

##### 🏃‍♀️  Running the application

> If you use the Yarn package manager, you can use `yarn` instead of `npx` when running React Native commands inside an existing project.

Run `npx react-native run-android` inside your React Native project folder:

``` bash
cd AwesomeProject
npx react-native run-android
```

If everything is set up correctly, you should see your new app running in your Android emulator shortly.

![AwesomeProject on Android](https://reactnative.dev/docs/assets/GettingStartedAndroidSuccessMacOS.png)

`npx react-native run-android` is one way to run your app - you can also run it directly from within Android Studio.

> If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting#content) page in the React Native docs.

## Installing Navigation

Read the [React Navigation docs here](https://reactnavigation.org/docs/4.x/getting-started/).

Run the folllowing command in your terminal to install required dependencies for React Navigation:

``` bash
yarn add react-navigation react-navigation-tabs react-navigation-stack react-navigation-drawer
```

``` bash
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Now in your project directory `App/src`, create a `Navigation` folder. In this, create a `MainNavigation.js` file.

The MainNavigation.js contains the logic to create multiple screens to navigate through. `createStackNavigator()` does this by taking an Object argument containing `Name : Component` pairs.

In the same format, `createBottomTabNavigator()` can be used to create the classical style of mobile app navigation, the TabNavigator.

In `MainNavigation.js`, import:

``` javascript
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
```

And then create the Navigators:

``` javascript
// note HomeScreen, ListScreen and ProfileScreen are componennts that need to be created separately and imported accordingly

const MainNavigator = createStackNavigator({
    Home: HomeScreen,
    List: ListScreen,
    Profile: ProfileScreen
  });

const TabNavigator =  createBottomTabNavigator({
    Home: MainNavigator,
    List: ListScreen,
    Profile: ProfileScreen
});

```

Now in App/index.js, import the MainNavigation.js component and return it.

``` javascript
import MainNavigation from './src/navigation/MainNavigation';

```

``` javascript
const App = props => {
    return (
     <MainNavigation />
    );
};
export default App;
```

> Note that if using the React Context API, the MainNavigation component should be enclosed in a NavigationContainer component, also containing any Context components used.
>
> ``` javascript
> <NavigationContainer>
>   <PageContext.Provider>
>     <MainNavigation />
>   </PageContext.Provider>
> </NavigationContainer>
> ```

## Installing Storybook

[**Storybook**](https://storybook.js.org/docs/basics/introduction/) is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.

Storybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements.

Now let's set up Storybook.

> For more detailed info on how to manually set up Storybook, [check this out](https://storybook.js.org/docs/guides/guide-react-native/).

``` bash
    npx -p @storybook/cli sb init --type react_native
```

if you have an issue with this command you can try to install using npm instead:

``` bash
   npx -p @storybook/cli sb init --use-npm --type react_native
```

Create a `configs` directory in `App/src/configs` and add

``` javascript
const config = {  storybook: true/false };
    module.exports = config;
```
