import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Stack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Faq = () => {
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
            FAQs
          </Heading>

          <Accordion allowToggle listStylePos="outside">
            <AccordionItem>
              <AccordionButton>
                <Box
                  flex="1"
                  fontSize={["1xl", "1xl", "1xl", "2xl"]}
                  textAlign="left"
                  fontWeight="bold"
                >
                  If I use a remanufactured inkjet will I void my printer's
                  warranty?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel
                pb={4}
                fontSize={["1xl", "1xl", "1xl", "2xl"]}
                color="gray.500"
              >
                No, using a remanufactured inkjets will not void your warranty.
                It is illegal for the printer manufacturer to do so beacuse of
                the Magnuson Moss Warranty Improvement Act.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box
                  flex="1"
                  fontSize={["1xl", "1xl", "1xl", "2xl"]}
                  textAlign="left"
                  fontWeight="bold"
                >
                  My printer says the inkjet is empty when I just installed a
                  new one, why?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                fontSize={["1xl", "1xl", "1xl", "2xl"]}
                color="gray.500"
              >
                Don't worry, your cartirdge is not empty. Since a remanufactured
                cartridge has been used before this a normal issue. For most
                printers you can just select a button to continue printing. For
                more detailed instructions please consult your printer's manual.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box
                  flex="1"
                  fontSize={["1xl", "1xl", "1xl", "2xl"]}
                  textAlign="left"
                  fontWeight="bold"
                >
                  The inkjet is not fitting in my printer, what can I do?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                fontSize={["1xl", "1xl", "1xl", "2xl"]}
                color="gray.500"
              >
                First, confirm that the correct cartridge for your printer was
                purchased. Then make sure all the clips covering the cartridge
                are removed. If you need help installing a cartridge please
                consult your printer's manual.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Box>
    </Center>
  );
};
export default Faq;
