import React from "react";
import { Spacer, Flex, AspectRatio, Stack, Box, Text, Wrap, WrapItem, Button, Icon, Link } from "@chakra-ui/react";
// import { Header, Main, Cards, Footer, Button } from "@components";
import Head from "next/head";
import { FiCalendar, FiMessageSquare, FiMessageCircle, FiHome, FiInfo } from "react-icons/fi";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useAdmin } from "store/useAdmin";

export default function Home({ t }: { t: LocaleTranslations }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  console.log({ locale, locales, defaultLocale });

  return (
    <>
      <Head>
        <title>🌼 Emilijos Sodyba</title>
        <meta name="description" content="Kaimo turizmas, Emilijos Sodyba" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Box maxH="100vh" height="full" fontFamily="Poppins">
        <Box
          display={["none", "block"]}
          objectFit="cover"
          as="video"
          autoPlay
          muted
          loop
          id="myVideo"
          position="fixed"
          right={0}
          bottom={0}
          minW="full"
          minH="full"
        >
          <Box as="source" src="/videos/esodyba-landing-video.mp4" type="video/mp4" />
          {/* Your browser does not support HTML5 video. */}
        </Box>
        <Stack spacing={0} position="fixed" height="full" color="white" width="full" bottom={0} right={0} bg="rgba(0, 0, 0, 0.75)">
          <Stack justifyContent="flex-end" isInline px={[4, 16]} py={[4, 8]}>
            <Box>
              <LanguageOptions />
            </Box>
          </Stack>
          <Stack px={[4, 20]} spacing={0} justifyContent="center" height="full" pb={[10, 20]}>
            <Box pb={[16]}>
              <Text textAlign={["center", "left"]} m={0} as="h1" fontSize={["2xl", "6xl"]} fontWeight="normal">
                {t.title}
              </Text>
              <Box>
                <Text textAlign={["center", "left"]} as="h2" fontSize={["md", "xl"]}>
                  {t.subtitle}
                </Text>
              </Box>
              <Box mt={14}>
                <Text textAlign={["center", "left"]} as="h2" fontSize={["md", "xl"]}>
                  +370 61110 855
                </Text>
              </Box>
              <Box>
                <Text textAlign={["center", "left"]} as="h2" fontSize={["md", "xl"]}>
                  Samanio g.12, Šadžiūnų k., Veisiejų sen., LT-67335 Lazdijų r.
                </Text>
              </Box>
            </Box>

            <Wrap spacing={[4, 8]} display={["none", "flex"]}>
              <NavigationItem name={t.nav.about} icon={FiInfo} href="/about" />
              <NavigationItem name={t.nav.chalet} icon={FiHome} />
              <NavigationItem name={t.nav.availability} icon={FiCalendar} />
              <NavigationItem name={t.nav.neighbourhood} icon={FiCalendar} />
              <NavigationItem name={t.nav.enquiries} icon={FiMessageSquare} href="/contacts" />
            </Wrap>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

function NavigationItem({ name, icon, href = "/" }) {
  return (
    <WrapItem>
      <NextLink href={href} passHref>
        <Link
          px={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="full"
          borderWidth="1px"
          rounded="sm"
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
    </WrapItem>
  );
}

function Navigation() {
  return (
    <Stack
      height={20}
      position="fixed"
      bg="white"
      zIndex="20"
      top="0"
      left="0"
      width="full"
      px="12"
      isInline
      alignItems="center"
      justifyContent="space-between"
      boxShadow="lg"
    >
      <Stack isInline alignItems="center" display={["none", "block"]}>
        <Box>
          <Text m="0">Emilijos Sodyba</Text>
        </Box>
      </Stack>
      <Stack width={["full", "auto"]} isInline alignItems="center" justifyContent={["center", "flex-end"]} spacing={[0, 5]}>
        <LanguageOptions />
        <Box>
          <Text m="0" fontSize="lg" fontWeight="normal">
            +370 (611) 10 855
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
}

function LanguageOption({ flag, lang }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const isActive = lang === locale;

  return (
    <Box>
      <NextLink href="/" locale={lang} passHref>
        <Link
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="40px"
          height="40px"
          rounded="full"
          border={isActive ? "1px solid" : "none"}
          borderColor={isActive ? "white" : "none"}
          borderWidth={isActive ? "1px" : "0px"}
          _hover={{}}
        >
          <Box as="span" fontSize="2xl" mb="-2px">
            {flag}
          </Box>
        </Link>
      </NextLink>
    </Box>
  );
}

const languages = [
  { id: 1, lang: "lt", flag: "🇱🇹" },
  { id: 2, lang: "en", flag: "🇬🇧" },
];

function LanguageOptions() {
  return (
    <Stack display={["none", "flex"]} isInline alignItems="center">
      {languages.map((lang) => (
        <LanguageOption key={lang.id} {...lang} />
      ))}
    </Stack>
  );
}

interface LocaleTranslations {
  title: string;
  subtitle: string;
  nav: {
    about: string;
    chalet: string;
    availability: string;
    neighbourhood: string;
    enquiries: string;
  };
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
      nav: {
        about: "About",
        chalet: "Chalets",
        availability: "Availability",
        neighbourhood: "Neighbourhood",
        enquiries: "Enquiries",
      },
    },
    lt: {
      title: "Sveiki atvykę į Emilijos Sodybą",
      subtitle: "Geriausia vieta jūsų poilsiui",
      nav: {
        about: "Apie",
        chalet: "Nameliai",
        availability: "Užimtumas",
        neighbourhood: "Kaiminystė",
        enquiries: "Susisiekite",
      },
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
