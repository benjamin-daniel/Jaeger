import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {Home} from 'screens/Home';

const AppNav = createStackNavigator();

const AppStack = () => {
  return (
    <AppNav.Navigator>
      <AppNav.Screen name="Home" component={Home} />
    </AppNav.Navigator>
  );
};

export default AppStack;
