import { createStyles } from 'petald';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    padding: '0 12px',
  },
  image: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    filter: 'opacity(60%)',
    color: '#D1603D',
    height: '100vh',
    width: 'calc(100vw - 24px)',
    margin: '0 12px',
  },
  icon: {
    height: '16px',
    width: '16px',
    animation: '$breath 2s linear infinite',
    flexShrink: 0,
  },
  '@keyframes breath': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

export default useStyles;
