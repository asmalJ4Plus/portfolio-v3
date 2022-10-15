import { Box, Typography } from 'petald';
import { Panel } from '../../components/Panel';
import useStyles from './NotFound.styles';

export const NotFound = () => {
  const classes = useStyles();

  return (
    <Panel>
      <Box className={classes.container}>
        <Typography variant='h2'>you don&apos;t belong here..</Typography>
      </Box>
    </Panel>
  );
};
