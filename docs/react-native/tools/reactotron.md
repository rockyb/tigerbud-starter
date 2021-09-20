# Reactotron instructions

We can use Reactraton to debug the app and also open storybook.

Need to install the [Reactotron desktop app](https://github.com/infinitered/reactotron) first.

Start by turning the web browser debug off

``` bash
command + D
```

then

``` bash
cd ios
react-native link @react-native-community/async-storage
yarn --clearCache
pod install
```

Rebuild and restart the app with

``` bash
react-native run-ios
```

or

``` bash
react-native run-android
```

and finally

``` bash
yarn start
```

Open Reactotron App desktop from your applications.
