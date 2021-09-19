# Theme variables Cheat sheet

Cheatsheet uses values from `theme/variables/platform.js`. Check the [ThemeVariables documentation](https://docs.nativebase.io/docs/ThemeVariables.html).

## Brand colors

|   Variable   | Type  |     Description     |   iOS   | Android |
| :----------: | :---: | :-----------------: | :-----: | :-----: |
| brandPrimary | color | Brand primary color | #007aff | #3F51B5 |
|  brandInfo   | color |  Brand info color   | #62B1F6 | #62B1F6 |
| brandSuccess | color | Brand success color | #5cb85c | #5cb85c |
| brandDanger  | color | Brand danger color  | #d9534f | #d9534f |
| brandWarning | color | Brand warning color | #f0ad4e | #f0ad4e |
|  brandDark   | color |  Brand dark color   |  #000   |  #000   |
|  brandLight  | color |  Brand light color  | #f4f4f4 | #f4f4f4 |

## Accordion

|       Variable       | Type  |           Description           |   iOS   | Android |
| :------------------: | :---: | :-----------------------------: | :-----: | :-----: |
|     headerStyle      | color |          Header color           | #edebed | #edebed |
|      iconStyle       | color |     Icon color when closed      |  #000   |  #000   |
|     contentStyle     | color |          Content color          | #f5f4f5 | #f5f4f5 |
|  expandedIconStyle   | color |      Icon color when open       |  #000   |  #000   |
| accordionBorderColor | color | Header and Content border color | #d3d3d3 | #d3d3d3 |

## Badge

|  Variable  | Type  |      Description       |   iOS   | Android |
| :--------: | :---: | :--------------------: | :-----: | :-----: |
|  badgeBg   | color |    Badge text color    | #ed1727 | #ed1727 |
| badgeColor | color | Badge background color |  #fff   |  #fff   |

## Button

|        Variable         |    Type     |           Description            |   iOS   |    Android    |
| :---------------------: | :---------: | :------------------------------: | :-----: | :-----------: |
|      btnFontFamily      | font family |    Font family of button text    | System  | Roboto_medium |
|      btnDisabledBg      |    color    | Disabled button background color | #b5b5b5 |    #b5b5b5    |
|      buttonPadding      |   number    |          Button padding          |    6    |       6       |
| btnUppercaseAndroidText |   boolean   |    UpperCase Text in Android     |    -    |     true      |

## Card

|     Variable     |  Type  |            Description            | iOS  | Android |
| :--------------: | :----: | :-------------------------------: | :--: | :-----: |
|  cardDefaultBg   | color  |  Background color for card item   | #fff |  #fff   |
| cardBorderColor  | color  |       Border color for card       | #ccc |  #ccc   |
| cardBorderRadius | number |           Border Radius           |  2   |    2    |
| cardItemPadding  | number | Padding between Card and CardItem |  10  |   12    |

## CheckBox

|       Variable        |  Type  |          Description          |    iOS    | Android |
| :-------------------: | :----: | :---------------------------: | :-------: | :-----: |
|    CheckboxRadius     | number |        Checkbox radius        |    13     |    0    |
|  CheckboxBorderWidth  | number |     Checkbox border width     |     1     |    2    |
|  CheckboxPaddingLeft  | number |     Checkbox left padding     |     4     |    2    |
| CheckboxPaddingBottom | number |    Checkbox bottom padding    |     0     |    5    |
|   CheckboxIconSize    | number |     Icon size of checkbox     |    21     |   16    |
| CheckboxIconMarginTop | number | Top margin for checkbox icon  | undefined |    1    |
|   CheckboxFontSize    | number |     Size of checkbox font     |  23/0.9   |   17    |
|    DefaultFontSize    | number |       Default Font size       |    17     |   17    |
|    checkboxBgColor    | color  | Background color for checkbox |  #039BE5  | #039BE5 |
|     checkboxSize      | number |       Size of checkbox        |    20     |   20    |
|   checkboxTickColor   | color  |      Checkbox tick color      |   #fff    |  #fff   |

## Container

|     Variable     | Type  |       Description        | iOS  | Android |
| :--------------: | :---: | :----------------------: | :--: | :-----: |
| containerBgColor | color | Default background color | #fff |  #fff   |

## Date Picker

|      Variable       | Type  |        Description        |     iOS     |   Android   |
| :-----------------: | :---: | :-----------------------: | :---------: | :---------: |
| datePickerTextColor | color |    date display color     |    #000     |    #000     |
|    datePickerBg     | color | Background color of modal | transparent | transparent |

## Font

|   Variable   |    Type     |   Description    |  iOS   | Android |
| :----------: | :---------: | :--------------: | :----: | :-----: |
|  fontFamily  | font family | text font family | System | Roboto  |
| fontSizeBase |   number    |  text font size  |   15   |   15    |

## Footer

|      Variable       |  Type  |         Description         |   iOS   | Android |
| :-----------------: | :----: | :-------------------------: | :-----: | :-----: |
|    footerHeight     | number |      Height of footer       |  55/89  |   55    |
|   footerDefaultBg   | color  | Background color for footer | #F8F8F8 | #F8F8F8 |
| footerPaddingBottom | number |  Bottom padding for footer  |    0    |    0    |

## Footer Tab

|        Variable        |  Type  |          Description           |   iOS   | Android |
| :--------------------: | :----: | :----------------------------: | :-----: | :-----: |
|    tabBarTextColor     | color  |       Text color of tab        | #6b6b6b | #b3c7f9 |
|     tabBarTextSize     | number |        Font size of tab        |   14    |   11    |
|       activeTab        | color  |               -                | #007aff |  #fff   |
| sTabBarActiveTextColor | color  |               -                | #007aff | #007aff |
| tabBarActiveTextColor  | color  |    Text color of active tab    | #007aff |  #fff   |
|    tabActiveBgColor    | color  | Background color of active tab | #cde1f9 | #3F51B5 |

## Header

|       Variable        |  Type  |           Description           |     iOS      |    Android    |
| :-------------------: | :----: | :-----------------------------: | :----------: | :-----------: |
|    toolbarBtnColor    | color  |     Button color in header      |   #F8F8F8    |    #3F51B5    |
|   toolbarDefaultBg    | color  |   Background color for header   |   #F8F8F8    |    #F8F8F8    |
|     toolbarHeight     | number |        Height of header         |    64/89     |      56       |
| toolbarSearchIconSize | number | Icon size of header search icon |      20      |      23       |
|   toolbarInputColor   | number |      Input color of header      |   #CECDD2    |     #fff      |
|    searchBarHeight    | number |      Height of search bar       |      30      |      40       |
| searchBarInputHeight  | number |   Height of search bar input    |      30      |      50       |
|  toolbarBtnTextColor  | color  |   Button text color of header   |   #007aff    |     #fff      |
| toolbarDefaultBorder  | color  |     Border color of header      |   #a7a6ab    |    #3F51B5    |
|     iosStatusbar      | string |     Theme of iOS status bar     | dark-content | light-content |

## Icon

|    Variable    |  Type  | Description  |   iOS    | Android  |
| :------------: | :----: | :----------: | :------: | :------: |
|   iconFamily   | string | Icon Family  | Ionicons | Ionicons |
|  iconFontSize  | number | Size of icon |    30    |    28    |
| iconHeaderSize | number |      -       |    33    |    24    |

## Input

|        Variable         |  Type  |              Description               |   iOS   | Android |
| :---------------------: | :----: | :------------------------------------: | :-----: | :-----: |
|      inputFontSize      | number |        Font size of input text         |   17    |   17    |
|    inputBorderColor     | color  |          Textbox border color          | #D9D5DC | #D9D5DC |
| inputSuccessBorderColor | color  | Textbox border color with success prop | #2b8339 | #2b8339 |
|  inputErrorBorderColor  | color  |  Textbox border color with error prop  | #ed2f2f | #ed2f2f |
|     inputHeightBase     | number |            Height of input             |   50    |   50    |

## Line height

|   Variable    |  Type  |          Description          | iOS | Android |
| :-----------: | :----: | :---------------------------: | :-: | :-----: |
| btnLineHeight | number | Line height of text in button | 19  |   19    |
| lineHeightH1  | number |       Line height of H1       | 32  |   32    |
| lineHeightH2  | number |       Line height of H2       | 27  |   27    |
| lineHeightH3  | number |       Line height of H3       | 22  |   22    |
|  lineHeight   | number |      Default line height      | 20  |   24    |

## List

|       Variable       | Type  |                    Description                    |     iOS     |   Android   |
| :------------------: | :---: | :-----------------------------------------------: | :---------: | :---------: |
|        listBg        | color |             Background color of list              | transparent | transparent |
|   listBorderColor    | color |               Border color of list                |   #c9c9c9   |   #c9c9c9   |
|    listDividerBg     | color |               Divider color of list               |   #f4f4f4   |   #f4f4f4   |
| listBtnUnderlayColor | color |                         -                         |    #DDD     |    #DDD     |
|   listItemPadding    | color |               Padding for list item               |     10      |     12      |
|    listNoteColor     | color |                Color of note text                 |   #808080   |   #808080   |
|     listNoteSize     | color |                 Size of note text                 |     13      |     13      |
|   listItemSelected   | color | Color of Text and Icons when ListItem is selected |     13      |     13      |

## Radio Button

|         Variable          |  Type  |          Description           | iOS | Android |
| :-----------------------: | :----: | :----------------------------: | :-: | :-----: |
|       radioBtnSize        | number |      Size of radio button      | 25  |   23    |
| radioSelectedColorAndroid | color  | Color of selected radio button |  -  | #3F51B5 |
|    radioBtnLineHeight     | number |  Line height of radio button   | 29  |   24    |

## Segment

|           Variable           | Type  |            Description             |   iOS   | Android |
| :--------------------------: | :---: | :--------------------------------: | :-----: | :-----: |
|    segmentBackgroundColor    | color |    Background color of segment     | #F8F8F8 | #3F51B5 |
| segmentActiveBackgroundColor | color | Background color of active segment | #007aff |  #fff   |
|       segmentTextColor       | color |       Color of segment text        | #007aff |  #fff   |
|    segmentActiveTextColor    | color |    Color of active segment text    |  #fff   | #3F51B5 |
|      segmentBorderColor      | color |      Color of segment border       | #007aff |  #fff   |
|    segmentBorderColorMain    | color |                 -                  | #a7a6ab | #3F51B5 |

## Spinner

|      Variable       | Type  |        Description        |   iOS   | Android |
| :-----------------: | :---: | :-----------------------: | :-----: | :-----: |
| defaultSpinnerColor | color | Default color for spinner | #45D56E | #45D56E |
| inverseSpinnerColor | color | Inverse color for spinner | #1A191B | #1A191B |

## Tab

|          Variable          | Type  |           Description            |   iOS   | Android |
| :------------------------: | :---: | :------------------------------: | :-----: | :-----: |
|        tabDefaultBg        | color | Default background color for tab | #F8F8F8 | #3F51B5 |
|     topTabBarTextColor     | color |          Tab text color          | #6b6b6b | #b3c7f9 |
|  topTabBarActiveTextColor  | color |      Active tab text color       | #007aff |  #fff   |
|    topTabBarBorderColor    | color |       Border color for tab       | #a7a6ab |  #fff   |
| topTabBarActiveBorderColor | color |   Border color for active tab    | #007aff |  #fff   |

## Tabs

|  Variable   |  Type  |            Description             |   iOS   | Android |
| :---------: | :----: | :--------------------------------: | :-----: | :-----: |
| tabBgColor  | color  | Background color for tab container | #F8F8F8 | #F8F8F8 |
| tabFontSize | number |          Font size of tab          |   15    |   15    |

## Text

|     Variable     |  Type  |      Description       |   iOS    | Android  |
| :--------------: | :----: | :--------------------: | :------: | :------: |
|    textColor     | color  |       Text color       | Ionicons | Ionicons |
| inverseTextColor | color  |   Inverse text color   |   #fff   |   #fff   |
|   noteFontSize   | number | Font size of note text |    14    |    14    |

## Title

|     Variable     |  Type  |      Description       |   iOS   |    Android    |
| :--------------: | :----: | :--------------------: | :-----: | :-----------: |
| titleFontfamily  | string |  Font family of title  | System  | Roboto_medium |
|  titleFontSize   | number |   Font size of title   |   17    |      19       |
| subTitleFontSize | number | Font size of subtitle  |   12    |      14       |
|  subtitleColor   | color  | Font color of subtitle | #8e8e93 |     #FFF      |
|  titleFontColor  | color  |  Font color of title   |  #000   |     #FFF      |
