import React from "react";
import {
  Box,
  Center,
  Text,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";

const Tips = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Center py={5}>
      <Box
        maxW={["90vw", "90vw", "80vw", "80vw"]}
        w="full"
        bg={bg}
        boxShadow="2xl"
        rounded="md"
        p={6}
        overflow="hidden"
      >
        <Stack p={5}>
          <Heading
            color={color}
            fontSize={["2xl", "2xl", "2xl", "5xl"]}
            fontFamily="body"
          >
            Tips
          </Heading>
          <Stack as="ul" listStylePos="outside" spacing={3}>
            <Text
              as="li"
              fontSize={["1xl", "1xl", "1xl", "2xl"]}
              color="gray.500"
            >
              Always follow your printer's recommended maintenance guide.
            </Text>
            <Text
              as="li"
              fontSize={["1xl", "1xl", "1xl", "2xl"]}
              color="gray.500"
            >
              Never let the printer sit idle for long stretches of time, make
              sure it gets used at least once a week.
            </Text>
            <Text
              as="li"
              fontSize={["1xl", "1xl", "1xl", "2xl"]}
              color="gray.500"
            >
              Keep the printer clean from dust (dust with a damp lint-free
              cloth) and keep it covered when not in use.
            </Text>
            <Text
              as="li"
              fontSize={["1xl", "1xl", "1xl", "2xl"]}
              color="gray.500"
            >
              Never use compressed air to clean a printer as the force will send
              dust or debris inside the printer causing issues.
            </Text>
            <Text
              as="li"
              fontSize={["1xl", "1xl", "1xl", "2xl"]}
              color="gray.500"
            >
              Power the printer down only using the printer's power button,
              never directly unplug it from the wall or power strip.
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
export default Tips;
