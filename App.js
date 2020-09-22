import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {Input, Text} from 'components';

import theme from 'constants/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <Input />
          <Text>Omo</Text>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default App;
