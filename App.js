import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import MainNavigator from 'navigation/Main';

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
      <MainNavigator />
    </Container>
  );
};

export default App;
