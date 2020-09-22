import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {Input, Text, Button} from 'components';

import theme from 'constants/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <Input />
          <Text>Omo</Text>
          <Button text="hey" />
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default App;
