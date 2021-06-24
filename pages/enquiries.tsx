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

export default function Enquiries({ t }: { t: LocaleTranslations }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  console.log({ locale, locales, defaultLocale });

  return (
    <Layout>
      <Stack px={4}>
        <Text fontSize="2xl">{t.title}</Text>
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
      title: "Enquiries",
      content: `The Chalet Emilija is inspired by traditional Lithuanian family values. We love great gatherings seeing close and more distant relatives and enjoy each others’ company in a tranquil but very meaningful way. We recognise that being together is an enriching experience and building bonds with our loved ones is at heart of what we do`,
    },
    lt: {
      title: "Susisiekite",
      content: `Sodyba yra įsikūrusi 3 ha teritorijoje Samanio ežero įlankoje šalia Veisiejų regioninio parko – natūrali gamta, draustinio kraštovaizdis, skaidrus ežero vanduo. Penki nameliai, dvi atskiros maudyklės abi su lieptais, dvi valtys ir vandens dviratis – skirta sveciu poilsiui ir pramogoms. Vasaros laikotarpiu  vienu metu gali ilsėtis 26 svečiai. Nuo Druskininkų iki sodybos – 18 km. Nuo Vilniaus – 120 km`,
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
