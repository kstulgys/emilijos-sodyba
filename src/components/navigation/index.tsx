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

export function Navigation() {
  return (
    <Stack isInline alignItems="center" px="4" py="2" bg="green.300" position="fixed" top={0} left={0} width="full">
      <Box flex={1}>
        <MenuDrawer />
      </Box>
      <Box flex={1.5}>
        <Text textAlign="center" fontWeight="semibold">
          Emilijos Sodyba
        </Text>
      </Box>
      <Box flex={1}></Box>
    </Stack>
  );
}

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale];

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
                  <Text fontSize="xs" fontWeight="normal">
                    +370 61110 855
                  </Text>
                </Box>
              </Stack>
              <Stack isInline alignItems="center">
                <Box pb={1}>
                  <Icon as={FiMapPin} fontSize="md" />
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight="normal">
                    Samanio g.12, Šadžiūnų k., Veisiejų sen., LT-67335 Lazdijų r.
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </DrawerHeader>

          <DrawerBody px={4} pt={6}>
            <Stack spacing={4}>
              <NavLink name={t.nav.about} href="/about" icon={FiInfo} />
              <NavLink name={t.nav.chalets} href="/chalets" icon={FiHome} />
              <NavLink name={t.nav.availability} href="/availability" icon={FiCalendar} />
              <NavLink name={t.nav.neighbourhood} href="/neighbourhood" icon={FiInfo} />
              <NavLink name={t.nav.enquiries} href="/enquiries" icon={FiMessageSquare} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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

const translations: HomeTranspations = {
  en: {
    nav: {
      about: "About",
      chalets: "Chalets",
      availability: "Availability",
      neighbourhood: "Neighbourhood",
      enquiries: "Enquiries",
    },
  },
  lt: {
    nav: {
      about: "Apie",
      chalets: "Nameliai",
      availability: "Užimtumas",
      neighbourhood: "Kaiminystė",
      enquiries: "Susisiekite",
    },
  },
};
