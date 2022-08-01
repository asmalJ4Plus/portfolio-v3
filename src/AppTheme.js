import { createTheme } from '@material-ui/core';

export const THEMES = {
  MAJIMA: {
    PRIMARY: '#FFFFFF',
    SECONDARY: '#F7FAFC',
    TEXT: '#2A2F45',
  },
  KIRYU: {
    PRIMARY: '#082429',
    SECONDARY: '#0B3733',
    TEXT: '#F7FAFC',
  },
};

export const TYPOGRAPHY = {
  DESKTOP: {
    XXL: { fontSize: '128px', fontWeight: 700, lineHeight: '173px' },
    H0: { fontSize: '60px', fontWeight: 500, lineHeight: '81px' },
    H1: { fontSize: '40px', fontWeight: 500, lineHeight: '54px' },
    H2: { fontSize: '32px', fontWeight: 500, lineHeight: '43px' },
    H3: { fontSize: '24px', fontWeight: 500, lineHeight: '32px' },
    H4: { fontSize: '20px', fontWeight: 500, lineHeight: '27px' },
    H5: { fontSize: '18px', fontWeight: 500, lineHeight: '24px' },
    P: { fontSize: '16px', fontWeight: 500, lineHeight: '22px' },
  },
  MOBILE: {
    XXL: { fontSize: '60px', fontWeight: 500, lineHeight: '81px' },
    H0: { fontSize: '40px', fontWeight: 500, lineHeight: '54px' },
    H1: { fontSize: '32px', fontWeight: 500, lineHeight: '43px' },
    H2: { fontSize: '28px', fontWeight: 500, lineHeight: '32px' },
    H3: { fontSize: '24px', fontWeight: 500, lineHeight: '27px' },
    H4: { fontSize: '20px', fontWeight: 500, lineHeight: '24px' },
    H5: { fontSize: '16px', fontWeight: 500, lineHeight: '22px' },
    P: { fontSize: '14px', fontWeight: 500, lineHeight: '19px' },
  },
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
  typography: {
    fontFamily: [
      'Satoshi-Medium',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
    subtitle1: {
      ...TYPOGRAPHY.DESKTOP.XXL,
      '@media (max-width:600px)': {
        ...TYPOGRAPHY.MOBILE.XXL,
      },
    },
    subtitle2: {
      ...TYPOGRAPHY.DESKTOP.H0,
      '@media (max-width:600px)': {
        ...TYPOGRAPHY.MOBILE.H0,
      },
    },
    h1: {
      ...TYPOGRAPHY.DESKTOP.H1,
      '@media (max-width:600px)': {
        ...TYPOGRAPHY.MOBILE.H1,
      },
    },
    h2: {
      ...TYPOGRAPHY.DESKTOP.H2,
      '@media (max-width:600px)': {
        ...TYPOGRAPHY.MOBILE.H2,
      },
    },
    h3: {
      ...TYPOGRAPHY.DESKTOP.H3,
      '@media (max-width:600px)': {
        ...TYPOGRAPHY.MOBILE.H3,
      },
    },
    h4: {
      ...TYPOGRAPHY.DESKTOP.H4,
      '@media (max-width:600px)': {
        ...TYPOGRAPHY.MOBILE.H4,
      },
    },
    h5: {
      ...TYPOGRAPHY.DESKTOP.H5,
      '@media (max-width:600px)': {
        ...TYPOGRAPHY.MOBILE.H5,
      },
    },
    body1: {
      ...TYPOGRAPHY.DESKTOP.P,
      '@media (max-width:600px)': {
        ...TYPOGRAPHY.MOBILE.P,
      },
    },
  },
});
