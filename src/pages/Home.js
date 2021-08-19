import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useColorModeValue,
  Stack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AspectRatio,
} from "@chakra-ui/react";
import { VscChevronDown } from "react-icons/vsc";

import { Inks } from "../assets/Data";

const Home = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  const menuRef = useRef(null);

  const [menuWidth, setMenuWdith] = useState("");
  const [menuButtonName, setMenuButtonName] = useState("Select");
  const [showItemData, setShowItemData] = useState(false);

  useEffect(() => {
    setMenuWdith(menuRef.current.offsetWidth);
    function handleResize() {
      setMenuWdith(menuRef.current.offsetWidth);
    }
    window.addEventListener("resize", handleResize);
  }, [setMenuWdith]);

  const handleMenuButton = item => {
    setMenuButtonName(item);
  };

  const handleItemData = () => {
    setShowItemData(true);
  };

  const mapItemData = () => {
    const itemData = Inks.filter(item => item.Model === menuButtonName);
    return (
      <Stack>
        {itemData[0].Video !== "" ? (
          <AccordionItem>
            <AccordionButton>
              <Box
                flex="1"
                fontSize={["1xl", "1xl", "1xl", "2xl"]}
                textAlign="left"
                fontWeight="bold"
              >
                Installing and Troubleshooting Video Guide
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              pb={4}
              fontSize={["1xl", "1xl", "1xl", "2xl"]}
              color="gray.500"
            >
              <AspectRatio ratio={16 / 9}>
                <iframe
                  title="Video"
                  src={itemData[0].Video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </AccordionPanel>
          </AccordionItem>
        ) : null}

        {itemData[0].Issues.map((item, i) => (
          <AccordionItem key={i}>
            <AccordionButton>
              <Box
                flex="1"
                fontSize={["1xl", "1xl", "1xl", "2xl"]}
                textAlign="left"
                fontWeight="bold"
              >
                {item.IssueTitle}
              </Box>
              <AccordionIcon />
            </AccordionButton>

            {item.Solution.map((step, k) => (
              <AccordionPanel
                key={k}
                pb={4}
                fontSize={["1xl", "1xl", "1xl", "2xl"]}
                color="gray.500"
                dangerouslySetInnerHTML={{ __html: `${k + 1}. ${step}` }}
              ></AccordionPanel>
            ))}
          </AccordionItem>
        ))}
      </Stack>
    );
  };

  return (
    <Center py={5}>
      <Box
        maxW={["90vw", "90vw", "80vw", "80vw"]}
        w="full"
        bg={bg}
        boxShadow={["1xl", "1xl", "1xl", "2xl"]}
        rounded="md"
        p={6}
        overflow="hidden"
      >
        <Stack p={5} spacing="1em">
          <Heading color={color} fontSize={["1xl", "1xl", "1xl", "2xl"]}>
            Select your ink cartridge model:
          </Heading>
          <Menu>
            <MenuButton
              ref={menuRef}
              borderRadius="md"
              borderWidth="2px"
              borderColor="black"
              h="2em"
              as={Button}
              fontSize={["1xl", "1xl", "1xl", "2xl"]}
              rightIcon={<VscChevronDown />}
            >
              {menuButtonName}
            </MenuButton>
            <MenuList w={menuWidth}>
              {Inks.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={() => {
                    handleMenuButton(item.Model);
                    handleItemData();
                  }}
                >
                  {item.Model}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {showItemData ? (
            <Box w="full">
              <Accordion allowToggle>{mapItemData()}</Accordion>
            </Box>
          ) : null}
        </Stack>
      </Box>
    </Center>
  );
};
export default Home;
