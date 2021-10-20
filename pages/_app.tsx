import "../styles/globals.css";
import React, { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { particleSetting } from "../logics/paritcle";

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
      <Box pos="fixed" width="100%" height="100%" id="background" />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
