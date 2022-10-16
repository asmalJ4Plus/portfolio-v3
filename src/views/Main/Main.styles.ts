import { createStyles } from 'petald';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  image: {
    position: 'absolute',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '64px',
    filter: 'opacity(60%)',
    color: '#D1603D',
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
