import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spacer,
  Flex,
  AspectRatio,
  Stack,
  Box,
  Text,
  Wrap,
  WrapItem,
  Button,
  Icon,
  Link,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
// import { Header, Main, Cards, Footer, Button } from "@components";
import Head from "next/head";
import { FiPhone, FiMapPin, FiCalendar, FiMessageSquare, FiMessageCircle, FiHome, FiInfo } from "react-icons/fi";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useAdmin } from "store/useAdmin";
import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon } from "@chakra-ui/icons";

export function Layout({ title = "", description = "", children }) {
  //   const router = useRouter();
  //   const { locale, locales, defaultLocale } = router;
  //   console.log({ locale, locales, defaultLocale });
  return (
    <>
      <Head>
        <title>🌼 {title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Stack alignItems="center" spacing={0}>
        <Stack maxW="md" width="full" minH="100vh" bg="white" spacing={0} pt={14}>
          {children}
        </Stack>
      </Stack>
    </>
  );
}
