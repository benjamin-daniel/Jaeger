import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Platform,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {Text} from './Text';
import {Box} from './Box';
import {palette} from 'constants/theme';

export const Button = ({
  disabled,
  loading,
  variant = 'primary',
  text,
  onPress,
  color: buttonColorName = palette.white,
  textVariant = 'button',
}) => {
  const theme = useTheme();
  const variantProps = theme.buttonVariants[variant];
  const disabledProps = disabled ? variantProps.disabled || {} : {};
  const themedStyles = {...variantProps, ...disabledProps};
  const {
    fontSize,
    fontWeight,
    fontFamily,
    color,
    borderWidth,
    height,
  } = themedStyles;
  const textColor = themedStyles.textColor;
  const buttonColor = buttonColorName && theme.colors[buttonColorName];

  const onPressHandler = loading ? () => {} : onPress;
  const content = (
    <Box
      borderRadius={5}
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundColor: buttonColor || color,
        minHeight: height,
        borderWidth,
        borderColor: buttonColor,
      }}
      paddingHorizontal="m"
      flexDirection="row">
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <>
          <Text
            variant={textVariant}
            style={{
              color: textColor || buttonColor,
              fontWeight,
              fontFamily,
              fontSize,
            }}>
            {text}
          </Text>
        </>
      )}
    </Box>
  );
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[styles.stretch]}
      disabled={loading}
      {...{disabled}}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
  },
  stretch: {
    alignSelf: 'stretch',
  },
  content: {
    textAlign: 'center',
  },
});
