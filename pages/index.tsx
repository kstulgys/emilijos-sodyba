import React from "react";
import { Spacer, Flex, AspectRatio, Stack, Box, Text, Wrap, WrapItem, Button, Icon } from "@chakra-ui/react";
// import { Header, Main, Cards, Footer, Button } from "@components";
import Head from "next/head";
import { FiCalendar, FiMessageSquare, FiMessageCircle, FiHome, FiInfo } from "react-icons/fi";

function Home() {
  return (
    <>
      <Head>
        <title>Emilijos Sodyba</title>
        <meta name="description" content="Kaimo turizmas, Emilijos Sodyba" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Box maxH="100vh" height="full" fontFamily="Poppins">
        <Box objectFit="cover" as="video" autoPlay muted loop id="myVideo" position="fixed" right={0} bottom={0} minW="full" minH="full">
          <Box as="source" src="/videos/emilijos_sodyba_video.mp4" type="video/mp4" />
          {/* Your browser does not support HTML5 video. */}
        </Box>
        <Stack spacing={0} position="fixed" height="full" color="white" width="full" bottom={0} right={0} bg="rgba(0, 0, 0, 0.75)">
          <Box px={[4, 20]} pt={32} flex={1}>
            <Box>
              <Text m={0} as="h1" fontSize="4xl" fontWeight="semibold">
                Sveiki atvykę į Emilijos sodybą
              </Text>
            </Box>
            <Box>
              <Text as="h2" fontSize="md">
                Vieta jusu poilsiui ir ramybei
              </Text>
            </Box>
          </Box>

          <Wrap px={[4, 20]} pb={[20, 32]} spacing={[4, 7]}>
            <NavigationItem name="Apie sodybą" icon={FiInfo} />
            <NavigationItem name="Nameliai" icon={FiHome} />
            <NavigationItem name="Rezervacija" icon={FiCalendar} />
            <NavigationItem name="Kontaktai" icon={FiMessageSquare} />
          </Wrap>
        </Stack>
        {/* _4d918b9428fdb69cf2b882f55ad442e1 CNAME _6bd716b4b5f67545dad387312ba1107b.xrchbtpdjs.acm-validations.aws. 
        @ ANAME d1x70vd2wxvm20.cloudfront.net 
        www CNAME d1x70vd2wxvm20.cloudfront.net */}
        {/* <Navigation />
        <Box mt={[32, 40]}>
          <Text as="h1" m="0" textAlign="center" fontSize="3xl" fontWeight="semibold">
            Sveiki atvykę į Emilijos sodybą
          </Text>
        </Box>
        <Stack flexDirection={["column", "row"]} width="full" isInline maxW="7xl" mx="auto" px="4" spacing={[0, 16]} py={[10, 20]}>
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
          <AccomodationLocation /> */}
        {/* </Box> */}
      </Box>
    </>
  );
}

function NavigationItem({ name, icon }) {
  return (
    <WrapItem width={["full", 52]}>
      <Button
        display="flex"
        alignItems="center"
        width="full"
        borderWidth="4px"
        rounded="none"
        borderColor="white"
        textTransform="uppercase"
        fontSize={["sm", "xl"]}
        bg="transparent"
        variant="outline"
        height={[12, 16]}
        _hover={{ color: "gray.900", bg: "white" }}
      >
        <Box as="span" mr={3} mb="3px">
          <Icon as={icon} fontSize="2xl" />
        </Box>
        {name}
      </Button>
    </WrapItem>
  );
}

export default Home;

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

function AccomodationLocation() {
  return (
    <AspectRatio ratio={[1, 4 / 1]}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.233975229509!2d23.756121316093502!3d54.10505582531005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e096a90d1ca70d%3A0x3791eae736d710bf!2sEmilijos%20Sodyba!5e0!3m2!1sen!2slt!4v1623000652352!5m2!1sen!2slt"
        loading="lazy"
      />
    </AspectRatio>
  );
}

function LanguageOption({ flag, lang }) {
  const onLanguageChange = () => {
    console.log();
  };

  const isActive = lang === "nnn";

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
    <Stack display={["none", "flex"]} isInline alignItems="center" spacing={1}>
      {languages.map((lang) => (
        <LanguageOption key={lang.id} {...lang} />
      ))}
    </Stack>
  );
}
