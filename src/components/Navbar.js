import React, { useState } from "react";
import {
  Box,
  Text,
  Link,
  Flex,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { VscClose, VscMenu } from "react-icons/vsc";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  const toggle = () => setIsOpen(!isOpen);

  const MenuToggle = () => {
    return (
      <Box
        display={{ base: "block", md: "none" }}
        onClick={toggle}
        boxSize={35}
      >
        {isOpen ? <VscClose size={35} /> : <VscMenu size={35} />}
      </Box>
    );
  };

  const Logo = () => {
    return (
      <Box {...props}>
        <Link href="/">
          <Text fontSize="3xl" fontWeight="bold">
            Support Cartridge
          </Text>
        </Link>
      </Box>
    );
  };

  const MenuItem = ({ children, to }) => {
    return (
      <Link href={to}>
        <Text display="block">{children}</Text>
      </Link>
    );
  };

  const MenuLinks = () => {
    return (
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/tips">Tips</MenuItem>
          <MenuItem to="/faqs">FAQs</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
          <MenuItem to="/privacy">Privacy</MenuItem>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Stack>
      </Box>
    );
  };

  const NavBarContainer = ({ children }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={4}
        bg={bg}
        color={color}
      >
        {children}
      </Flex>
    );
  };

  return (
    <NavBarContainer {...props}>
      <Logo w="100px" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Navbar;
