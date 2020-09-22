import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import theme from 'constants/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Text>Omo</Text>
      </ThemeProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
