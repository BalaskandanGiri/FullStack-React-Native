# FullStack-React-Native


## Commands

For the development of our application, we will be using **Expo**. Expo is a platform that eases the setup, development, building, and deployment of React Native applications

>`npm install --global expo-cli `

Init native project

>`expo init rate-repository-app --template expo-template-blank@sdk-40`

Init - interactive CLI with project options

>`expo init`

Setting up eslint

>`npm install --save-dev eslint babel-eslint eslint-plugin-react`


## Learnings

Core react components are the building blocks using which react native app is built.
1. `<Text>`
2. `<View>` - Similar to div
3. `<TextInput>` - Similar to input        
4. `<Pressable>` - Similar to button

### Styling
Import statement
`import { Text, View, StyleSheet } from 'react-native';`
Basic example
```
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: 'blue',
    fontSize: 24,
    fontWeight: '700',
  },
});
```
### Themes
Themes is a concept to have consitent styling througout the app.
[Themes](https://fullstackopen.com/en/part10/react_native_basics#consistent-user-interface-with-theming)

### Flex-Layout
Flex-layout is a layout manager for React Native apps.


**Important things in Flex-layout**
`flexDirection` property controls the direction in which the flex items are laid out within the container. Possible values for this property are row, row-reverse, column (default value) and column-reverse. Flex direction row will lay out the flex items from left to right, whereas column from top to bottom. *-reverse directions will just reverse the order of the flex items.

`justifyContent` property controls the alignment of flex items along the main axis (defined by the flexDirection property). Possible values for this property are flex-start (default value), flex-end, center, space-between, space-around and space-evenly.

`alignItems` property does the same as justifyContent but for the opposite axis. Possible values for this property are flex-start, flex-end, center, baseline and stretch (default value).

   