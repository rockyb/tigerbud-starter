# Customize

Customizing NativeBase will be a cakewalk for you. That is due to the fact, NativeBase has organized its code in modular pattern. It provides separate set of files for customizing each component.

NativeBase is built on top of React Native. Hence with any component you can pass the style property which will be merged to the default style of that component.
Visit [NativeBase Customizer](https://nativebase.io/nativebase-customizer) home page for more information.

## Table of contents:

[Theme and Variables](#What-are-themes-and-variables-and-how-to-change-them)
[Set Up](#Setup-to-theme-NativeBase-apps)
[Theme Color](#Theme-Color)
[Theme Font](#Theme-Font)
[Button](#Button)
[Theme Custom Component](#Theme-Custom-Component)

### What are themes and variables and how to change them?

NativeBase comes with a theme folder which comprises of two sub-folders

components: Theme styling files for all the NativeBase components. This is where you would change the style properties of the components if you need to.

Example, if you need to change the height of Button component, you'll need to change height in native-base-theme/components/Button.js.

variables: Contains three preset theme variable files, namely Platform, material, commonColor. You can change the variables (for color, fontFamily, iconFamily etc) for a uniform look and feel throughout your app.
Three themes to start with
NativeBase is packed with three preset themes.

Platform: The default theme of NativeBase which maps to the design of the platform where the app runs i.e., platform-specific theme for iOS and Android.
Material: Sometimes, you need Material design for both the platforms. Not everyone is a fan of it, but Google does use Material design on iOS. This theme is not 100% material yet but, it can be used today.
CommonColor: Most of the brands use a common color scheme for both the platforms. But they also follow platform specific icons, font and orientation of the components. CommonColor theme is best suited for such use-cases.
Check Theme and Variables to know list of customizable variables. Before going ahead of modifying in your node_modules/native-base/theme, check the procedure below to generate new theme for you to play with.

## Setup to theme NativeBase apps

To setup customized theme with your app, you should first eject NativeBase theme, which creates a copy of NativeBase theme at your project root. And then you are ready to have fun customizing theme for your app.

Run this command from your terminal after installing native-base.

node node_modules/native-base/ejectTheme.js

When you run the above command, a folder named native-base-theme gets copied to your project root. Inside the directory are two folders named components and variables.

All the theme files and variables get added to your project root. Change the variables or theme files.
Wrap the code or component to which you want to apply the theme with StyleProvider.
Pass the variable i.e., platform/material/commonColors.js as the parameter of theme function, which is passed as a value to style prop of component StyleProvider.
The theme you pass should be a function.
Now your project is ready for theme customization.

```
import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
​export default class ThemeExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
            <Text>
              I have changed the text color.
            </Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

```

- The <StyleProvider> with theme can be applied to any component of NativeBase.
- The theme holds good with all its descendants.
- The above code for theme change works this way:
- Go to native-base-theme/variables/platform.js and modify color code for textColor.
- Similarly you can customize theme for rest of the NativeBase components by modifying color code of their respective attributes, some of which are explained below.

# Theme Color

To change the basic theme context of NativeBase, make necessary changes to the following variables:

- Primary color: brandPrimary
- Info color: brandInfo
- Success color: brandSuccess
- Danger color: brandDanger
- Warning color: brandWarning

# Theme Font

Having different font types in your React Native apps is not tough any more. NativeBase provides you with a set of nine font families.

To include these fonts into your app, go to native-base-theme/platform.js (you can change this in any of the three theme variable files) and replace value for fontFamily with your choice of font name. NativeBase allows you to add more font styles on your own.

Font families included with NativeBase:

- AntDesign
- Entypo
- EvilIcons
- Feather
- FontAwesome
- FontAwesome5
- Foundation
- Ionicons
- MaterialIcons
- MaterialCommunityIcons
- Octicons
- Roboto
- Roboto_medium
- SimpleLineIcons
- Zocial
