import {createTheme} from '@shopify/restyle';

export const palette = {
  blue: '#2B44FF',
  blue2: '#1F28CF',

  error: '#FF4133',

  black: '#242833',
  white: '#FFFFFF',

  deep: '#8991DC',
};

const theme = createTheme({
  colors: {
    main: palette.blue,
    mainDark: palette.blue2,

    error: palette.error,
    deep: palette.deep,

    black: palette.black,
    mainBackground: palette.white,
  },
  spacing: {
    /* eslint-disable id-length */
    xxs: 3,
    xs: 6,
    s: 8,
    m: 10,
    l: 20,
    xl: 32,
    xxl: 43,
    '-s': -8,
    '-m': -16,
    '-l': -24,
    '-xl': -32,
    '-xxl': -43,
    none: 0,
    /* eslint-enable id-length */
  },
  breakpoints: {
    phone: 0,
  },
  textVariants: {
    none: {},
    bodyText: {
      color: 'black',
      fontSize: 18,
    },
    button: {
      fontWeight: 'bold',
      fontSize: 20,
      disabled: {},
      // fontFamily: 'Telex-Regular',
    },
  },
  buttonVariants: {
    primary: {
      color: palette.blue,
      height: 50,
      textColor: palette.white,
      // fontFamily: 'Telex-Regular',
      fontSize: 14,
      borderWidth: undefined,
      disabled: {
        // color: palette.ash,
      },
    },
  },
  inputVariants: {},
  maxContentWidth: 500,
});

export default theme;
