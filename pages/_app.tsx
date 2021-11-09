import "../styles/globals.css";
import React, { useEffect } from "react";
import Head from "next/head";

import type { AppProps } from "next/app";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { particleSetting } from "../logics/paritcle";
import { DefaultSeo } from "next-seo";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "black",
        color: "white",
      },
      "#background": {
        position: "fixed",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import("particles.js").then(() => {
      // @ts-ignore
      window.particlesJS(
        "background",
        particleSetting,
      );
    });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>mofupi.fm - Podcast by mofupi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="eNAqoUzgOJ8byNb8gV7WY8uvOc0J3O7MN_VLePQPSls"
        />
      </Head>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "ja_JP",
          url: "https://mofupi-fm.vercel.app/",
          site_name: "mofupi.fm",
          description: "mofupi.fm - Podcast by mofupi",
          images: [
            {
              url: "https://mofupi-fm.vercel.app/mofupifm_large.png",
              width: 800,
              height: 600,
              alt: "mofupi.fm site logo",
            },
          ],
        }}
        twitter={{
          handle: "@mofupi",
          site: "https://mofupi-fm.vercel.app/",
          cardType: "summary_large_image",
        }}
      />
      <Box pos="fixed" width="100%" height="100%" id="background" />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
