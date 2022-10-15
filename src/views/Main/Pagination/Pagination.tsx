import { Box, Space } from 'petald';
import { pages } from '../../../utils/constants';
import { scrollTo } from '../../../utils/helpers';
import { useAppSelector } from '../../../utils/hooks';
import useStyles from './Pagination.styles';

export const Pagination = () => {
  const classes = useStyles();
  const { page } = useAppSelector((state) => state.app);

  return (
    <Space direction='vertical'>
      {pages.map((pageToScroll) => (
        <Box
          key={pageToScroll}
          onClick={() => scrollTo(pageToScroll)}
          style={{ padding: '8px', opacity: page === pageToScroll ? 1 : undefined }}
          className={classes.container}
        >
          <Box className={classes.pagination} />
        </Box>
      ))}
    </Space>
  );
};
