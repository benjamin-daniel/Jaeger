import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {OnBoarding} from 'screens/OnBoarding';
import {Login} from 'screens/Login';
import {Register} from 'screens/Register';

const AuthNav = createStackNavigator();

const AuthStack = ({Onboarded = false}) => {
  return (
    <AuthNav.Navigator screenOptions={{headerShown: false}}>
      {!Onboarded ? (
        <AuthNav.Screen name="OnBoarding" component={OnBoarding} />
      ) : (
        <>
          <AuthNav.Screen name="Register" component={Register} />
          <AuthNav.Screen name="Login" component={Login} />
        </>
      )}
    </AuthNav.Navigator>
  );
};

export default AuthStack;
