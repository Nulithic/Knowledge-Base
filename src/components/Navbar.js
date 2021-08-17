import React, { useState } from 'react';
import {
  Box,
  Text,
  Link,
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { VscClose, VscMenu } from 'react-icons/vsc';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const color = useColorModeValue('black', 'white');

  const toggle = () => setIsOpen(!isOpen);

  const MenuToggle = () => {
    return (
      <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
        {isOpen ? <VscClose /> : <VscMenu />}
      </Box>
    );
  };

  const Logo = () => {
    return (
      <Box {...props}>
        <Link href={'/'}>
          <Text fontSize="5xl" fontWeight="bold">
            Support Cartridge
          </Text>
        </Link>
      </Box>
    );
  };

  const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
    return (
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    );
  };

  const MenuLinks = () => {
    return (
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/how">Recommended Tips</MenuItem>
          <MenuItem to="/how">FAQs</MenuItem>
          <MenuItem to="/how">Create a Ticket</MenuItem>
          <MenuItem to="/how">Privacy</MenuItem>
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
        p={8}
        bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
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
