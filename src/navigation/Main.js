import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import AppNav from './App.navigation';
import AuthNav from './Auth.navigation';

const Main = () => {
  const signedIn = false;
  return (
    <NavigationContainer>
      {signedIn ? <AppNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default Main;
