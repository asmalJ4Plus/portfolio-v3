import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  arrowDownContainer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    margin: '0 auto',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowDown: {
    opacity: '0.4',
    transition: 'opacity 0.25s',
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
    },
  },
  meContainer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'flex-start',
  },
}));

export default useStyles;
