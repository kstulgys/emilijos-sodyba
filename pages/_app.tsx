import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { useRouter } from "next/router";
import { useAdmin } from "store/useAdmin";
import { AdminDrawer } from "@components/adminDrawer";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  const router = useRouter();
  const setIsAdmin = useAdmin((state) => state.setIsAdmin);

  React.useEffect(() => {
    // setIsAdmin(true);
    if (router.asPath === "/admin") {
      const psw = prompt();
      if (psw === process.env.NEXT_PUBLIC_ADMIN_PWD) {
        setIsAdmin(true);
      }
      router.push("/");
      return;
    }
  }, []);

  return (
    <ChakraProvider>
      <AdminDrawer />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
