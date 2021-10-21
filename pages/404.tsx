import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Custom404() {
  const onigiriNum = Math.floor(Math.random() * 7) + 1;
  return (
    <>
      <Head>
        <title>404 Not Found: mofupi.fm - Podcast by mofupi</title>
      </Head>

      <NextSeo noindex={true} />

      <Container
        pos="relative"
        zIndex="1"
        maxW={"7xl"}
        p="12"
        pl="0"
      >
        <Heading as="div">
          <Image
            ml="auto"
            mr="auto"
            src="mofupifm_small.png"
            alt="mofupifm logo mid"
          />

          <Text
            mt="5"
            as="h1"
            textAlign="center"
            ml="auto"
            mr="auto"
            fontSize="30px"
          >
            404 - Page Not Found
          </Text>
        </Heading>
        <Box>
          <Image
            maxW="500"
            mt="5"
            ml="auto"
            mr="auto"
            src={`404/onigiri_${onigiriNum}.jpg`}
            alt="mofupifm logo mid"
          />
          <Text
            mt="5"
            textAlign="center"
            ml="auto"
            mr="auto"
            fontWeight="bold"
            fontSize="25px"
            className="gaming"
          >
            Onigiri Action!!
          </Text>
        </Box>
      </Container>
    </>
  );
}
