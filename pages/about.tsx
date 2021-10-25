import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Author from "../components/Author";

const defaultAuthors = [
  {
    name: "mofupi",
    title: "おにぎりの妖精",
    iconName: "mofupi_icon",
    description:
      "おにぎりをこよなく愛するおにぎりの妖精。\nハンバーガーも好きらしい。\nインフラ関連のエンジニア。Windowsサーバーに詳しい。",
    snsLinks: [{ url: "https://twitter.com/mofupi", type: "Twitter" }],
  },
  {
    name: "zonuko",
    title: "このサイト作った人",
    iconName: "zonuko_icon",
    description:
      "このサイト(勝手に)作った人。\n格ゲーとかSTGとか音ゲーとか好き。\n 今はWeb関連のエンジニアだが、もともとなんでもやってたのでデスクトップアプリとかDLL作成とかもできる(できた)。",
    snsLinks: [{ url: "https://twitter.com/nuhera", type: "Twitter" }, {
      url: "https://twitter.com/zonuko",
      type: "Twitter",
    }],
  },
  {
    name: "ponyo",
    title: "B級サメ映画の妖精",
    iconName: "ponyo_icon",
    description:
      "頭の先からつま先まで林檎な狂信者。 組み込み＆webエンジニア。\nジブリとヴァイオレットエヴァーガーデンとサメ映画と虚構新聞と車で出来ている。",
    snsLinks: [{ url: "https://twitter.com/ponyo1127", type: "Twitter" }],
  },
  {
    name: "omakeworld",
    title: "頭に股間の妖精",
    iconName: "omake_icon",
    description: "VTuberの話をしながら肉食って大豆を食べてスマブラする人。\n体重1t。プログラムも書ける。",
    snsLinks: [{ url: "https://twitter.com/omakeworld", type: "Twitter" }],
  },
  {
    name: "dckkkk",
    title: "ラブライブおじさんの妖精",
    iconName: "dckkkk_icon",
    description: "アトリエをするやきうのおにいちゃん。\nsonyをこよなく愛するsony信者。あとARIA。",
    snsLinks: [{ url: "https://twitter.com/dckkkk", type: "Twitter" }],
  },
  {
    name: "かずみん",
    title: "謎の妖精",
    iconName: "kazumin_icon",
    description: "脱出ゲーム主催したり旅行業の資格持ってたり危険物取扱の資格持ってたりIQ145だったりする人。\nわからん…怖…何者…？",
    snsLinks: [{ url: "https://twitter.com/ooti_kazumi", type: "Twitter" }, {
      type: "かずみんぐすーん",
      url: "https://kazumin-mgn.com/kazmingsoon/",
    }],
  },
];

const About = () => {
  const [authors, _] = useState([...defaultAuthors]);

  return (
    <>
      <Head>
        <title>About: mofupi.fm - Podcast by mofupi</title>
      </Head>

      <NextSeo
        title="About: mofupi.fm - Podcast by mofupi"
        description="About Podcast and Authors"
      />

      <Container pos="relative" zIndex="1" maxW={"7xl"} p="7">
        <Heading as="div">
          <Image ml="-4" src="mofupifm_small.png" alt="mofupifm logo mid" />
          <Text fontWeight="400" fontSize="24px">
            about mofupi.fm
          </Text>
        </Heading>
        <Box mt="10">
          <Heading as="h2" marginTop="5">
            About
          </Heading>
          <Divider marginTop="2" />
          {/* 仮エレメント */}
          <Box mt="5" p="12" pt="2">
            <Text fontSize="24px">
              インフラエンジニアなmofupiと愉快な仲間たちがその時その時でなにか楽しそうなことをしゃべる番組です。
            </Text>
          </Box>
          <Heading as="h2" mt="5">
            Authors
          </Heading>
          <Divider mt="2" />
          <Box>
            <Grid
              mt="5"
              templateColumns="repeat(3, 1fr)"
              gap={3}
            >
              {authors.map((author) => <Author {...author} />)}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default About;
