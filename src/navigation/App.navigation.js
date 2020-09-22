import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {OnBoarding} from 'screens/OnBoarding';

const AppNav = createStackNavigator();

const AppStack = () => {
  return (
    <AppNav.Navigator>
      <AppNav.Screen name="Home" component={OnBoarding} />
    </AppNav.Navigator>
  );
};

export default AppStack;
