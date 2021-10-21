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
    <Container pos="relative" zIndex="1" maxW={"7xl"} p="12" pl="0">
      <Heading as="div">
        <Image src="mofupifm_mid.png" alt="mofupifm logo mid" />
        <Text ml="3" fontWeight="400" fontSize="24px">
          podcast by mofupi
        </Text>
      </Heading>
      <Box ml="3">
        <Heading as="h2" marginTop="5">
          Latest Podcasts
        </Heading>
        <Divider marginTop="5" />
        {/* 仮エレメント */}
        <Box mt="5">
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
