import React from "react";
import {
  Box,
  Grid,
  Center,
  Text,
  useColorModeValue,
  Stack,
  Heading,
  Link,
} from "@chakra-ui/react";

const Support = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Center>
      <Grid gap={5}>
        <Link href="https://supportcartridge.on.spiceworks.com/portal">
          <Box
            textAlign="center"
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
                Create a Ticket
              </Heading>
              <Text fontSize={["1xl", "1xl", "1xl", "2xl"]} color="gray.500">
                Click here to create a ticket. Our tech support team will reply
                to you as soon as possible.
              </Text>
            </Stack>
          </Box>
        </Link>
        <Box
          textAlign="center"
          maxW={["90vw", "90vw", "80vw", "80vw"]}
          w="full"
          bg={bg}
          boxShadow="2xl"
          rounded="md"
          p={6}
          overflow="hidden"
        >
          <Stack p={10}>
            <Heading
              color={color}
              fontSize={["2xl", "2xl", "2xl", "5xl"]}
              fontFamily="body"
            >
              Contact Us
            </Heading>
            <Text fontSize={["1xl", "1xl", "1xl", "2xl"]} color="gray.500">
              <strong>Email:</strong> info@supportcartridge.com
            </Text>
            <Text fontSize={["1xl", "1xl", "1xl", "2xl"]} color="gray.500">
              <strong>Phone:</strong> 1-855-999-4657
            </Text>
          </Stack>
        </Box>
      </Grid>
    </Center>
  );
};
export default Support;
