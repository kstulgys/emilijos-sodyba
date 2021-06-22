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
  Textarea,
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

export default function About({ t }: { t: LocaleTranslations }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  console.log({ locale, locales, defaultLocale });

  return (
    <Layout>
      <Navigation />
      <Stack pt={10} px={4}>
        <Box>
          <Text fontSize="2xl">{t.title}</Text>
        </Box>
        <Box>
          <Text whiteSpace="pre-line">{t.content}</Text>
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
  content: string;
}

interface AboutTranspations {
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

  const translations: AboutTranspations = {
    en: {
      title: "About",
      content: `The Chalet Emilija is inspired by traditional Lithuanian family values. We love great gatherings seeing close and more distant relatives and enjoy each others’ company in a tranquil but very meaningful way. We recognise that being together is an enriching experience and building bonds with our loved ones is at heart of what we do`,
    },
    lt: {
      title: "Apie",
      content:
        "Sodyba yra įsikūrusi 3 ha teritorijoje Samanio ežero įlankoje šalia Veisiejų regioninio parko – natūrali gamta, draustinio kraštovaizdis, skaidrus ežero vanduo. Penki nameliai, dvi atskiros maudyklės abi su lieptais, dvi valtys ir vandens dviratis – skirta sveciu poilsiui ir pramogoms. Vasaros laikotarpiu vienu metu gali ilsėtis 26 svečiai. \n\nNuo Druskininkų iki sodybos – 18 km \nNuo Vilniaus – 120 km",
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
