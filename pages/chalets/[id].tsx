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
  Image,
  LinkBox,
  LinkOverlay,
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
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
// import { createPost } from "../src/graphql/mutations";
import { listChalets, listChaletImages, getChalet } from "../../src/graphql/queries";
import { restore } from "nock/types";
// import { ChaletImage } from "src/models";

export default function Chalet({ t, chalet }: any) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  console.log({ locale, locales, defaultLocale });
  return (
    <Layout>
      <Stack px={4}>
        <Text>Hello</Text>
        <Stack>
          <Box as="pre" fontSize="xs">
            {JSON.stringify(chalet, null, 4)}
          </Box>
        </Stack>
      </Stack>
    </Layout>
  );
}

interface LocaleTranslations {
  title: string;
  shortDescription: string;
  description: string;
}

interface ListChaletsTranslations {
  en: LocaleTranslations;
  lt: LocaleTranslations;
}

const translations = {
  lt: {
    title: "Nameliai",
  },
  en: {
    title: "Chalets",
  },
};

export async function getStaticPaths({ req, locale }) {
  const SSR = withSSRContext({ req });
  const { data: listChaletsData } = await SSR.API.graphql({ query: listChalets });

  const paths = listChaletsData.listChalets.items.reduce((acc, next) => {
    const { _deleted, id } = next;
    if (_deleted) return acc;
    return [...acc, { params: { id } }];
  }, []);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ req, locale, params }) {
  const SSR = withSSRContext({ req });
  const { data: chaletData } = await SSR.API.graphql({
    query: getChalet,
    variables: {
      id: params.id,
    },
  });
  // const { data: listChaletImagesData } = await SSR.API.graphql({ query: listChaletImages });
  const { translation } = chaletData.getChalet;
  const parsed = JSON.parse(translation || "{}");
  const t: LocaleTranslations = parsed[locale] || {};
  // const images = listChaletImagesData.listChaletImages.items.filter(({ chaletId }) => chaletId === params.id);
  const chalet = { ...chaletData.getChalet, t };

  return {
    props: { chalet },
    revalidate: 1,
  };
}
