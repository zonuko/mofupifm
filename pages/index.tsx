import React from "react";
import {
  Badge,
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
  const property = {
    beds: 3,
    baths: 2,
    title: "#0は次の内容について喋りました。車とEVについて、Next.jsでPodcastのサイトを作った話、エンジニアと営業",
    date: "2020/03/19",
  };
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
        <Box mt="10">
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.date}
                </Box>
              </Box>
              <Box mt="3">
                <iframe
                  src="https://anchor.fm/mofupifm/embed/episodes/mofupi-fm0-e1d2i0m"
                  height="180px"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                >
                </iframe>
              </Box>
              <Box
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {property.title}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <LatestPodcasts /> */}
    </Container>
  );
};

export default Home;
