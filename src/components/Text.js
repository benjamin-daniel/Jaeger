import React, {ReactNode} from 'react';
import {createText} from '@shopify/restyle';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

const _Text = (props) => <RNText {...props} />;

export const Text = createText(_Text);

Text.defaultProps = {
  variant: 'bodyText',
  // color: 'bodyText',
  // fontFamily: 'Telex-Regular',
};
