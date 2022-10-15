import { Box, Typography } from 'petald';

export const Footer = () => (
  <Box id='footer'>
  <Typography variant='h5'>
    © {new Date().getFullYear()} tim kinsman, adelaide, australia
  </Typography></Box>
);
