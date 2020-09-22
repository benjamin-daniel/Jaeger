import React, {useState} from 'react';
import {TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@shopify/restyle';
import {Box} from './Box';
import {ErrorText} from './ErrorText';
/**
 *
 * @see https://lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/
 */

const DEFAULT_STYLE = {
  //   fontFamily: 'Telex-Regular',
};

export const Input = ({
  inputStyle,
  containerStyle,
  touched,
  error,
  passwordIcon,
  variant,
  labelVariant,
  Icon,
  innerContainerProps,
  LeftIcon,
  RightIcon,
  ErrorTextStyles,
  nospace,
  ...props
}) => {
  const [state, setState] = useState({
    icon: 'eye-off',
    password: !!Icon,
  });

  const theme = useTheme();
  const variantProps = theme.inputVariants[variant];
  const ICON_SIZE = 20;
  const realInputStyle = StyleSheet.flatten([
    DEFAULT_STYLE,
    variantProps,
    inputStyle,
  ]);
  const changeIcon = () => {
    setState((prevState) => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      password: !prevState.password,
    }));
  };
  return (
    <Box marginVertical={nospace ? 'none' : 's'}>
      <Box
        borderWidth={1}
        borderColor={touched && error ? 'error' : 'black'}
        flexDirection="row"
        alignItems="center"
        height={40}
        padding="m"
        backgroundColor="mainBackground"
        borderRadius={5}
        {...innerContainerProps}>
        {LeftIcon}
        <Box flex={1}>
          <TextInput
            style={realInputStyle}
            secureTextEntry={state.password}
            {...props}
          />
        </Box>
        {RightIcon}
        {Icon && (
          <TouchableOpacity onPress={() => changeIcon()}>
            <Box
              marginHorizontal="m"
              alignItems="center"
              justifyContent="center">
              <Feather size={ICON_SIZE} name={state.icon} />
            </Box>
          </TouchableOpacity>
        )}
      </Box>
      <ErrorText {...{touched, error, ErrorTextStyles}} />
    </Box>
  );
};
