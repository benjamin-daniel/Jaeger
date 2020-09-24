import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import MainNavigator from 'navigation/Main';
import {StateProvider} from 'navigation/authContent';

import theme from 'constants/theme';

export const Container = ({children}) => {
  return (
    <>
      <StateProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StateProvider>
    </>
  );
};

const App = () => {
  return (
    <Container>
      <MainNavigator />
    </Container>
  );
};

export default App;
