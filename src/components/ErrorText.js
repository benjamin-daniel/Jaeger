import React from 'react';
import {Text} from './Text';

export const ErrorText = ({error, touched, ErrorTextStyles}) => {
  const condition = touched && error;
  if (!condition) {
    return null;
  } else {
    return (
      <>
        <Text fontSize={12} color="error" style={ErrorTextStyles}>
          {error}
        </Text>
      </>
    );
  }
};
