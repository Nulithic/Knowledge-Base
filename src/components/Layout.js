import React from "react";
import { Box, Grid } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "../assets/background.jpg";

const Layout = ({ children }) => {
  return (
    <Box
      bgImage={Background}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Navbar />
      <Grid minH="calc(100vh - 224px)">{children}</Grid>
      <Footer />
    </Box>
  );
};

export default Layout;
