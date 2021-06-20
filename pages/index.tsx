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

export default function Home({ t }: { t: LocaleTranslations }) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  console.log({ locale, locales, defaultLocale });

  return (
    <>
      <Head>
        <title>🌼 Emilijos Sodyba</title>
        <meta name="description" content="Kaimo turizmas, Emilijos Sodyba" />
      </Head>
      <Stack alignItems="center">
        <Stack maxW="sm" width="full">
          <Stack isInline alignItems="center" px="4" py="2" bg="green.500">
            <Box flex={1}>
              <MenuDrawer />
            </Box>
            <Box flex={1.5}>
              <Text textAlign="center">Emilijos Sodyba</Text>
            </Box>
            <Box flex={1}></Box>
          </Stack>
          <Stack px="4">
            <Box>
              <Text>Sveiki atvykę į Emilijos Sodybą</Text>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      {/* <Box maxH="100vh" height="full">
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
      {/* </Box>
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
              <NavigationItem name={t.nav.chalet} icon={FiHome} href="/chalets" />
              <NavigationItem name={t.nav.availability} icon={FiCalendar} href="/availability" />
              <NavigationItem name={t.nav.neighbourhood} icon={FiCalendar} href="/neighbourhood" />
              <NavigationItem name={t.nav.enquiries} icon={FiMessageSquare} href="/enquiries" />
            </Wrap>
          </Stack>
        </Stack>
        </Box> */}
    </>
  );
}

function NavLink({ href = "/", name, icon }) {
  return (
    <NextLink href={href} passHref>
      <Link m={0} p={0} display="flex" alignItems="center" fontSize="xl" fontWeight="semibold">
        <Box as="span" mr={3} pb={1}>
          <Icon as={icon} fontSize="2xl" />
        </Box>
        {name}
      </Link>
    </NextLink>
  );
}

// function NavigationItem({ name, icon, href = "/" }) {
//   return (
//     <WrapItem>
//       <NextLink href={href} passHref>
//         <Link
//           px={6}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           width="full"
//           borderWidth="1px"
//           rounded="sm"
//           borderColor="white"
//           fontSize={["sm", "2xl"]}
//           bg="transparent"
//           variant="outline"
//           py={[4]}
//           _hover={{ color: "gray.900", bg: "white" }}
//           fontWeight="normal"
//         >
//           <Box as="span" mr={3} mb="3px">
//             <Icon as={icon} fontSize="2xl" />
//           </Box>
//           {name}
//         </Link>
//       </NextLink>
//     </WrapItem>
//   );
// }

// function Navigation() {
//   return (
//     <Stack
//       height={20}
//       position="fixed"
//       bg="white"
//       zIndex="20"
//       top="0"
//       left="0"
//       width="full"
//       px="12"
//       isInline
//       alignItems="center"
//       justifyContent="space-between"
//       boxShadow="lg"
//     >
//       <Stack isInline alignItems="center" display={["none", "block"]}>
//         <Box>
//           <Text m="0">Emilijos Sodyba</Text>
//         </Box>
//       </Stack>
//       <Stack width={["full", "auto"]} isInline alignItems="center" justifyContent={["center", "flex-end"]} spacing={[0, 5]}>
//         <LanguageOptions />
//         <Box>
//           <Text m="0" fontSize="lg" fontWeight="normal">
//             +370 (611) 10 855
//           </Text>
//         </Box>
//       </Stack>
//     </Stack>
//   );
// }

// function LanguageOption({ flag, lang }) {
//   const router = useRouter();
//   const { locale, locales, defaultLocale } = router;
//   const isActive = lang === locale;

//   return (
//     <Box>
//       <NextLink href="/" locale={lang} passHref>
//         <Link
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           width="40px"
//           height="40px"
//           rounded="full"
//           border={isActive ? "1px solid" : "none"}
//           borderColor={isActive ? "white" : "none"}
//           borderWidth={isActive ? "1px" : "0px"}
//           _hover={{}}
//         >
//           <Box as="span" fontSize="2xl" mb="-2px">
//             {flag}
//           </Box>
//         </Link>
//       </NextLink>
//     </Box>
//   );
// }

// const languages = [
//   { id: 1, lang: "lt", flag: "🇱🇹" },
//   { id: 2, lang: "en", flag: "🇬🇧" },
// ];

// function LanguageOptions() {
//   return (
//     <Stack display={["none", "flex"]} isInline alignItems="center">
//       {languages.map((lang) => (
//         <LanguageOption key={lang.id} {...lang} />
//       ))}
//     </Stack>
//   );
// }

interface LocaleTranslations {
  title: string;
  subtitle: string;
  nav: {
    about: string;
    chalets: string;
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
        chalets: "Chalets",
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
        chalets: "Nameliai",
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

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button variant="unstyled" ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon fontSize="4xl" />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader px={4} borderBottom="1px solid" borderBottomColor="gray.200">
            <Stack spacing={0}>
              <Stack isInline alignItems="center">
                <Box pb={1}>
                  <Icon as={FiPhone} fontSize="sm" />
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight="light">
                    +370 61110 855
                  </Text>
                </Box>
              </Stack>
              <Stack isInline alignItems="center">
                <Box pb={1}>
                  <Icon as={FiMapPin} fontSize="md" />
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight="light">
                    Samanio g.12, Šadžiūnų k., Veisiejų sen., LT-67335 Lazdijų r.
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </DrawerHeader>

          <DrawerBody px={4} pt={4}>
            <Stack spacing={4}>
              <NavLink name="About" href="/about" icon={FiInfo} />
              <NavLink name="Chalets" href="/chalets" icon={FiHome} />
              <NavLink name="Availability" href="/availability" icon={FiCalendar} />
              <NavLink name="Neighbourhood" href="/neighbourhood" icon={FiInfo} />
              <NavLink name="Enquiries" href="/enquiries" icon={FiMessageSquare} />
            </Stack>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
