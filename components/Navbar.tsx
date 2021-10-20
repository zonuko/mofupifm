import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  LinkProps,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box pos="relative" zIndex="2" background="gray.900">
      <Flex
        color="white"
        minH={"60px"}
        py={{ base: 2 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="gray.700"
        px={{ base: 4 }}
        align={"center"}
      >
        <Container maxW={"7xl"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen
                ? <CloseIcon w={3} h={3} />
                : <HamburgerIcon w={5} h={5} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <NextLink href="/">
              <Link
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
              >
                Home
              </Link>
            </NextLink>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <NextLink href="/about">
                <Link
                  textAlign={useBreakpointValue({ base: "center", md: "left" })}
                  fontFamily={"heading"}
                >
                  About
                </Link>
              </NextLink>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}
