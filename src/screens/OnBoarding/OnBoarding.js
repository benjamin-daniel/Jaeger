import React, {useCallback} from 'react';
import Swiper from 'react-native-web-swiper';
import AsyncStorage from '@react-native-community/async-storage';

import {Box, Text, Button} from 'components';
import {palette} from 'constants/theme';
import OnBoarding1 from 'assets/logos/Onboarding1.svg';
import OnBoarding2 from 'assets/logos/Onboarding2.svg';
import OnBoarding3 from 'assets/logos/Onboarding3.svg';
import OnBoarding4 from 'assets/logos/Onboarding4.svg';
// import Whiteboard from 'assets/logos/Whiteboard.svg';
const ONBOARDED_KEY = 'ONBOARDED_KEY';

const OnBoardContainer = ({children}) => (
  <Box flex={1} alignItems="center" justifyContent="center">
    {children}
  </Box>
);

export const OnBoarding = ({navigation}) => {
  const toLogin = useCallback(() => {
    // TODO: handle all our app permission stuff
    const setOnboarding = async () => {
      await AsyncStorage.setItem(ONBOARDED_KEY, '1');
    };

    try {
      setOnboarding();
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    } catch (error) {
      alert('Something went wrong');
    }
  }, [navigation]);

  return (
    <Box flex={1} paddingHorizontal="m" backgroundColor="mainBackground">
      <Box position="relative" flex={1}>
        <Swiper
          controlsProps={{
            dotActiveStyle: {backgroundColor: palette.blue},
          }}>
          <OnBoardContainer>
            <OnBoarding1 />
            <Box marginVertical="m">
              <Text fontSize={20}>Do your thing, chicken wing.</Text>
            </Box>
          </OnBoardContainer>
          <OnBoardContainer>
            <OnBoarding2 />
            <Box marginVertical="m">
              <Text fontSize={20}>Abeg give me job</Text>
            </Box>
          </OnBoardContainer>
          <OnBoardContainer>
            <OnBoarding3 />
            <Box marginVertical="m">
              <Text fontSize={20}>Leemao.</Text>
            </Box>
          </OnBoardContainer>
          <OnBoardContainer>
            <OnBoarding4 />
            <Box marginVertical="m">
              <Text fontSize={20} textAlign="center">
                {'I dey Serious.\nBut Enjoy the App'}
              </Text>
            </Box>
          </OnBoardContainer>
        </Swiper>
      </Box>

      <Box marginVertical="l" marginBottom="xl">
        <Button text="Become a Jaeger" onPress={toLogin} />
      </Box>
    </Box>
  );
};
