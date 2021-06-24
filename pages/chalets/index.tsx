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
import awsExports from "../../src/aws-exports";
// import { createPost } from "../src/graphql/mutations";
import { listChalets, listChaletImages } from "../../src/graphql/queries";
import { restore } from "nock/types";
// import { ChaletImage } from "src/models";
Amplify.configure({ ...awsExports, ssr: true });

export default function Chalets({ tl, chalets, listChaletImagesData }: any) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  console.log({ locale, locales, defaultLocale });
  console.log({ chalets });
  return (
    <Layout>
      <Stack px={4}>
        <Text fontSize="2xl">{tl.title}</Text>
        <Stack spacing={6}>
          {chalets.map(({ t, id, images }) => {
            return (
              <LinkBox key={id}>
                <NextLink href={`/chalets/${id}`} passHref>
                  <LinkOverlay>
                    <Stack>
                      {/* <Image objectFit="cover" rounded="xl" height={64} src={images[0].url} /> */}
                      <Text>{t.name}</Text>
                      <Text>{t.shortDescription}</Text>
                    </Stack>
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            );
          })}
          <Box as="pre" fontSize="xs">
            {JSON.stringify(chalets, null, 4)}
            {JSON.stringify(listChaletImagesData, null, 4)}
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

const translationsLocal = {
  lt: {
    title: "Nameliai",
  },
  en: {
    title: "Chalets",
  },
};

export async function getStaticProps({ req, locale }) {
  const SSR = withSSRContext({ req });
  const { data: listChaletsData } = await SSR.API.graphql({ query: listChalets });
  // const { data: listChaletImagesData } = await SSR.API.graphql({ query: listChaletImages });
  console.log({ listChaletsData });

  const chalets = listChaletsData.listChalets.items.reduce((acc, next) => {
    const { _deleted, translation, id, ...rest } = next;
    if (_deleted) return acc;

    const parsed = JSON.parse(translation || "{}");
    const t: LocaleTranslations = parsed[locale] || {};
    // const images = listChaletImagesData.listChaletImages.items.filter(({ chaletId }) => chaletId === id);
    return [...acc, { ...next, t }];
  }, []);

  const tl = translationsLocal[locale];
  return {
    props: {
      chalets,
      tl,
    },
  };
}
