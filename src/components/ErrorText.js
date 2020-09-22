import React from 'react';
import {Text} from './Text';

export const ErrorText = ({error, touched, ErrorTextStyles}) => (
  <>
    {touched && error && (
      <Text fontSize={12} color="error" style={[ErrorTextStyles]}>
        {error}
      </Text>
    )}
  </>
);
