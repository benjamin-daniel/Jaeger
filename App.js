import React from 'react';
import {Text} from 'react-native';
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

export default App;
