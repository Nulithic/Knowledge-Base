import React from 'react';
import { Box, Grid } from '@chakra-ui/react';

import Navbar from './Navbar';
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Grid minH="100vh">{children}</Grid>
    </Box>
  );
};

export default Layout;
