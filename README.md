# <img src="docs/image/tigerbud-glyph.svg" alt="Tigerbud logo" title="Tigerbud" align="left" height="35" /> Tigerbud Starter

## :star: &nbsp; Star us on GitHub — it helps!

`Tigerbud` is an essential starter kit to rapidly build mobile applications supported by modern, scalable, serverless AWS technologies. For beginners and professionals alike, for those who want to experiment, to learn and for those who already know enough, but want to give their budding project a head start.

`Tigerbud` is built in [React Native](https://reactnative.dev/) and backed by [AWS Amplify](https://aws.amazon.com/amplify/).

## Table of contents

- [Getting started](#getting-started)
  - [Install dependencies](#install-dependencies)
  - [Initialise project](#initialise-project)
  - [Start project](#start-project)
  - [Troubleshooting](#troubleshooting)
- [What do you get?](#what-do-you-get)
  - [AWS Amplify](#aws-amplify)
  - [NativeBase](#nativebase)
  - [React Navigation v5](#react-navigation-v5)
  - [Detox](#detox)
  - [Husky](#husky)
  - [Storybook](#storybook)
  - [Internationalisation](#internationalisation)
  - [Error boundaries](#error-boundaries)
  - [Authentication context](#authentication-context)
  - [Loading context](#loading-context)
- [License](#license)
- [Links](#links)

## Getting started

### Install Dependencies

To set up all the dependencies, we need to start with a package (a.k.a. a module) manager. A nice option we are using is 🧶[Yarn](https://yarnpkg.com/getting-started).

`Yarn` is a package manager for code. This allows sharing software easily. Our package contains the _shared code_ and a _package.json_ file describing the package itself.

You can 🛠[install Yarn](https://yarnpkg.com/getting-started/install) using 🍺[HomeBrew](https://brew.sh).

#### iOS

You will need `Node`, `Watchman`, the `React Native` command line interface, and `Xcode`. While you can use any editor of your choice to develop your app, you will need to install `Xcode` in order to set up the necessary tooling to build your `React Native` app for `iOS`.

[Read more about the `iOS` setup](docs/react-native/setup/ios.md)

#### Android

You will need `Node`, `Watchman`, the `React Native` command line interface, a `JDK`, and `Android Studio`. While you can use any editor of your choice to develop your app, you will need to install `Android Studio` in order to set up the necessary tooling to build your `React Native` app for `Android`.

[Read more about the `Android` setup](docs/react-native/setup/android.md)

#### Node & Watchman

We recommend installing `Node` and `Watchman` using [Homebrew](https://brew.sh/). Run the following commands in a terminal after installing `Homebrew`:

```bash
brew install node
brew install watchman
```

- [**Node**](https://nodejs.org/en/about/) is a `JavaScript` runtime environment that executes `JavaScript` code outside of a browser.

- [**Watchman**](https://facebook.github.io/watchman/) is a tool by `Facebook` for watching changes in the filesystem. It is highly recommended you install it for better performance.

#### Backend

Our first step is to ensure that the `Amplify CLI` is installed globally. Full instructions can be found [here](https://docs.amplify.aws/cli/start/install).

```bash
npm install -g @aws-amplify/cli
```

You can verify your installation by running:

```bash
amplify --version
```

(At the time of writing the latest stable version is `v7.3.1`, but the CLI is being frequently updated so you may see a more recent version.)

You can also simply run:

```bash
amplify
```

This will present you with a list of possible commands to use with the [Amplify CLI](https://docs.amplify.aws/cli/).

You should setup a mechanism to interact with AWS via the CLI. `Amplify` enables this interaction either via a [named profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) or directly inserting your AWS user's access keys (less recommended). To wire this up with a new AWS IAM user, we recommend you run the command `amplify configure` and follow the steps, as described in [this documentation](https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli).

### Initialise project

With all the dependencies out of the way, it's time to proper dig into it!

We suggest you begin from an empty folder. To initialise a new app from the `Tigerbud` starter repository into your current folder, run the following command:

```bash
amplify init --app git@github.com:tigerspike/tigerbud-starter.git
```

Follow the prompts to use either an AWS profile or the access keys of your AWS user that will manage the project. In case of any errors during this process, you may want to clean up your folder with `rm -rf * && rm -rf .*` and try the initialisation command again.

If all goes well a new `Amplify` project will be deployed into an enviroment named `sampledev`.

To access your new environment run:

```bash
amplify console
```

and then select the `Amplify console` option.

### Start project

First install global packages with:

```bash
yarn install
```

Then `iOS`-specific ones with:

```bash
cd ios && pod install && cd ..
```

Start the Metro listener with:

```bash
yarn start
```

and leave it running in a terminal. Jump on another tab or window and you're ready to start either the `iOS` app:

```bash
yarn ios
```

or the `Android` one:

```bash
yarn android
```

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

#### Other

If you happen into any other problems with the setup, please feel free to [open an issue](https://github.com/tigerspike/tigerbud-starter/issues) and we'll get back to you as soon as possible.

## What do you get?

### AWS Amplify

`Tigerbud` comes with a pre-configured `Amplify` backend which includes:

- Cognito with UserPool and API Key auth and a post authentication trigger setup to sync Cognito users with DynamoDb.
- AppSync with GraphQL schema defining the types `User` and `Thing` with authorisation rules applied to protect user data.
- Lambda resolvers demonstrating how to setup field level resolution and custom query resolution.

### NativeBase

The UI components used in `Tigerbud` are built on the `NativeBase` UI library. `NativeBase` is a free and open source UI component library for `React Native` to build native mobile apps for `iOS` and `Android`.

The advantage of using the `NativeBase` library is to make it easy to theme the components with very little change to the components themselves.

The components are constructed in pure `React Native` platform along with some `JavaScript` functionality with a rich set of customizable properties.

[Read more](docs/react-native/ui/index.md)

#### Customize Tigerbud

Customizing `NativeBase` will be a cakewalk for you. That is due to the fact that `NativeBase` has its code organized in modular pattern. It provides a separate set of files for customizing each component.

[Read more](docs/react-native/ui/customizing.md)

### React Navigation v5

`Stack`, `Tab` and `Drawer` navigation examples are included.

[Read More](docs/react-native/ui/navigation.md)

### Internationalisation

`Tigerbud` uses `react-native-localize`, a toolbox for your `React Native` app localization.

### Detox

Example E2E test, fully configured for `Android` and `iOS` automation.

[Read More](docs/react-native/tools/detox.md)

### Storybook

`Storybook` for `React Native` can be installed with:

```bash
yarn storybook
```

[Read More](docs/react-native/tools/storybook.md)

### Husky

Pre-commit checks to ensure that the generated VTLs are not committed to the repo. Unit tests automated on commit.

#### Adding Hooks

To add a hook, you can use `husky add <file> [cmd]` (don't forget to run `husky install` before).

```bash
npx husky add .husky/pre-commit "npm test"
```

Try to make a commit

```bash
git commit -m "Keep calm and commit"
```

If the `npm test` command in the hook fails, your commit will be automatically aborted.

To uninstall the hook, run:

```bash
yarn remove husky && git config --unset core.hooksPath
```

### Error Boundaries

`Tigerbud` uses `react-native-error-boundary`. This component catches `JavaScript` errors anywhere in their child component tree. Native errors are not handled.

[Read more](https://github.com/carloscuesta/react-native-error-boundary)

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
- [NativeBase](https://docs.nativebase.io/)
- [Detox](https://github.com/wix/Detox)
- [Husky](https://github.com/typicode/husky)
- [Localisation](https://github.com/zoontek/react-native-localize)
