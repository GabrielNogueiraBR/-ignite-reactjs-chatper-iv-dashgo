import React from "react";
import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // resetCSS - Limpa todas as configurações nativas do HTML, ex: padding no body, margin e etc.
    // resetCSS -> default da biblioteca já é true, pode ser omitido
    <ChakraProvider theme={theme} resetCSS> 
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
