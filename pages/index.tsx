import React from "react";
import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
// import LatestPodcasts from "../components/LatestPodcasts";

const Home = () => {
  return (
    <Container pos="relative" zIndex="1" maxW={"7xl"} p="7">
      <Heading as="div">
        <Image ml="-4" src="mofupifm_mid.png" alt="mofupifm logo mid" />
        <Text fontWeight="400" fontSize="24px">
          podcast by mofupi
        </Text>
      </Heading>
      <Box mt="10">
        <Heading as="h2" marginTop="5">
          Latest Podcasts
        </Heading>
        <Divider mt="2" />
        {/* 仮エレメント */}
        <Box>
          <Center>
            <Text fontSize="30px">Coming Soon...</Text>
          </Center>
        </Box>
      </Box>
      {/* <LatestPodcasts /> */}
    </Container>
  );
};

export default Home;
