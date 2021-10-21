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
          <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
            <NextLink href="/">
              <Link
                textAlign={useBreakpointValue({ base: "left", md: "left" })}
                fontFamily={"heading"}
              >
                Home
              </Link>
            </NextLink>

            <Flex display={{ md: "flex" }} ml={10}>
              <NextLink href="/about">
                <Link
                  textAlign={useBreakpointValue({ base: "left", md: "left" })}
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
