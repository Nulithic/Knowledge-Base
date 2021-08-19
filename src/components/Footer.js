import React from "react";
import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  const FooterContainer = ({ children }) => {
    return (
      <Flex
        as="footer"
        align="center"
        justify="center"
        wrap="wrap"
        w="100%"
        mt={8}
        p={8}
        bg={bg}
        color={color}
      >
        {children}
      </Flex>
    );
  };

  return (
    <FooterContainer>
      <Box>
        <Text fontSize="small">
          © SupportCartridge.com 2021. All Rights Reserved.
        </Text>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
