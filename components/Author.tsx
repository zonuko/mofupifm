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

type SnsTypes = "Twitter" | "Facebook";

interface Sns {
  url: string;
  type: SnsTypes;
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
    <Box onClick={dialog.onOpen} cursor="pointer" w="100%">
      <Image
        mb="3"
        w="100%"
        borderRadius="full"
        src={`icons/${props.iconName}.jpg`}
        alt={`${props.name} icon image`}
      />
      <Center w="100%" fontSize="1rem">
        {props.name}
      </Center>

      <Modal
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
                {props.description.split("\n").map((t) => {
                  <Text>
                    {t}
                  </Text>;
                })}
              </Box>
              <Box mt="5">
                <Text>SNSリンク</Text>
                {props.snsLinks.map((l: Sns) => {
                  <Text>
                    l.type:{" "}
                    <Link href={l.url}>
                      {l.url}
                    </Link>
                  </Text>;
                })}
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
