import { Box, Fade, Pill, Space, Typography } from 'petald';
import { useState } from 'react';
import { Panel } from '../../../components/Panel';
import { Page, works } from '../../../utils/constants';
import { useAppSelector } from '../../../utils/hooks';
import useStyles from '../Main.styles';

export const Work = () => {
  const classes = useStyles();
  const [where, setWhere] = useState(works[0].where);
  const { page } = useAppSelector((state) => state.app);

  return (
    <Panel id={Page.work}>
      <Box className={classes.container}>
        <Fade
          appear={page === Page.work}
          slide='right'
          style={{ maxWidth: '680px', width: '100%' }}
        >
          <Space direction='vertical' gap='large' style={{ paddingBottom: '300px' }}>
            <Typography variant='h1'>work</Typography>
            <Space>
              {works.map((work, i) => (
                <Pill
                  key={i}
                  label={work.where}
                  onClick={() => setWhere(work.where)}
                  variant={where === work.where ? 'filled' : 'outlined'}
                />
              ))}
            </Space>
            <Box>
              {works.map((work) => (
                <Box
                  style={{ position: 'absolute', zIndex: where === work.where ? 99 : 1 }}
                  key={work.where}
                >
                  <Fade appear={where === work.where} slide='right'>
                    <Space direction='vertical'>
                      <Typography variant='h3'>
                        {/* <a href={work.link} target='_blank' rel='noreferrer'> */}
                        {work.where}
                        {/* </a> */}
                      </Typography>
                      <Typography variant='h5'>
                        {work.role} | {work.when}
                      </Typography>
                      <Typography variant='body1' style={{ whiteSpace: 'pre-line' }}>
                        {work.what}
                      </Typography>
                    </Space>
                  </Fade>
                </Box>
              ))}
            </Box>
          </Space>
        </Fade>
      </Box>
    </Panel>
  );
};
