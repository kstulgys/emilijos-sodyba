import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AdminDrawer } from "@components/adminDrawer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          </Head>
          <Box fontFamily="Poppins" bg="gray.100" minH="100vh">
            <AdminDrawer />
            <Component {...pageProps} />
          </Box>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
