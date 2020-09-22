import {createTheme} from '@shopify/restyle';

export const palette = {
  blue: '#2B44FF',
  blue2: '#1F28CF',

  black: '#242833',
  white: '#FFFFFF',
};

const theme = createTheme({
  colors: {
    main: palette.blue,
    mainDark: palette.blue2,

    mainBackground: palette.white,

    black: palette.black,
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
  textVariants: {},
  inputVariants: {},
  maxContentWidth: 500,
});

export default theme;
