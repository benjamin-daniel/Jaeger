import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {OnBoarding} from 'screens/OnBoarding';
import {Login} from 'screens/Login';

const AuthNav = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthNav.Navigator screenOptions={{headerShown: false}}>
      <AuthNav.Screen name="Login" component={Login} />
      <AuthNav.Screen name="OnBoarding" component={OnBoarding} />
    </AuthNav.Navigator>
  );
};

export default AuthStack;
