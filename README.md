# <img src="docs/TigerBud-Glyph.svg" alt="Tigerbud logo" title="Tigerbud" align="left" height="35" /> Tigerbud Starter

## :star: &nbsp; Star us on GitHub — it helps!

Tigerbud is an essential starter kit to rapidly build mobile applications supported by modern, scalable, serverless AWS technologies. For beginners and professionals alike, for those who want to experiment, to learn and for those who already know enough, but want to give their budding project a head start.

Tigerbud is built in [React Native](https://reactnative.dev/) and backed by [AWS Amplify](https://aws.amazon.com/amplify/).

## Table of contents

- [Getting started](#getting-started)
  - [Install dependencies](#install-dependencies)
  - [Initialise project](#initialise-project)
  - [Troubleshooting](#troubleshooting)
    - [Project initialisation error](#project-initialisation-error)
    - [Multiple applications](#multiple-applications)
    - [Other](#other)
- [What do you get?](#what-do-you-get)
  - [AWS Amplify](#aws-amplify)
  - [NativeBase](#nativebase)
    - [Theming](#nativebase)
    - [Fonts & Icons](#nativebase)
  - [React Navigation v5](#react-navigation-v5)
    - [Tab navigation](#react-navigation-5)
    - [Stack navigation](#react-navigation-5)
    - [Drawer navigation](#react-navigation-5)
  - [Detox](#detox)
    - [iOS](#detox)
    - [Android](#detox)
  - [Husky](#husky)
    - [Pre-commit](#husky)
    - [Adding hooks](#husky)
  - [Storybook](#husky)
  - [Internationalisation](#internationalisation)
  - [Error boundaries](#error-boundaries)
  - [Authentication context](#authentication-context)
  - [Loading context](#loading-context)

## Getting started

### Install Dependencies

#### iOS

You will need Node, Watchman, the React Native command line interface, and Xcode.
While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

[Read More iOS Setup](docs/react-native/setup/ios.md)

#### Android

You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio.
While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.
[Read More Android Setup](docs/react-native/setup/android.md)

### Node & Watchman

We recommend installing Node and Watchman using [Homebrew](https://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

```bash
brew install node
brew install watchman
```

#### Backend

Our first step is to ensure that the Amplify CLI is installed globally. Full instructions can be found [here](https://docs.amplify.aws/cli/start/install).

```bash
npm install -g @aws-amplify/cli
```

You can verify your installation by running:

```bash
amplify --version
```

(At the time of writing the latest version is `v6.0.0`, but the CLI is being frequently updated so you may see a more recent version.)

You can also simply run:

```bash
amplify
```

This will present you with a list of possible commands to use with the [Amplify CLI](https://docs.amplify.aws/cli/).

### Initialise project

To initialise a new project from the tigerbud starter repository run the following command:

```bash
amplify init --app git@github.com:tigerspike/tigerbud-starter.git
```

This will deploy a new amplify project into an enviroment named `sampledev`.

To access your new environment run:

```bash
amplify console
```

and then select the `Amplify console` option.

### Troubleshooting

#### Project initialisation error

If you see the following error pop up right when you try to initialise the project:

```bash
Note: Amplify does not have knowledge of the url provided
Invalid remote github url
```

This likely means that you don't have SSH keys configured on your machine to talk to GitHub. If that's the case, you should follow some of the steps in [this documentation](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) to either [generate a new SSH key](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) or [reuse an existing one in your computer](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys). You then have to [add one of those keys](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) to your GitHub account. After that is done, try re-running the initialisation command (`amplify init --app git@github.com:tigerspike/tigerbud-starter.git`).

#### Multiple applications

If you attempt to initialise more than one new application into the same AWS account you may get a clash of resource names due to the environment always being set to `sampledev`. To recover your project run the following to specify a new environment name and re-deploy.

```bash
amplify env add
amplify push
```

This should now deploy a new app environment under the specified name. You can then clean up the environment named `sampledev` by running

```bash
amplify env remove sampledev
```

[Read More]('docs/storybook.md)

#### Other

If you happen into any other problems with the setup, please feel free to [open an issue](https://github.com/tigerspike/tigerbud-starter/issues) and we'll get back to you as soon as possible.

## What do you get?

### AWS Amplify

Tigerbud comes with a pre-configured Amplify backend which includes:

- Cognito with UserPool and API Key auth and a post authentication trigger setup to sync Cognito users with DynamoDb.
- AppSync with GraphQL schema defining the types `User` and `Thing` with authorisation rules applied to protect user data.
- Lambda resolvers demonstrating how to setup field level resolution and custom query resolution.

### NativeBase

The UI components used in Tigerbud are built on the NativeBase UI library. NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms.

The advantage of using NativeBase Library is to make it easy to theme the components with very little change to the components themselves.

The components are constructed in pure React Native platform along with some JavaScript functionality with a rich set of customizable properties.

[Read more](docs/react-native/ui/index.md)

### React Navigation v5

Stack, Tab and Drawer navigation.

### Internationalisation

### Detox

Example e2e test, fully configured for android and iOS automation
[Read More](docs/react-native/tools/detox.md)

### Storybook

Storybook for React Native

```bash
yarn storybook
```

[Read More](docs/react-native/tools/storybook.md)

Example E2E test, fully configured for Android and iOS automation.

### Husky

Pre-commit checks to ensure that generated VTLs are not committed to the repo.
Unit tests automated on commit.

### Error boundaries

## Customise Tigerbud

## License

Copyright 2020 Concentrix Tigerspike

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Links

- [GitHub](https://github.com/tigerspike/tigerbud-starter)
- [Amplify](https://docs.amplify.aws/start/q/integration/react-native)
- [React Native](https://reactnative.dev/)
- [Flipper](https://fbflipper.com/)
- [React Navigation v5](https://reactnavigation.org/docs/5.x/getting-started)
- [NativeBase](https://nativebase.io/)
- [Detox](https://github.com/tigerspike/tigerbud-starter)
- [Husky](https://github.com/tigerspike/tigerbud-starter)
- [Localisation](https://github.com/tigerspike/tigerbud-starter)
