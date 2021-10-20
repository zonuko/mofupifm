import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
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
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  const mofupiDialog = useDisclosure();
  const zonukoDialog = useDisclosure();

  return (
    <Container pos="relative" zIndex="1" maxW={"7xl"} p="12" pl="0">
      <Heading as="div">
        <Image src="mofupifm_small.png" alt="mofupifm logo mid" />
        <Text ml="3" fontWeight="400" fontSize="24px">
          about mofupi.fm
        </Text>
      </Heading>
      <Heading as="h2" marginTop="5">
        About
      </Heading>
      <Divider marginTop="5" />
      {/* 仮エレメント */}
      <Box mt="5" p="12" pt="2">
        <Text fontSize="24px">
          インフラエンジニアなmodupiと愉快なエンジニア仲間たちがその時その時でなにか楽しそうなことをしゃべる番組です。
        </Text>
      </Box>
      <Heading as="h2" marginTop="5">
        Authors
      </Heading>
      <Divider marginTop="5" />
      <Center>
        <Grid mt="5" pl="5" pr="5" templateColumns="repeat(3, 1fr)" gap={12}>
          {/* TODO: 以下ダイアログ含めてpropsとかで下をループ */}
          <Box onClick={mofupiDialog.onOpen} cursor="pointer" w="100%">
            <Image
              mb="3"
              boxSize="250px"
              borderRadius="full"
              src="icons/mofupi_icon.jpg"
              alt="mofupi twitter icon"
            />
            <Center w="100%" fontSize="16px">
              mofupi
            </Center>
            <Center w="100%" fontSize="16px">
              インフラエンジニア
            </Center>
          </Box>
          <Box onClick={zonukoDialog.onOpen} cursor="pointer" w="100%">
            <Image
              mb="3"
              boxSize="250px"
              borderRadius="full"
              src="icons/zonuko_icon.jpg"
              alt="zonuko twitter icon"
            />
            <Center w="100%" fontSize="16px">
              zonuko
            </Center>
            <Center w="100%" fontSize="16px">
              このサイトを作った人
            </Center>
          </Box>
        </Grid>
      </Center>
      <Modal
        isCentered
        motionPreset="slideInBottom"
        isOpen={mofupiDialog.isOpen}
        onClose={mofupiDialog.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>mofupi</ModalHeader>
          <ModalCloseButton color="black" />
          <ModalBody color="black">
            <Center>
              <Image
                mb="3"
                boxSize="180px"
                borderRadius="full"
                src="icons/mofupi_icon.jpg"
                alt="mofupi twitter icon"
              />
            </Center>
            <Heading as="h3" mt="1" fontSize="16px">
              おにぎりの妖精
            </Heading>
            <Divider mt="2" />
            <Box>
              <Box>
                <Text>
                  おにぎりをこよなく愛するおにぎりの精霊。
                </Text>
                <Text>
                  ハンバーガーも好きらしい。
                </Text>
                <Text>
                  インフラ関連のエンジニア。Windowsサーバーに詳しい。
                </Text>
              </Box>
              <Box mt="5">
                <Text>SNSリンク</Text>
                <Text>
                  Twitter:{" "}
                  <Link href="https://twitter.com/mofupi">
                    https://twitter.com/mofupi
                  </Link>
                </Text>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={mofupiDialog.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        motionPreset="slideInBottom"
        isOpen={zonukoDialog.isOpen}
        onClose={zonukoDialog.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>zonuko</ModalHeader>
          <ModalCloseButton color="black" />
          <ModalBody color="black">
            <Center>
              <Image
                mb="3"
                boxSize="180px"
                borderRadius="full"
                src="icons/zonuko_icon.jpg"
                alt="mofupi twitter icon"
              />
            </Center>
            <Heading as="h3" mt="1" fontSize="16px">
              このサイト作った人
            </Heading>
            <Divider mt="2" />
            <Box>
              <Box>
                <Text>
                  このサイト(勝手に)作った人。
                </Text>
                <Text>
                  格ゲーとかSTGとか音ゲーとか好き。
                </Text>
                <Text>
                  今はWeb関連のエンジニアだが、もともとなんでもやってたのでデスクトップアプリとかDLL作成とかもできる(できた)。
                </Text>
              </Box>
              <Box mt="5">
                <Text>SNSリンク</Text>
                <Text>
                  Twitter:{" "}
                  <Link href="https://twitter.com/zonuko">
                    https://twitter.com/zonuko
                  </Link>
                </Text>
                <Text>
                  Twitter:{" "}
                  <Link href="https://twitter.com/nuhera">
                    https://twitter.com/nuhera
                  </Link>
                </Text>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={zonukoDialog.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
export default About;
