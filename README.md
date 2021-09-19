# <img src="./docs/TigerBud-Glyph.svg" alt="Tigerbud logo" title="Tigerbud" align="left" height="35" /> Tigerbud Starter

## :star: &nbsp; Star us on GitHub — it helps!

Tigerbud is an essential starter kit to rapidly build mobile applications supported by modern, scalable, serverless AWS technologies. For beginners and professionals alike, for those who want to experiment, to learn and for those who already know enough, but want to give their budding project a head start.

Tigerbud is built in [React Native](https://reactnative.dev/) and backed by [AWS Amplify](https://aws.amazon.com/amplify/).

## Table of contents

- [Getting started](#getting-started)
  - [Install dependencies](#install-dependencies)
  - [Initialise project](#initialise-project)
  - [Troubleshooting](#troubleshooting)
    - [Multiple applications](#multiple-applications)
- [What do you get?](#what-do-you-get)
  - [AWS Amplify](#aws-amplify)
  - [Native base](#native-base)
    - [Theming](#native-base)
    - [Fonts & Icons](#native-base)
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

### Install dependencies

Our first step is to ensure that the Amplify CLI is installed globally. Full instructions can be found [here](https://docs.amplify.aws/cli/start/install).

``` bash
npm install -g @aws-amplify/cli
```

You can verify your installation by running:

``` bash
amplify --version
```

(At the time of writing the latest version is `v6.0.0`, but the CLI is being frequently updated so you may see a more recent version.)

You can also simply run:

``` bash
amplify
```

This will present you with a list of possible commands to use with the [Amplify CLI](https://docs.amplify.aws/cli/).

### Initialise project

To initialise a new project from the tigerbud starter repository run the following command:

``` bash
amplify init --app git@github.com:tigerspike/tigerbud-starter.git
```

This will deploy a new amplify project into an enviroment named `sampledev`.

To access your new environment run:

``` bash
amplify console
```

and then select the `Amplify console` option.

### Troubleshooting

#### Multiple applications

If you attempt to initialise more than one new application into the same AWS account you may get a clash of resource names due to the environment always being set to `sampledev`. To recover your project run the following to specify a new environment name and re-deploy.

``` bash
amplify env add
amplify push
```

This should now deploy a new app environment under the specified name. You can then clean up the environment named `sampledev` by running

``` bash
amplify env remove sampledev
```

## What do you get?

### AWS Amplify

Tigerbud comes with a pre-configured Amplify backend which includes:

- Cognito with UserPool and API Key auth and a post authentication trigger setup to sync Cognito users with DynamoDb.
- AppSync with GraphQL schema defining the types `User` and `Thing` with authorisation rules applied to protect user data.
- Lambda resolvers demonstrating how to setup field level resolution and custom query resolution.

### Native base

Custom themed, etc.

### React Navigation v5

Stack, Tab and Drawer navigation.

### Internationalisation

### Detox

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
- [Native base](https://github.com/tigerspike/tigerbud-starter)
- [Detox](https://github.com/tigerspike/tigerbud-starter)
- [Husky](https://github.com/tigerspike/tigerbud-starter)
- [Localisation](https://github.com/tigerspike/tigerbud-starter)
