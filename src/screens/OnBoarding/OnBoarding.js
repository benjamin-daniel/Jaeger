import React from 'react';

import Swiper from 'react-native-web-swiper';

import {Box, Text} from 'components';
const OnBoardContainer = ({children}: {children?: React.FC}) => (
  <Box flex={1} alignItems="center" justifyContent="center">
    {children}
  </Box>
);

export const OnBoarding = () => {
  return (
    <Box flex={1}>
      <Text>Hey</Text>
      <Swiper>
        <OnBoardContainer>
          <Text>hey</Text>
        </OnBoardContainer>
        <OnBoardContainer>
          <Text>hey</Text>
        </OnBoardContainer>
      </Swiper>
    </Box>
  );
};
