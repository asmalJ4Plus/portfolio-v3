import { createStyles } from 'petald';

const useStyles = createStyles(() => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '80px',
    justifyContent: 'space-between',
    padding: '0 60px',
    width: '-webkit-fill-available',
  },
  logo: {
    justifyContent: 'flex-start',
    flex: '50%',
    display: 'flex',
  },
  pages: {
    display: 'flex',
    flex: '50%',
    gap: '35px',
    justifyContent: 'center',
  },
  page: {
    borderBottom: '3px solid transparent',
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
    opacity: 0.4,
    transition: 'opacity 0.25s',
    '&:hover': {
      opacity: '1 !important',
    },
  },
  music: {
    justifyContent: 'flex-end',
    flex: '50%',
    display: 'flex',
  },
}));

export default useStyles;
