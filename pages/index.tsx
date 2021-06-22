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
import { Layout } from "@components/layout";
import { Navigation } from "@components/navigation";

export default function Home({ t }: { t: LocaleTranslations }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  console.log({ locale, locales, defaultLocale });

  return (
    <Layout>
      <Navigation />
      <Stack pt={10}>
        <Box mb={8} px="4">
          <Text mb={2} fontSize="3xl" textAlign="center" as="h1" fontWeight="normal" lineHeight="short">
            {t.title}
          </Text>
          <Text textAlign="center" as="h3">
            {t.subtitle}
          </Text>
        </Box>
        <Box as="video" width="full" controls poster="/images/video_placeholder.png">
          <Box as="source" src="/videos/emilijos_sodyba_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      </Stack>
    </Layout>
  );
}

interface LocaleTranslations {
  title: string;
  subtitle: string;
}

interface HomeTranspations {
  en: LocaleTranslations;
  lt: LocaleTranslations;
}

export async function getStaticProps({ params, locale, locales }) {
  //   const SSR = withSSRContext();
  //   const { data } = await SSR.API.graphql({
  //     query: getPost,
  //     variables: {
  //       id: params.id,
  //     },
  //   });

  const translations: HomeTranspations = {
    en: {
      title: "Welcome to chalet Emilija",
      subtitle: "Family holiday in the country",
    },
    lt: {
      title: "Sveiki atvykę į Emilijos Sodybą",
      subtitle: "Geriausia vieta jūsų poilsiui",
    },
  };

  const t: LocaleTranslations = translations[locale];

  return {
    props: {
      locale,
      locales,
      t,
    },
  };
}
