import { useDisclosure } from "@chakra-ui/hooks";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface Sns {
  url: string;
  type: string;
}

interface AuthorProps {
  name: string;
  title: string;
  iconName: string;
  description: string;
  snsLinks: Sns[];
}

export default function Author(props: AuthorProps) {
  const dialog = useDisclosure();

  return (
    <Box
      className="test"
      onClick={dialog.onOpen}
      cursor="pointer"
      textAlign="center"
      w="100%"
    >
      <Box display="inline-block" maxW="300">
        <Image
          mb="2"
          w="100%"
          borderRadius="full"
          src={`icons/${props.iconName}.jpg`}
          alt={`${props.name} icon image`}
        />
        <Center mb="12" w="100%" fontSize="1rem">
          {props.name}
        </Center>
      </Box>
      <Modal
        blockScrollOnMount={false}
        isCentered
        motionPreset="slideInBottom"
        isOpen={dialog.isOpen}
        onClose={dialog.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.name}</ModalHeader>
          <ModalCloseButton color="black" />
          <ModalBody color="black">
            <Center>
              <Image
                mb="3"
                boxSize="180px"
                borderRadius="full"
                src={`icons/${props.iconName}.jpg`}
                alt={`${props.name} icon image`}
              />
            </Center>
            <Heading as="h3" mt="1" fontSize="16px">
              {props.title}
            </Heading>
            <Divider mt="2" />
            <Box>
              <Box>
                {props.description.split("\n").map((t) => (
                  <Text>
                    {t}
                  </Text>
                ))}
              </Box>
              <Box mt="5">
                <Text>SNSリンク</Text>
                {props.snsLinks.map((l: Sns) => (
                  <Text>
                    {l.type}:{" "}
                    <Link
                      rel="noopener"
                      target="_blank"
                      href={l.url}
                    >
                      {l.url}
                    </Link>
                  </Text>
                ))}
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={dialog.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
