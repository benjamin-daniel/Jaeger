# Jaeger
  Patricia Assesment test

# Note: Building for android will most likely fail as it wasn't considered during development.

# Installation:
  Install Packages
  
  ```shell
  yarn install
  ```
  
  Pod install and Build app
  ```shell
  yarn build-ios
  ```
  This will do (cd ios && pod install && cd .. && yarn ios)
  
  

# Form Validation: 
  Validation was handled with Formik and Yup which is a great duo for handling react (native) forms. You can check out this article that was written by me on this topic [React Native Forms With Formik](https://dev.to/benjamindaniel/react-native-forms-with-formik-804)
  
# Navigation: 
  Navigation was handled with React Native navigation version 5 and it's associated libraries (all version 5).
  
# Illustrations: 
  This project heavily relied on the illustrations by Pablo Stanley in his [Humaaans](http://humaaans.com) project and [Blush](https://blush.design). These illustrations were rendered in svg format to save space and loadtime(relative) using react native svg.
  
# Theming and UI Components
  Theming and building of UI components were done with the @shopify/restyle library (which I highly recommend 😉), this library was used to build most of the components and screens.
