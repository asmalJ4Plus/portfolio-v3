import { createTheme } from '@timkinsman/react-components';

export const COLORS = {
  KIRYU: '#F5F5F5',
  MAJIMA: '#082429',
};

export const TYPOGRAPHY = {
  DESKTOP: {
    XXL: { fontSize: '128px', fontWeight: 700, lineHeight: '173px', margin: 0 },
    H0: { fontSize: '60px', fontWeight: 500, lineHeight: '81px', margin: 0 },
    H1: { fontSize: '40px', fontWeight: 500, lineHeight: '54px', margin: 0 },
    H2: { fontSize: '32px', fontWeight: 500, lineHeight: '43px', margin: 0 },
    H3: { fontSize: '24px', fontWeight: 500, lineHeight: '32px', margin: 0 },
    H4: { fontSize: '20px', fontWeight: 500, lineHeight: '27px', margin: 0 },
    H5: { fontSize: '18px', fontWeight: 500, lineHeight: '24px', margin: 0 },
    P: { fontSize: '16px', fontWeight: 500, lineHeight: '22px', margin: 0 },
  },
  MOBILE: {
    XXL: { fontSize: '60px', fontWeight: 500, lineHeight: '81px', margin: 0 },
    H0: { fontSize: '40px', fontWeight: 500, lineHeight: '54px', margin: 0 },
    H1: { fontSize: '32px', fontWeight: 500, lineHeight: '43px', margin: 0 },
    H2: { fontSize: '28px', fontWeight: 500, lineHeight: '32px', margin: 0 },
    H3: { fontSize: '24px', fontWeight: 500, lineHeight: '27px', margin: 0 },
    H4: { fontSize: '20px', fontWeight: 500, lineHeight: '24px', margin: 0 },
    H5: { fontSize: '16px', fontWeight: 500, lineHeight: '22px', margin: 0 },
    P: { fontSize: '14px', fontWeight: 500, lineHeight: '19px', margin: 0 },
  },
};

export const theme = createTheme({
  breakpoints: {
    values: {
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
    subheading1: {
      ...TYPOGRAPHY.DESKTOP.XXL,
      sm: {
        ...TYPOGRAPHY.MOBILE.XXL,
      },
    },
    subheading2: {
      ...TYPOGRAPHY.DESKTOP.H0,
      sm: {
        ...TYPOGRAPHY.MOBILE.H0,
      },
    },
    h1: {
      ...TYPOGRAPHY.DESKTOP.H1,
      sm: {
        ...TYPOGRAPHY.MOBILE.H1,
      },
    },
    h2: {
      ...TYPOGRAPHY.DESKTOP.H2,
      sm: {
        ...TYPOGRAPHY.MOBILE.H2,
      },
    },
    h3: {
      ...TYPOGRAPHY.DESKTOP.H3,
      sm: {
        ...TYPOGRAPHY.MOBILE.H3,
      },
    },
    h4: {
      ...TYPOGRAPHY.DESKTOP.H4,
      sm: {
        ...TYPOGRAPHY.MOBILE.H4,
      },
    },
    h5: {
      ...TYPOGRAPHY.DESKTOP.H5,
      sm: {
        ...TYPOGRAPHY.MOBILE.H5,
      },
    },
    body1: {
      ...TYPOGRAPHY.DESKTOP.P,
      sm: {
        ...TYPOGRAPHY.MOBILE.P,
      },
    },
  },
});
