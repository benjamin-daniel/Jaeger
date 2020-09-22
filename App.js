import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {Input, Text, Button} from 'components';
import Feather from 'react-native-vector-icons/Feather';

import theme from 'constants/theme';

export const Container = ({children}) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

const App = () => {
  return (
    <Container>
      <SafeAreaView>
        <Input />
        <Text>Omo</Text>
        <Button text="hey" />
        <Feather size={20} name="eye" />
        <Text>hsey</Text>
      </SafeAreaView>
    </Container>
  );
};

export default App;
