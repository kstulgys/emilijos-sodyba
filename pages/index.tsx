import React from "react";
import { Spacer, Flex, AspectRatio, Stack, Box, Text } from "@chakra-ui/react";
import { Header, Main, Cards, Footer, Button } from "@components";
import Head from "next/head";
import { withTranslation, i18n } from "@i18n";

export function Home({ t }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Box minH="100vh" width="full" fontFamily="Poppins">
        <Navigation />
        <Box mt={40}>
          <Text m="0" textAlign="center" fontSize="3xl" fontWeight="semibold">
            Sveiki atvyke i Emilijos sodyba
          </Text>
        </Box>
        <Stack width="full" isInline maxW="7xl" mx="auto" px="4" spacing={16} py={20}>
          <Box width="full">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Box>
          <Box width="full">
            <AspectRatio width="full" ratio={16 / 9}>
              <iframe title="villa video" src="/videos/emilijos_sodyba_video.mp4" allowFullScreen />
            </AspectRatio>
          </Box>
        </Stack>
        <Box>
          <AccomodationLocation />
        </Box>
      </Box>
    </>
  );
}

const I18NExample = withTranslation(["common", "home"])(Home);
export default I18NExample;

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
      <Stack isInline alignItems="center">
        <Box>
          <Text m="0"> Emilijos Sodyba</Text>
        </Box>
      </Stack>
      <Stack isInline alignItems="center" spacing={5}>
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

function AccomodationLocation() {
  return (
    <AspectRatio ratio={4 / 1}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.233975229509!2d23.756121316093502!3d54.10505582531005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e096a90d1ca70d%3A0x3791eae736d710bf!2sEmilijos%20Sodyba!5e0!3m2!1sen!2slt!4v1623000652352!5m2!1sen!2slt"
        loading="lazy"
      />
    </AspectRatio>
  );
}

function LanguageOption({ flag, lang }) {
  const onLanguageChange = () => {
    i18n.changeLanguage(lang);
  };

  const isActive = lang === (i18n.language || "lt");

  return (
    <Box>
      <Button
        variant="unstyled"
        alignItems="center"
        justifyContent="center"
        width="35px"
        rounded="full"
        border={isActive ? "2px solid" : "none"}
        borderColor={isActive ? "black" : "none"}
        borderWidth={isActive ? "2px" : "0px"}
        onClick={onLanguageChange}
      >
        <Box as="span" fontSize="2xl">
          {flag}
        </Box>
      </Button>
    </Box>
  );
}

const languages = [
  { id: 0, lang: "en", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: 1, lang: "ru", flag: "🇷🇺" },
  { id: 2, lang: "lt", flag: "🇱🇹" },
];

function LanguageOptions() {
  return (
    <Stack isInline alignItems="center" spacing={1}>
      {languages.map((lang) => (
        <LanguageOption key={lang.id} {...lang} />
      ))}
    </Stack>
  );
}
