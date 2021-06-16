import React from "react";
import {
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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
// import { Header, Main, Cards, Footer, Button } from "@components";
import Head from "next/head";
import { FiCalendar, FiMessageSquare, FiMessageCircle, FiHome, FiInfo, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRouter } from "next/router";
import { useAdmin } from "store/useAdmin";

export default function About({ locale, backButtonText }) {
  //   const router = useRouter();
  //   const { locale, locales, defaultLocale } = router;
  const isAdmin = useAdmin((state) => state.isAdmin);

  return (
    <>
      <Head>
        <title>Apie | Emilijos Sodyba</title>
        <meta name="description" content="Kaimo turizmas, Emilijos Sodyba" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Stack height="100vh" fontFamily="Poppins" px={20} py={10} spacing={0}>
        <Box>
          <NavigationItem name={backButtonText} icon={FiArrowLeft} />
        </Box>
        <Stack isInline pt={28} spacing={0}>
          <Box flex={1}></Box>
          <Stack flex={1}>
            <Box>
              <Box rounded="sm" as="video" width="full" height="full" controls>
                <source src="/videos/emilijos_sodyba_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
// const createMarkup = () => ({ __html: draftToHtml(convertToRaw(editorState.getCurrentContent())) });
{
  /* <Box minH="xs" dangerouslySetInnerHTML={createMarkup()} /> */
}

function NavigationItem({ name, icon }) {
  return (
    <NextLink href="/" passHref>
      <Link
        ml="-15px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="32"
        borderWidth="1px"
        rounded="none"
        borderColor="white"
        fontSize={["sm", "2xl"]}
        bg="transparent"
        variant="outline"
        py={[4]}
        _hover={{ color: "gray.900", bg: "white" }}
        fontWeight="normal"
      >
        <Box as="span" mr={3} mb="3px">
          <Icon as={icon} fontSize="2xl" />
        </Box>
        {name}
      </Link>
    </NextLink>
  );
}

// export const getStaticProps = ({ locale, locales }) => {
//   const backButtonText = (() => {
//     if (locale === "en") {
//       return "Back";
//     }
//     if (locale === "lt") {
//       return "Atgal";
//     }
//   })();

//   return {
//     props: {
//       locale,
//       locales,
//       backButtonText,
//     },
//   };
// };

export async function getStaticProps({ params, locale, locales }) {
  //   const SSR = withSSRContext();
  //   const { data } = await SSR.API.graphql({
  //     query: getPost,
  //     variables: {
  //       id: params.id,
  //     },
  //   });

  //   return {
  //     props: {
  //       post: data.getPost,
  //     },
  //   };

  const backButtonText = (() => {
    if (locale === "en") {
      return "Back";
    }
    if (locale === "lt") {
      return "Atgal";
    }
  })();

  return {
    props: {
      locale,
      locales,
      backButtonText,
    },
  };
}

// export const getServerSideProps = ({ locale, locales }) => {
//   return {
//     props: {
//       locale,
//       locales,
//     },
//   };
// };
