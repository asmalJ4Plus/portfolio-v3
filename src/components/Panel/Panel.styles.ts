import { createStyles } from 'petald';

const useStyles = createStyles(() => ({
  container: {
    height: '100vh',
    width: '100%',
    overflow: 'hidden', // So fade items will not interfere with container widths
  },
}));

export default useStyles;
