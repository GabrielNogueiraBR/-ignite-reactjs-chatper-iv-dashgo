import React from "react";
import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // resetCSS - Limpa todas as configurações nativas do HTML, ex: padding no body, margin e etc.
    // resetCSS -> default da biblioteca já é true, pode ser omitido
    <ChakraProvider theme={theme} resetCSS>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
