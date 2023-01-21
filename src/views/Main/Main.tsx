import { Fade } from 'petald';
import { Page } from '../../utils/constants';
import useMediaQuery, { useAppSelector } from '../../utils/hooks';
import { About } from './About';
import { Home } from './Home';
import { Music } from './Music';
import { Pagination } from './Pagination';
import { Work } from './Work';

export const Main = () => {
  const { page } = useAppSelector((state) => state.app);

  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <>
      <Home />
      <Work />
      <About />
      <Music />

      {isDesktop && (
        <Fade
          appear={page !== Page.home}
          slide='down'
          style={{
            width: 'unset',
            position: 'fixed',
            top: '50%',
            right: '64px',
            height: '64px',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            pointerEvents: page == Page.home ? 'none' : undefined,
          }}
        >
          <Pagination />
        </Fade>
      )}
    </>
  );
};
