import { Wrap } from "@chakra-ui/react";
import React from "react";
import LatestPodcastCard from "./LatestPodcastCard";

// TODO: podcast情報の配列をpropsで受けること
export default function LatestPodcasts() {
  return (
    <Wrap spacing="30px" marginTop="5">
      <LatestPodcastCard />
    </Wrap>
  );
}
