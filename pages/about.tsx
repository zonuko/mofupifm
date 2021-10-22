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
import { NextSeo } from "next-seo";
import Head from "next/head";

const About = () => {
  const mofupiDialog = useDisclosure();
  const zonukoDialog = useDisclosure();
  const ponyoDialog = useDisclosure();
  const omakeDialog = useDisclosure();

  return (
    <>
      <Head>
        <title>About: mofupi.fm - Podcast by mofupi</title>
      </Head>

      <NextSeo
        title="About: mofupi.fm - Podcast by mofupi"
        description="About Podcast and Authors"
      />

      <Container pos="relative" zIndex="1" maxW={"7xl"} p="12" pl="0">
        <Heading as="div">
          <Image src="mofupifm_small.png" alt="mofupifm logo mid" />
          <Text ml="3" fontWeight="400" fontSize="24px">
            about mofupi.fm
          </Text>
        </Heading>
        <Box ml="3">
          <Heading as="h2" marginTop="5">
            About
          </Heading>
          <Divider marginTop="5" />
          {/* 仮エレメント */}
          <Box mt="5" p="12" pt="2">
            <Text fontSize="24px">
              インフラエンジニアなmofupiと愉快な仲間たちがその時その時でなにか楽しそうなことをしゃべる番組です。
            </Text>
          </Box>
          <Heading as="h2" marginTop="5">
            Authors
          </Heading>
          <Divider marginTop="5" />
          <Center>
            <Grid
              mt="5"
              pl="5"
              pr="5"
              templateColumns="repeat(3, 1fr)"
              gap={12}
            >
              {/* TODO: 以下ダイアログ含めてpropsとかで下をループ */}
              <Box onClick={mofupiDialog.onOpen} cursor="pointer" w="100%">
                <Image
                  mb="3"
                  w="100%"
                  borderRadius="full"
                  src="icons/mofupi_icon.jpg"
                  alt="mofupi twitter icon"
                />
                <Center w="100%" fontSize="1rem">
                  mofupi
                </Center>
              </Box>
              <Box onClick={zonukoDialog.onOpen} cursor="pointer" w="100%">
                <Image
                  mb="3"
                  w="100%"
                  borderRadius="full"
                  src="icons/zonuko_icon.jpg"
                  alt="zonuko twitter icon"
                />
                <Center w="100%" fontSize="16px">
                  zonuko
                </Center>
              </Box>
              <Box onClick={ponyoDialog.onOpen} cursor="pointer" w="100%">
                <Image
                  mb="3"
                  w="100%"
                  borderRadius="full"
                  src="icons/ponyo_icon.jpg"
                  alt="ponyo twitter icon"
                />
                <Center w="100%" fontSize="16px">
                  ponyo
                </Center>
              </Box>
              <Box onClick={omakeDialog.onOpen} cursor="pointer" w="100%">
                <Image
                  mb="3"
                  w="100%"
                  borderRadius="full"
                  src="icons/omake_icon.jpg"
                  alt="omake twitter icon"
                />
                <Center w="100%" fontSize="16px">
                  omakeworld
                </Center>
              </Box>
            </Grid>
          </Center>
        </Box>
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
                    おにぎりをこよなく愛するおにぎりの妖精。
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
                  alt="zonuko twitter icon"
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

        <Modal
          isCentered
          motionPreset="slideInBottom"
          isOpen={ponyoDialog.isOpen}
          onClose={ponyoDialog.onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ponyo</ModalHeader>
            <ModalCloseButton color="black" />
            <ModalBody color="black">
              <Center>
                <Image
                  mb="3"
                  boxSize="180px"
                  borderRadius="full"
                  src="icons/ponyo_icon.jpg"
                  alt="ponyo twitter icon"
                />
              </Center>
              <Heading as="h3" mt="1" fontSize="16px">
                B級サメ映画の妖精
              </Heading>
              <Divider mt="2" />
              <Box>
                <Box>
                  <Text>
                    頭の先からつま先まで林檎な狂信者。 組み込み＆webエンジニア。
                  </Text>
                  <Text>
                    ジブリとヴァイオレットエヴァーガーデンとサメ映画と虚構新聞と車で出来ている。
                  </Text>
                </Box>
                <Box mt="5">
                  <Text>SNSリンク</Text>
                  <Text>
                    Twitter:{" "}
                    <Link href="https://twitter.com/ponyo1127">
                      https://twitter.com/ponyo1127
                    </Link>
                  </Text>
                </Box>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={ponyoDialog.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal
          isCentered
          motionPreset="slideInBottom"
          isOpen={omakeDialog.isOpen}
          onClose={omakeDialog.onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>omakeworld</ModalHeader>
            <ModalCloseButton color="black" />
            <ModalBody color="black">
              <Center>
                <Image
                  mb="3"
                  boxSize="180px"
                  borderRadius="full"
                  src="icons/omake_icon.jpg"
                  alt="omake twitter icon"
                />
              </Center>
              <Heading as="h3" mt="1" fontSize="16px">
                頭に股間の妖精
              </Heading>
              <Divider mt="2" />
              <Box>
                <Box>
                  <Text>
                    VTuberの話をしながら肉食って大豆を食べてスマブラする人。
                  </Text>
                  <Text>
                    体重1t。プログラムも書ける。
                  </Text>
                </Box>
                <Box mt="5">
                  <Text>SNSリンク</Text>
                  <Text>
                    Twitter:{" "}
                    <Link href="https://twitter.com/omakeworld">
                      https://twitter.com/omakeworld
                    </Link>
                  </Text>
                </Box>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={omakeDialog.onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};
export default About;
