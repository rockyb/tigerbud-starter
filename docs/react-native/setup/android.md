# Android setup

## Java Development Kit

We recommend installing `JDK` using `Homebrew`. Run the following command in a terminal after installing `Homebrew`:

```bash
brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```

Follow [these instructions](https://reactnative.dev/docs/getting-started) for Android

If you have already installed `JDK` on your system, make sure it is `JDK` 8 or newer.

## Android development environment

Setting up your development environment can be somewhat tedious if you're new to `Android`development. If you're already familiar with `Android`development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

### Install `Android Studio`

Download and install `Android Studio`. While on `Android Studio` installation wizard, make sure the boxes next to all of the following items are checked:

- Android SDK
- Android SDK Platform
- Android Virtual Device

Then, click "Next" to install all of these components.

Once setup has finalized and you're presented with the "Welcome" screen, proceed to the next step.

### Install the `Android` SDK

`Android Studio` installs the latest `Android` SDK by default. Building a `React Native` app with native code, however, requires the `Android` 10 (Q) SDK in particular. Additional `Android` SDKs can be installed through the SDK Manager in `Android Studio`.

To do that, open `Android Studio`, click on "Configure" button and select "SDK Manager".

<img src="https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeMacOS-cbb28b4b70c4158c1afd02ddb6b12f4a.png">

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the `Android` 10 (Q) entry, then make sure the following items are checked:

- `Android` SDK Platform 29
- Intel x86 Atom_64 System Image **or** Google APIs Intel x86 Atom System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 29.0.2 is selected.

Finally, click "Apply" to download and install the `Android` SDK and related build tools.

### Configure the `ANDROID_HOME` environment variable

The `React Native` tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` (if you are using zsh then `~/.zprofile` or `~/.zshrc`) config file:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Type `source $HOME/.bash_profile` for bash or `source $HOME/.zprofile` for zsh to load the config into your current shell. Verify that `ANDROID_HOME` has been set by running `echo $ANDROID_HOME` and the appropriate directories have been added to your path by running `echo $PATH`.
