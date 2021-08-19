import React from "react";
import {
  Box,
  Center,
  Text,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";

const Privacy = () => {
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
            Privacy
          </Heading>
          <Text fontSize="1xl" color="gray.500">
            Your privacy is important to us. It is Support Cartridge's policy to
            respect your privacy regarding any information we may collect from
            you across our website, supportcartridge.com, and other sites we own
            and operate.
          </Text>
          <Text fontSize="1xl" color="gray.500">
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </Text>
          <Text fontSize="1xl" color="gray.500">
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorised access, disclosure, copying, use or
            modification.
          </Text>
          <Text fontSize="1xl" color="gray.500">
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </Text>
          <Text fontSize="1xl" color="gray.500">
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </Text>
          <Text fontSize="1xl" color="gray.500">
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </Text>
          <Text fontSize="1xl" color="gray.500">
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};
export default Privacy;
