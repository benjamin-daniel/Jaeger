import React from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {Box} from 'components';

import AppNav from './App.navigation';
import AuthNav from './Auth.navigation';

import {store} from './authContent';

const ONBOARDED_KEY = 'ONBOARDED_KEY';

const Main = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [Onboarded, setOnboarding] = React.useState(false);
  const {dispatch, state} = React.useContext(store);
  const signedIn = state.authenticated;

  React.useEffect(() => {
    const getState = async () => {
      try {
        const boarded = await AsyncStorage.getItem(ONBOARDED_KEY);
        setOnboarding(boarded);
      } catch (error) {
        //   log error
        console.log({error});
      } finally {
        // dead splashscreen
        setIsReady(true);
      }
    };
    getState();
  }, [isReady]);
  if (!isReady) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }
  return (
    <NavigationContainer>
      {signedIn ? <AppNav /> : <AuthNav {...{Onboarded}} />}
    </NavigationContainer>
  );
};

export default Main;
