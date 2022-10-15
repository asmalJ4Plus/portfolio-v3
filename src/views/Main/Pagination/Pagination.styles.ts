import { createStyles } from 'petald';

const useStyles = createStyles(() => ({
  container: {
    padding: '4px',
    opacity: '0.4',
    transition: 'opacity 0.25s',
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
    },
  },
  pagination: {
    height: '8px',
    width: '8px',
    background: 'currentColor',
    borderRadius: '100%',
  },
}));

export default useStyles;
