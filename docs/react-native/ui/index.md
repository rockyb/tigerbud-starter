# TigerBud React Native App

The UI components used in Tigerbud are built on the NativeBase UI library. NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms.

The advantage of using NativeBase Library is to make it easy to theme the components with very little change to components themselves.

The components are constructed in pure React Native platform along with some JavaScript functionality with rich set of customizable properties.

## Table of contents

- [How to use Native Base Components in your app](#how-to-use-native-base-components-in-your-app)
- [Theme Customization](#theme-customization)
- [List Of UI Components](#list-Of-Components)
- [Navigation](#Navigation)
- [Customize](#Customize)

## How to use Native Base Components in your app

A common way to use NativeBase screen structure is to have all the components within `<Container>` and import the components you will use for your screen.

Example structure

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
```

## Theme Customization

Inside the App/src forder we have the /theme folder which comprises of two sub-folders

![app image](../../image/app-folder.png)

![theme image](../../image/theme-folder.png)

- components: Theme styling files for all the NativeBase components. This is where you would change the style properties of the components if you need to.

Example, if you need to change the height of Button component, you'll need to change height in theme/components/Button.js.

- variables: Contains three preset theme variable files, namely Platform, material, commonColor.
  You can change the variables (for color, fontFamily, iconFamily etc) for a uniform look and feel throughout your app. Also you can add your own file with you custom theme.

Check [Theme and Variables](./theme-variables.md).

## Three themes to start with

- Platform: The default theme of NativeBase which maps to the design of the platform where the app runs i.e., platform-specific theme for iOS and Android.
- Material: Sometimes, you need Material design for both the platforms. Not everyone is a fan of it, but Google does use Material design on iOS. This theme is not 100% material yet but, it can be used today.
- CommonColor: Most of the brands use a common color scheme for both the platforms. But they also follow platform specific icons, font and orientation of the components. CommonColor theme is best suited for such use-cases.

Check [Theme and Variables](./theme-variables.md). to know list of customizable variables()
Check [NativeBase Cheat Sheet](https://docs.nativebase.io/docs/CheatSheet.html)

### Use customs theme in your App

- Wrap the code or component to which you want to apply the theme with StyleProvider.
- Pass the variable i.e., platform/material/commonColors.js as the parameter of theme function, which is passed as a value to style prop of component StyleProvider.
- The theme you pass should be a function.

## How to create new theme

[Customizing NativeBase](https://nativebase.io/nativebase-customizer) components is now made far more easier with NativeBase Customizer. Components can be customized visually with a friendly user interface. You can either download the variable.js file for the customized theme or the whole demo app at the end.

Visit NativeBase Customizer home page for more information.

## List of UI Components build with NativeBase library

- [Anatomy](#Anatomy)
- [Header](#Anatomy-Header)
- [Content](#Content-Anatomy)
- [Footer](#Footer-Anatomy)
- [Accordion](#Accordion)
- [ActionSheet](#ActionSheet)
- [Badge](#Badge)
- [Button](#Button)
- [Card](#Card)
- [Check Box](#Check-Box)
- [Date Picker](#Date-Picker)
- [Deck Swiper](#Deck-Swiper)
- [FABs](#FABs)
- [Footer Tabs](#FooterTabs)
- [Form](#Form)
- [Icon](#Icon)
- [Layout](#Layout)
- [List](#List)
- [Picker](#Picker)
- [Radio Button](#RadioButton)
- Search Bar
- Segment
- Spinner
- Swipeable List
- Tabs
- Thumbnail
- Toast
- Typography
- Drawer
- Ref

## Anatomy

Automatically animates view to its new position.
A common way to use NativeBase screen structure is to have all the components within `<Container>`

- All the components should be included within the Container.
- Container takes mainly three components: `<Header>`, `<Content>` and `<Footer>`.
- Container comes with its predefined stylesheet, with an added advantage of accepting user-defined styles.
- Usage of Container's Header component is very similar to your HTML `<head>`. So is with Footer.
- The Content component of Container is nothing but the body section of your screen.

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  StyleProvider,
} from 'native-base';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

export default class AnatomyExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content>
            <Text>This is Content Section</Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
```

| Property | Default | Option |                                             Description                                              |
| :------: | :-----: | :----: | :--------------------------------------------------------------------------------------------------: |
|  Header  |    -    |   -    |            Renders as Header (navbar) of your screen. Input values: Button, Title (Text).            |
| Content  |    -    |   -    | Represents the main content of your screen. There can be only one `<Content>` component in a screen. |
|  Footer  |    -    |   -    |                      Renders as Footer of your screen. Input values: FooterTab                       |

### Anatomy Header

```javascript
import {Header, Left, Right, Body, Icon} from 'native-base';
<Header>
  <Left>
    <Button transparent>
      <Icon name="menu" />
    </Button>
  </Left>
  <Body>
    <Title>Header</Title>
  </Body>
  <Right />
</Header>;
```

### Content Anatomy

- This is a component which renders as body element of your screen.
- Each screen can have only one Content component and can be defined anywhere within the Container.
- Content takes in the whole collection of React Native and NativeBase components.
- Content provides you with stylesheet.
- User can add custom styles while defining Content within their app.
- Replacing Component: React Native Keyboard Aware Scroll View's KeyboardAwareScrollView

```javascript
import React, {Component} from 'react';
import {Container, Header, Content, Footer, Text} from 'native-base';
export default class ContentExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Text>This is Content Section</Text>
        </Content>
        <Footer />
      </Container>
    );
  }
}
```

|         Property          | Default | Option  |                                        Description                                        |
| :-----------------------: | :-----: | :-----: | :---------------------------------------------------------------------------------------: |
|          padder           |  true   | boolean | Applies margin at all sides to Content section. Can be used with NativeBase View as well. |
|  disableKBDismissScroll   |  false  | boolean |                            Disables automatic scroll on focus.                            |
|   contentContainerStyle   |    -    |  style  |                        Lets the user style the Content component.                         |
| enableResetScrollToCoords |  true   | boolean |              Lets the user enable or disable automatic resetScrollToCoords.               |

### Footer Anatomy

- There can be only a single Footer component into your Container.
- To have Footer for your screen, include Footer component within Container.
- define your Footer component anywhere in the bounds of Container.
- Footer takes input as: FooterTab.
- The components those are defined within Footer will be rendered in the same order that you define them.
- Footer provides you with stylesheet.
- User can add custom styles while defining Footer within their app.
- Replacing Component: React Native View.

## Accordion

Toggle the visibility of content across items of your screen. Accordion toggle through a number of text blocks with a single click.
NativeBase Accordion renders with pre-defined icons on toggle of text block, header and content style.

Contents:

- [Icon and Expanded Icon](#Icon-and-Expanded-Icon)
- [Icon and Expanded Icon style](#Icon-and-Expanded-Icon-style)
- [Header and Content style](#Header-and-Content-style)
- [Custom Header and Content](#Custom-Header-and-Content)

```javascript
import React, {Component} from 'react';
import {Container, Header, Content, Accordion} from 'native-base';
const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];
export default class AccordionExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0} />
        </Content>
      </Container>
    );
  }
}
```

|                   |  Default   |    Option    |                                               Description                                               |
| :---------------: | :--------: | :----------: | :-----------------------------------------------------------------------------------------------------: |
|     dataArray     |   Array    |      -       |                               Array of data chunks to render iteratively                                |
|     expanded      |     -      |      -       |                                       Index of accordion set open                                       |
|    headerStyle    |     -      |      -       |                                         Style accordion header                                          |
|   contentStyle    |     -      |      -       |                                         Style accordion content                                         |
|       icon        | arrow-down | user-defined |                                      Icon when accordion is closed                                      |
|   expandedIcon    |  arrow-up  | user-defined |                                       Icon when accordion is open                                       |
|     iconStyle     |     -      | user-defined |                                   Icon style when accordion is closed                                   |
| expandedIconStyle |     -      | user-defined |                                    Icon style when accordion is open                                    |
|   renderHeader    |     -      |      -       |                                    Custom design of Accordion header                                    |
|   renderContent   |     -      |      -       |                                   Custom design of Accordion content                                    |
|  onAccordionOpen  |  Function  |      -       | Callback that is executed when Accordion is opened. It provides two additional metadata: item and index |
| onAccordionClose  |  Function  |      -       | Callback that is executed when Accordion is closed. It provides two additional metadata: item and index |

### Icon and Expanded Icon

```javascript
<Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
```

### Icon and Expanded Icon style

```javascript
<Accordion
  dataArray={dataArray}
  icon="add"
  expandedIcon="remove"
  iconStyle={{color: 'green'}}
  expandedIconStyle={{color: 'red'}}
/>
```

### Header and Content style

```javascript
<Accordion
  dataArray={dataArray}
  headerStyle={{backgroundColor: '#b7daf8'}}
  contentStyle={{backgroundColor: '#ddecf8'}}
/>
```

### Custom Header and Content

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Icon,
  Accordion,
  Text,
  View,
} from 'native-base';
const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

export default class AccordionCustomHeaderContent extends Component {
  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#A9DAD6',
        }}>
        <Text style={{fontWeight: '600'}}> {item.title}</Text>
        {expanded ? (
          <Icon style={{fontSize: 18}} name="remove-circle" />
        ) : (
          <Icon style={{fontSize: 18}} name="add-circle" />
        )}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: '#e3f1f1',
          padding: 10,
          fontStyle: 'italic',
        }}>
        {item.content}
      </Text>
    );
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder style={{backgroundColor: 'white'}}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}
```

## ActionSheet

ActionSheet is a wrapper around the React Native [ActionSheetIOS](https://reactnative.dev/docs/actionsheetios) component.

[What is ActionSheet?](https://developer.apple.com/design/human-interface-guidelines/ios/views/action-sheets/)
An action sheet is a specific style of alert that appears in response to a control or action, and presents a set of two or more choices related to the current context. Use an action sheet to let people initiate tasks, or to request confirmation before performing a potentially destructive operation.

For ActionSheet to work, you need to wrap your topmost component inside `<Root>` from native-base.

```javascript
import {Root} from 'native-base';
import {StackNavigator} from 'react-navigation';
const AppNavigator = StackNavigator({
  Page: {screen: Page},
});
export default () => (
  <Root>
    <AppNavigator />
  </Root>
);
```

Example:

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Button,
  Content,
  ActionSheet,
  Text,
} from 'native-base';
var BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class ActionSheetExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Button
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: 'Testing ActionSheet',
                },
                (buttonIndex) => {
                  this.setState({clicked: BUTTONS[buttonIndex]});
                },
              )
            }>
            <Text>Actionsheet</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
```

|        Property        | Default |      Option      |               Description                |
| :--------------------: | :-----: | :--------------: | :--------------------------------------: |
|        options         |    -    | Array of strings |          List of button titles           |
|   cancelButtonIndex    |    -    |       int        |   index of cancel button in 'options'    |
| destructiveButtonIndex |    -    |       int        | index of destructive button in 'options' |
|         title          |    -    |      string      |  a title to show above the ActionSheet   |
|         show()         |    -    |      method      |             show ActionSheet             |
|         hide()         |    -    |      method      |             hide ActionSheet             |

## Badge

Badges are numerical indicators of how many items are associated with an element. Badges can notify you that there are new or unread messages or notifications. These can be very effective in alerting the user to new things on your app.

```javascript
import { Badge, Text, Icon } from 'native-base';

  <Badge>
    <Text>2</Text>
  </Badge>
  <Badge primary>
    <Text>2</Text>
  </Badge>
  <Badge success>
    <Text>2</Text>
  </Badge>
  <Badge info>
    <Text>2</Text>
  </Badge>
  <Badge warning>
    <Text>2</Text>
  </Badge>
  <Badge danger>
    <Text>2</Text>
  </Badge>
  <Badge primary>
    <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
  </Badge>
  <Badge style={{ backgroundColor: 'black' }}>
    <Text style={{ color: 'white' }}>1866</Text>
  </Badge>

```

## Button

Note: Always import and use Text from NativeBase with Buttons.

- Supports React Native app on both iOS and Android devices.
- Button component takes input such as: Text, Icon, Text with Icon.
- Customize the props of this component.
- You can change the default button text case(in Android) from variables file after .

Replacing Component:

- React Native [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html) for iOS
- React Native [TouchableNativeFeedback](https://facebook.github.io/react-native/docs/touchablenativefeedback.html) for Android

Contents:

- [Button Theme](#Button-Theme)
- [Transparent Button](#Transparent-Button)
- [Outline Button](#Outline-Button)
- [Rounded Button](#Rounded-Button)
- [Block Button](#Block-Button)
- [Full Button](#Full-Button)
- [Icon Button](#Icon-Button)
- [Button Size](#Button-Size)
- [Disabled Button](#Disabled-Button)

Syntax:

```javascript
import React, {Component} from 'react';
import {Container, Header, Content, Button, Text} from 'native-base';
export default class ButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
```

Configuration:

|  Property   | Default | Option  |                   Description                   |
| :---------: | :-----: | :-----: | :---------------------------------------------: |
|   active    |    -    | boolean |                 State of button                 |
| transparent |  true   | boolean |         Renders child element of button         |
|  bordered   |    -    |    -    |          Applies outline button style           |
|   rounded   |    -    |    -    | Renders button with slightly round shaped edges |
|    block    |    -    |    -    |               Block level button                |
|    full     |    -    |    -    |                Full width button                |
|  disabled   |  true   | boolean |        Disables click option for button         |
|    small    |    -    |    -    |                Small size button                |
|    arge     |    -    |    -    |                Large size button                |
|  iconRight  |    -    |    -    |           Right padding for the icon            |
|  iconLeft   |    -    |    -    |            Left padding for the icon            |
|    light    |    -    | boolean |     Light white background color for button     |
|   primary   |    -    | boolean |        Blue background color for button         |
|   success   |    -    | boolean |        Green background color for button        |
|    info     |    -    | boolean |     Light blue background color for button      |
|   warning   |    -    | boolean |       Yellow background color for button        |
|   danger    |    -    | boolean |         Red background color for button         |
|    dark     |    -    | boolean |        Black background color for button        |

### Button Theme

- Primary (default)
- Success
- Info
- Warning
- Danger
- Light
- Dark

Syntax:

```javascript
  <Button light><Text> Light </Text></Button>
  <Button primary><Text> Primary </Text></Button>
  <Button success><Text> Success </Text></Button>
  <Button info><Text> Info </Text></Button>
  <Button warning><Text> Warning </Text></Button>
  <Button danger><Text> Danger </Text></Button>
  <Button dark><Text> Dark </Text></Button>
```

#### Transparent Button

Include `transparent` prop with Button. This will render button with no border and no background color.

Syntax:

```javascript
  <Button transparent light>
    <Text>Light</Text>
  </Button>
  <Button transparent>
    <Text>Primary</Text>
  </Button>
  <Button transparent success>
    <Text>Success</Text>
  </Button>
  <Button transparent info>
    <Text>Info</Text>
  </Button>
  <Button transparent warning>
    <Text>Warning</Text>
  </Button>
  <Button transparent danger>
    <Text>Danger</Text>
  </Button>
  <Button transparent dark>
    <Text>Dark</Text>
  </Button>

```

#### Outline Button

Include `bordered` prop with Button to apply outline button style.

```javascript
<Button bordered light>
  <Text>Light</Text>
</Button>
<Button bordered>
  <Text>Primary</Text>
</Button>
<Button bordered success>
  <Text>Success</Text>
</Button>
<Button bordered info>
  <Text>Info</Text>
</Button>
<Button bordered warning>
  <Text>Warning</Text>
</Button>
<Button bordered danger>
  <Text>Danger</Text>
</Button>
<Button bordered dark>
  <Text>Dark</Text>
</Button>
```

#### Rounded Button

Include `rounded` prop with Button to easily style your buttons with slightly rounded edges.

```javascript
  <Button rounded light>
    <Text>Light</Text>
  </Button>
  <Button rounded>
    <Text>Primary</Text>
  </Button>
  <Button rounded success>
    <Text>Success</Text>
  </Button>
```

#### Block Button

A block level button spans the entire width of the parent element. Create block level buttons by adding `block` prop with the `Button`

Syntax:

```javascript
<Button block light>
  <Text>Light</Text>
</Button>
```

#### Full Button

Adding full to a button will make the button take 100% of its parent’s width. However, it will also remove the button’s left and right borders. This style is useful when the button should stretch across the entire width of the display.

Syntax:

```javascript
  <Button full light>
    <Text>Light</Text>
  </Button>
  <Button full>
    <Text>Primary</Text>
  </Button>
```

#### Icon Button

The Icon Buttons, can take text and/or icon as child elements inside the Button.
This goes as simple as this: include your choice of icon using Icon component within the Button component.

Syntax:

```javascript
<Button iconLeft light>
  <Icon name='arrow-back' />
  <Text>Back</Text>
</Button>
<Button iconRight light>
  <Text>Next</Text>
  <Icon name='arrow-forward' />
</Button>
```

#### Button Size

Include the following props with your `Button`.

`small`: for small size button.
`large`: for large size button.

```javascript
<Button small primary>
  <Text>Default Small</Text>
</Button>
          ...
<Button large primary>
  <Text>Default Small</Text>
</Button>
```

#### Disabled Button

The `disabled`prop of Button is of type boolean. When present, it specifies that the button should be disabled. The disabled prop can be set to keep a user from clicking on the button until some other conditions are met (like selecting a checkbox, etc.). Then, a conditional code could remove the disabled value, and make the button usable.

Syntax:

```javascript
<Button disabled>
  <Text>Button</Text>
</Button>
```

## Card

Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.

Contents:

- [Card Header and Footer](#Card-Header-and-Footer)
- [CardItem Bordered](#CardItem-Bordered)
- [CardItem Button](#CardItem-Button)
- [Card Transparent](#Card-Transparent)
- [Card List](#Card-List)
- [Card Image](#Card-Image)
- [Card Showcase](#Card-Showcase)

General Syntax:

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
} from 'native-base';
export default class CardExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
```

### Card

- This component adds a box-shadow by default.
- Also provides default spacing and alignment between cards.

### CardItem

- This is the child component of Card.
- Works very similar to the list items of list.
- Takes input such as: Text, Button, Image, Thumbnail, Icon.
- Card takes any number of CardItem.

#### Replacing Component

- React Native [View](https://facebook.github.io/react-native/docs/view.html) for Card
- React Native [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html) / View for CardItem

#### Configuration for Card

| Property    | Default  | Option             | Description                                                                     |
| ----------- | -------- | ------------------ | ------------------------------------------------------------------------------- |
| transparent | -        | -                  | Removes card shadow from iOS and elevation from Android                         |
| dataArray   | Array    | user-defined array | Array of data chunks to render iteratively.                                     |
| renderRow   | Function | -                  | Callback which takes a chunk of data from dataArray and returns as a component. |

#### Configuration for CardItem

| Property | Default | Option  |                                              Description                                               |
| :------: | :-----: | :-----: | :----------------------------------------------------------------------------------------------------: |
|  header  |    -    |    -    |                                   Displays text as header for cards                                    |
| cardBody |    -    |    -    | Defines section for body of card. The child components are rendered with proper spacing and alignment. |
|  footer  |    -    |    -    |                                   Displays text as footer for cards                                    |
|  button  |    -    |    -    |                                  To navigate on click of a card item.                                  |
| bordered |  false  | boolean |                                      Adds border to the cardItems                                      |
|  first   |    -    |    -    |                        First CardItem, use in case of custom Card BorderRadius                         |
|   last   |    -    |    -    |                         Last CardItem, use in case of custom Card BorderRadius                         |

#### Card Header and Footer

To add an optional header and/or footer within a card, include header / footer prop with the CardItem.

Card Header: Include `header` prop with first instance of CardItem within Card.
Card Footer: Include `footer` prop with last instance of CardItem within Card.

Syntax:

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
```

#### CardItem Bordered

Include bordered prop with `<CardItem>` to have borderBottom for card item.
Syntax

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Tigerbud is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
```

#### CardItem Button

Include button prop with `<CardItem>` to achieve onClick function with card items.

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';
export default class CardItemButton extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem
              header
              button
              onPress={() => alert('This is Card Header')}>
              <Text>TigerBud</Text>
            </CardItem>
            <CardItem button onPress={() => alert('This is Card Body')}>
              <Body>
                <Text>Click on any carditem</Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              onPress={() => alert('This is Card Footer')}>
              <Text>TigerBud</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
```

#### Card Transparent

A transparent card can be created using `transparent` props with`<CardItem>`.
Syntax:

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';
export default class CardTransparentExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  This is just a transparent card with some text to boot.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
```

#### Card List

Include `CardItem` subsequently within `Card` to create a card with lists.
Syntax:

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
} from 'native-base';
export default class CardListExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
```

#### Card Image

Include image with `CardItem` within Card along with some text before and after image to create a card with lists.

Syntax:

```javascript
import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{uri: 'Image URL'}}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
```

#### Card Showcase

Card Showcase is further customization of Card Image. It uses several different items.

Begins with the Card List component, which is similar to our List Avatar.
Make use of Left, Body and Right components to align the content of your Card header.
To mixup Image with other NativeBase components in a single CardItem, include the content within Body component.

Syntax:

```javascript
import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{uri: 'Image URL'}}
                  style={{height: 200, width: 200, flex: 1}}
                />
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
```

### Check Box

Check Box allows the user to select a number of items from a set of choices.
Replacing Component: React Native [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html)

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
} from 'native-base';
export default class CheckBoxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green" />
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
Copy;
```

#### Configuration

|   Property    | Default |         Option         |                             Description                             |
| :-----------: | :-----: | :--------------------: | :-----------------------------------------------------------------: |
|    checked    |  false  |        boolean         |             State value of an item from set of choices              |
|     color     |    -    |      user-defined      |                    Background color of checkbox                     |
|    onPress    |    -    |           -            | Handler to be called when the user selects / unselects the checkbox |
| subtitleColor |  color  | Font color of subtitle |                               #8e8e93                               |

### Date Picker

Date Picker allows the user to select a date from a time range.

```javascript
import React, {Component} from 'react';
import {Container, Header, Content, DatePicker, Text} from 'native-base';
export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Select date"
            textStyle={{color: 'green'}}
            placeHolderTextStyle={{color: '#d3d3d3'}}
            onDateChange={this.setDate}
            disabled={false}
          />
          <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text>
        </Content>
      </Container>
    );
  }
}
```

#### Configuration

|       Property        | Default |                        Option                        |                           Description                           |
| :-------------------: | :-----: | :--------------------------------------------------: | :-------------------------------------------------------------: |
|      defaultDate      |    -    |                     Date Object                      |                  Sets default date in calendar                  |
|      minimumDate      |    -    |                     Date Object                      |          Sets minimum date that can be set in calendar          |
|      maximumDate      |    -    |                     Date Object                      |          Sets maximum date that can be set in calendar          |
|      androidMode      |    -    |                        string                        |    can take either of values 'default','calendar','spinner'     |
|     animationType     |    -    |                        string                        |         can take either of values 'fade','slide','none'         |
|       disabled        |  true   |                       boolean                        |           Prevent user from making selection of date            |
| supportedOrientations |    -    | Portrait, Landscape, Landscape-left, Landscape-right | Allows the modal to rotate to any of the specified orientations |

### Deck Swiper

Looking at data one piece at a time is more efficient when you consider people you might want to date, restaurants, streaming music, or local events you might want to check out.
Deck Swiper helps you evaluate one option at a time, instead of selecting from a set of options.
Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html)

```javascript
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./img/swiper-1.png'),
  },
  .  .  .
];
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}
```

#### Configuration

|   Property   | Default  |       Option        |                                              Description                                               |
| :----------: | :------: | :-----------------: | :----------------------------------------------------------------------------------------------------: |
|  dataSource  |    -     | User defined object |                                         Chunk of data(object)                                          |
| renderEmpty  | Function |          -          | Callback that is called when all the cards are swiped and dataSource is empty and returns a component. |
|  renderItem  | Function |          -          |                     Callback which takes a chunk of data and returns a component.                      |
|  renderTop   | Function |          -          |                 Callback which takes a chunk of data and returns top layer component.                  |
| renderBottom | Function |          -          |                Callback which takes a chunk of data and returns bottom layer component.                |
|   looping    |   true   |       boolean       |                                         Loop through the data                                          |
| onSwipeRight | Function |          -          |                         Callback that is called when the Card is swiped Right                          |
| onSwipeLeft  | Function |          -          |                          Callback that is called when the Card is swiped Left                          |

#### Advanced Deck Swiper

Swipe Deck with callback function.

```javascript
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./img/swiper-1.png'),
  },
  .  .  .
];
export default class DeckSwiperAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            }
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
            <Text>Swipe Right</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
```

### FABs

FABs (Floating Action Buttons) are used for a special type of promoted action. They are distinguished by a circled icon floating above the UI in a fixed position and have special motion behaviors. When clicked, it may contain more related actions.
Replacing Component: [React Native Animated](https://facebook.github.io/react-native/docs/animated.html)

Note: Always prefer to place FAB inside `<Container/>`. Placing FAB inside `<Content/>` is not encouraged, as `<Content/>` is an implementation of `<ScrollView/>`.

```javascript
import React, {Component} from 'react';
import {Container, Header, View, Button, Icon, Fab} from 'native-base';
export default class FABExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <Container>
        <Header />
        <View style={{flex: 1}}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{backgroundColor: '#5067FF'}}
            position="bottomRight"
            onPress={() => this.setState({active: !this.state.active})}>
            <Icon name="share" />
            <Button style={{backgroundColor: '#34A34F'}}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{backgroundColor: '#3B5998'}}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{backgroundColor: '#DD5144'}}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}
```

|    Property    |   Default   |                  Option                   |                   Description                   |
| :------------: | :---------: | :---------------------------------------: | :---------------------------------------------: |
|     active     |    true     |                  boolean                  |              Toggle status of FAB               |
|   direction    |     up      |           up, down, left, right           | Direction of buttons that popup on click of FAB |
|    position    | bottomRight | topLeft, topRight bottomLeft, bottomRight |            Position of FAB on screen            |
| containerStyle |      -      |               user-defined                |          Padding options to render FAB          |

#### Multiple FABs

```javascript
import React, { Component } from 'react';
import { Container, Header, View, Fab, Button, Icon } from 'native-base';
​export default class FABMultipleExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <Container>
        <Header />
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
              ....
            </Fab>
          <Fab direction="left" position="topRight">
            ....
          </Fab>
          <Fab direction="down" position="topLeft">
            ....
          </Fab>
          <Fab direction="right" position="bottomLeft">
            ....
          </Fab>
        </View>
      </Container>
    );
  }
}
```

### Footer Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.
Replacing Component: React Native View

Contents

- [Footer with only icons](Icon-Footer)
- [Footer with icons and text](Icon-Footer-with-Text)
- [Footer Badge](Footer-with-badge)

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
export default class FooterTabsExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
```

| Property | Default | Option  |                                                                               Description                                                                               |
| :------: | :-----: | :-----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  active  |  true   | boolean |                                           This is button prop (applicable with FooterTab only). Sets a Footer Button active.                                            |
|  badge   |  true   | boolean |                                           This is button prop (applicable with FooterTab only). Set to true if using Badges.                                            |
| vertical |  true   | boolean | This is button prop (applicable with FooterTab only). Use this prop to vertically align footer elements like icons and text. Necessary when using Badge in Footer Tabs. |

#### Icon Footer

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
export default class FooterTabsIconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
```

#### Icon Footer with Text

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
```

#### Footer with badge

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
} from 'native-base';
export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge>
                <Text>51</Text>
              </Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
```

### Form

NativeBase makes use of List to design Forms that include group of related input components. Include any combination of NativeBase components to make up your form.
Input is a NativeBase component built on top of React Native's TextInput. A foundational component for inputting text into the app via a keyboard. Item component wrapper around it that apply specific styles.

Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.

**Note: Form in NativeBase is just a wrapper around the inputs and hence has no onSubmit function.**

**When using floatingLabel, use getRef to get the reference of `<Input/>` component. Always wrap floatingLabel component with `<Form/>`.**

Replacing Component:

Form: React Native [View](https://facebook.github.io/react-native/docs/view.html)
Item: React Native [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html)
Input: React Native [TextInput](https://facebook.github.io/react-native/docs/textinput.html)
Label: React Native [Text](https://facebook.github.io/react-native/docs/text.html)

Contents:
[Fixed Label](Fixed-Label)
[Inline Label](Inline-Label)
[Floating Label](Floating-Label)
[Stacked Label](Stacked-Label)
[Picker Input](Picker-Input)
[Regular Textbox](Regular-Textbox)
[Underlined Textbox](Underlined-Textbox)
[Rounded Textbox](Rounded-Textbox)
[Icon Textbox](Icon-Textbox)
[Success Input Textbox](Success-Input-Textbox)
[Error Input Textbox](Error-Input-Textbox)
[Disabled Textbox](Disabled-Textbox)
[Textarea](Textarea)

```javascript
import React, {Component} from 'react';
import {Container, Header, Content, Form, Item, Input} from 'native-base';
export default class FormExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
```

|       Property       | Default | Option  |                                                           Description                                                           |
| :------------------: | :-----: | :-----: | :-----------------------------------------------------------------------------------------------------------------------------: |
|      fixedLabel      |  true   | boolean |                           Label is fixed to the left of Input and does not hide when text is entered.                           |
|    floatingLabel     |  true   | boolean |                  Label that animates upward when input is selected and animates downward when input is erased.                  |
|     inlineLabel      |    -    | boolean | Label placed to the left of input element and does not hide when text is entered. This can also be used along with placeholder. |
|     stackedLabel     |    -    |    -    |       Places the label on top of input element which appears like a stack. This can also be used along with placeholder.        |
|       bordered       |    -    |    -    |                                                Includes border with the textbox                                                 |
|       rounded        |    -    |    -    |                                            Includes rounded border with the textbox.                                            |
|       regular        |    -    |    -    |                                          Includes rectangular border with the textbox.                                          |
|      underline       |  true   |    -    |                                           Includes underline border with the textbox                                            |
|       disabled       |    -    |    -    |                                                     Disables inputting data                                                     |
|   placeholderLabel   |    -    |    -    |                           Renders the same way the TextInput does with the form styling of NativeBase                           |
|     placeholder      |    -    |    -    |                                        String that renders before text input is entered                                         |
| placeholderTextColor |    -    |    -    |                                                 Color of the Input placeholder                                                  |
|         last         |    -    |    -    |                                                  Styles last Item of the Form                                                   |
|        error         |    -    |    -    |                                            Border color of textbox for invalid input                                            |
|       success        |    -    |    -    |                                             Border color of textbox for valid input                                             |
|        picker        |    -    |    -    |                                                 Styles picker field with Input                                                  |

#### Fixed Label

The fixedLabel property creates an Input component, whose Label is fixed at the left of Input and does not hide when text is entered. The input aligns on the same position, regardless of the length of the label. It can be used with placeholder as well.

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
export default class FixedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
```

#### Inline Label

The inlineLabel property creates an Input component, whose Label is in-line with Input and does not hide when text is entered. It can be used with placeholder as well.

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
export default class InlineLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
```

#### Floating Label

The floatingLabel property creates an Input component, whose Label animates upward when input is selected and animates downward when input is erased.

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
```

#### Stacked Label

The stackedLabel property creates an Input component that places the label on top of input element which appears like a stack. This can also be used along with placeholder.

```javascript
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
export default class StackedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
```

#### Picker Input

Include picker prop with `<Item>` to have picker type of input field.

```javascript
import React, {Component} from 'react';
import {Container, Header, Content, Form, Item, Picker} from 'native-base';
export default class PickerInputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value,
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}>
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
```

#### Regular Textbox

To use the regular textbox which is rectangular in shape, include the regular prop with Item.

```javascript
import React, {Component} from 'react';
import {Container, Header, Content, Input, Item} from 'native-base';
export default class RegularTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item regular>
            <Input placeholder="Regular Textbox" />
          </Item>
        </Content>
      </Container>
    );
  }
}
```

## Navigation

...

[Documentation for Navigation](#navigation.md)

## Customize

...

[Documentation for Customized Theme](#customizing.md)
or check [nativeBase documentation](https://docs.nativebase.io/Customize.html#Customize)
