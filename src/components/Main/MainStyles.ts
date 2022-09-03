import { createStyles } from 'petald';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  arrowContainer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    margin: '0 auto',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    opacity: '0.4',
    transition: 'opacity 0.25s',
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
    },
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
}));

export default useStyles;
