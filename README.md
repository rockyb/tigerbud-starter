<a href="https://github.com/tigerspike/tigerbud-starter">
    <img src="./docs/TigerBud-Glyph.svg" alt="Tigerbud logo" title="Tigerbud" align="left" height="35" />
</a>

# &nbsp; Tigerbud Starter

#### :star: &nbsp; Star us on GitHub — it helps!

Tigerbud is an essential starter kit to rapidly build mobile applications supported by modern, scalable, serverless AWS technologies. For beginners and professionals alike, for those who want to experiment, to learn and for those who already know enough, but want to give their budding project a head start.

Tigerbud is built in React Native and backed by AWS Amplify.

## Table of contents

- [Getting Started](#getting-started)
  - [Install Dependancies](#install-dependancies)
  - [Initialise Project](#initialise-project)
  - [Troubleshooting](#trouble-shooting)
    - [Deployment Fails](#deployment-fails)
- [What do you get?](#what-do-you-get)
  - [AWS Amplify](#aws-amplify)
  - [Native Base](#native-base)
    - [Theming](#theming)
    - [Fonts & Icons](#fonts-&-icons)
  - [React Navigation 5](#react-navigation-5)
    - [Tab Navigation](#tab-navigation)
    - [Stack Navigation](#stack-navigation)
    - [Drawer Navigation](#drawer-navigation)
  - [Detox](#detox)
    - [iOS](#detox)
    - [Android](#detox)
  - [Husky](#husky)
    - [Pre Commit](#pre-commit)
    - [Adding Hooks](#adding-hooks)
  - [Storybook](#husky)
  - [Internationalisation](#internationalisation)
  - [Error Boundaries](#error-boundaries)
  - [Authentication Context](#authentication-context)
  - [Loading Context](#loading-context)

## Getting Started

### Install Dependancies

Our first step is to ensure that the Amplify CLI is installed globally. Full instructions can be found [here](https://docs.amplify.aws/cli/start/install)

```
npm install -g @aws-amplify/cli
```

### Initialise Project

To initialise a new project from the tigerbud starter repository run the following command:
```
amplify init --app git@github.com:tigerspike/tigerbud-starter.git
```

This will deploy a new amplify project into an enviroment named `sampledev`. 

To access your new environment run:

```
amplify console
```
### Troubleshooting

If you attempt to initialise many new applications into the same account you may get a clash of resource names due to the environment always being set to `sampledev`. To recover your project run the following to specify an new env name and re-deploy.

```
amplify env add
amplify push
```
This should now deploy a new app environment under the specified name. You can now clean up the environment named `sampledev` by running

```
amplify env remove sampledev
```

## What do you get?

### AWS Amplify

Tigerbud comes with a pre-configured Amplify backend which includes:
- Cognito with UserPool and API Key auth and a post authentication trigger setup to sync Cognito users with DynamoDb.
- AppSync with GraphQL schema defining the types `User` and `Thing` with authorisation rules applied to protect user data.
- Lambda resolvers demonstrating how to setup field level resolution and custom query resolution.

### Native Base

custom themed etc

### React Navigation 5

Stack, Tab and Drawer navigation

### Internationalisation

### Detox

Example e2e test, fully configured for android and iOS automation

### Husky

Pre-commit checks to ensure that generated VTL are not committed to the repo.
Unit tests automated on commit

### Error Boundaries

## Customise Tigerbud

## License

Copyright 2020 Tigerspike Concentrix

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Links

- [Github](https://github.com/tigerspike/tigerbud-starter)
- [Amplify](https://docs.amplify.aws/start/q/integration/react-native)
- [React Native](https://reactnative.dev/)
- [Flipper](https://fbflipper.com/)
- [React Navigation 5](https://reactnavigation.org/docs/getting-started)
- [Native Base](https://github.com/tigerspike/tigerbud-starter)
- [Detox](https://github.com/tigerspike/tigerbud-starter)
- [Husky](https://github.com/tigerspike/tigerbud-starter)
- [Localisation](https://github.com/tigerspike/tigerbud-starter)
