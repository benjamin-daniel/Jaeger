import React from 'react';

import {StyleSheet} from 'react-native';
import {Button} from 'components';

import Swiper from 'react-native-web-swiper';
import OnBoarding1 from 'assets/logos/Onboarding1.svg';
import OnBoarding2 from 'assets/logos/Onboarding2.svg';
import OnBoarding3 from 'assets/logos/Onboarding3.svg';
import OnBoarding4 from 'assets/logos/Onboarding4.svg';
import Whiteboard from 'assets/logos/Whiteboard.svg';
import {palette} from 'constants/theme';

import {Box, Text} from 'components';
const OnBoardContainer = ({children}) => (
  <Box flex={1} alignItems="center" justifyContent="center">
    {children}
  </Box>
);

export const OnBoarding = () => {
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
              <Text fontSize={20}>Enjoy the App</Text>
            </Box>
          </OnBoardContainer>
        </Swiper>
      </Box>

      <Box marginVertical="l" marginBottom="xl">
        <Button text="Become a Jaeger" />
      </Box>
    </Box>
  );
};
