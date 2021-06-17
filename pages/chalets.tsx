import React from "react";
import { Spacer, Flex, AspectRatio, Stack, Box, Text } from "@chakra-ui/react";
// import { Header, Main, Cards, Footer, Button } from "@components";
import Head from "next/head";
import { FiCalendar, FiMessageSquare, FiMessageCircle, FiHome, FiInfo, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";

import { useRouter } from "next/router";
import { useAdmin } from "store/useAdmin";

export default function Chalets({ locale, backButtonText }) {
  //   const router = useRouter();
  const isAdmin = useAdmin((state) => state.isAdmin);

  return (
    <>
      <Head>
        <title>Nameliai | Emilijos Sodyba</title>
        <meta name="description" content="Kaimo turizmas, Emilijos Sodyba" />
      </Head>
      <Stack height="100vh" px={20} py={10} spacing={0}>
        <Text>Nameliai</Text>
      </Stack>
    </>
  );
}
