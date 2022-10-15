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
}));

export default useStyles;
