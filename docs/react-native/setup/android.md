# Folow these instructions for Android

[Getting started with React Native](https://reactnative.dev/docs/getting-started)

### Java Development Kit

We recommend installing JDK using Homebrew. Run the following commands in a Terminal after installing Homebrew:

```
brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```

[Follow this instructions for android](https://reactnative.dev/docs/getting-started)

If you have already installed JDK on your system, make sure it is JDK 8 or newer.

### Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

1. Install Android Studio
   Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

Android SDK
Android SDK Platform
Android Virtual Device
If you are not already using Hyper-V: Performance (Intel ® HAXM) (See here for AMD or Hyper-V)
Then, click "Next" to install all of these components.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

2. Install the Android SDK
   Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 10 (Q) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

<img src="https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeMacOS-cbb28b4b70c4158c1afd02ddb6b12f4a.png">

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 10 (Q) entry, then make sure the following items are checked:

#### Android SDK Platform 29

Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 29.0.2 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

3. Configure the `ANDROID_HOME` environment variable
   The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your
`$HOME/.bash_profile `
or
`$HOME/.bashrc` (if you are using zsh then ~/.zprofile or ~/.zshrc)
config file:

Type source `$HOME/.bash_profile` for bash or `source $HOME/.zprofile` to load the config into your current shell. Verify that `ANDROID_HOME` has been set by running echo \$ANDROID_HOME and the appropriate directories have been added to your path by running ` echo $PATH` .

# Start Android on simulator

Open the simulator. Then run:

```bash
yarn react-native run-android
cd android && ./gradlew clean
cd .. && yarn react-native run-android
```

If still not working need go to Android Studio, open the project, update the stuff they ask for and run the project from there.
