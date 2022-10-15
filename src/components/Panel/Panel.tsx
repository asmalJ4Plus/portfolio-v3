import { Box } from 'petald';
import useStyles from './Panel.styles';
import { PanelProps } from './Panel.types';

export const Panel = ({ children, id }: PanelProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.container} id={id}>
      {children}
    </Box>
  );
};
