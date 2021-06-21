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
import { FiPhone, FiMapPin, FiCalendar, FiMessageSquare, FiMessageCircle, FiHome, FiInfo, FiFacebook, FiInstagram } from "react-icons/fi";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useAdmin } from "store/useAdmin";
import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon } from "@chakra-ui/icons";

export function Navigation() {
  return (
    <Stack
      isInline
      alignItems="center"
      px="4"
      py="2"
      bg="#EBCBB7"
      color="gray.900"
      boxShadow="sm"
      position="fixed"
      top={0}
      left={0}
      width="full"
    >
      <Box flex={1}>
        <MenuDrawer />
      </Box>
      <Stack spacing={1.5} isInline alignItems="center" flex={2} justifyContent="center">
        <Box as="span" fontSize="xl">
          🌼
        </Box>
        <Text textAlign="center" fontWeight="semibold">
          Emilijos Sodyba
        </Text>
      </Stack>
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
        <DrawerContent fontFamily="Poppins">
          <DrawerCloseButton />
          <DrawerHeader px={4} borderBottom="1px solid" borderBottomColor="gray.200">
            <Stack spacing={0}>
              <Stack isInline alignItems="center">
                <Box>
                  <Icon as={FiPhone} fontSize="sm" mb={1} />
                </Box>
                <Box>
                  <Text fontSize="md" fontWeight="light">
                    +370 61110 855
                  </Text>
                </Box>
              </Stack>
              <Stack isInline alignItems="center">
                <Box>
                  <Icon as={FiMapPin} fontSize="md" mb={1} />
                </Box>
                <Box>
                  <Text fontSize="md" fontWeight="light">
                    Samanio g.12, Šadžiūnų k., Veisiejų sen., LT-67335 Lazdijų r.
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </DrawerHeader>

          <DrawerBody px={4} pt={6}>
            <Stack spacing={4}>
              <NavLink name={t.nav.about} href="/" icon={FiInfo} />
              <NavLink name={t.nav.chalets} href="/" icon={FiHome} />
              <NavLink name={t.nav.availability} href="/" icon={FiCalendar} />
              <NavLink name={t.nav.neighbourhood} href="/" icon={FiMapPin} />
              <NavLink name={t.nav.enquiries} href="/" icon={FiMessageSquare} />
            </Stack>
          </DrawerBody>
          <DrawerFooter justifyContent="flex-start" p={0}>
            <Stack width="full">
              <LanguageOptions />
              <Stack bg="gray.100" isInline justifyContent="space-evenly" py={3}>
                <Box>
                  <Icon as={FiFacebook} fontSize="4xl" strokeWidth="1" />
                </Box>
                <Box>
                  <Icon as={FiInstagram} fontSize="4xl" strokeWidth="1" />
                </Box>
              </Stack>
            </Stack>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function NavLink({ href = "/", name, icon }) {
  return (
    <NextLink href={href} passHref>
      <Link m={0} p={0} display="flex" alignItems="center" fontSize="2xl">
        <Box as="span" mr={5} pb={1}>
          <Icon as={icon} fontSize="3xl" strokeWidth="1.5" />
        </Box>
        {name}
      </Link>
    </NextLink>
  );
}

function LanguageOptions() {
  return (
    <Stack isInline alignItems="center" spacing={0} pl={2}>
      {languages.map((lang) => (
        <LanguageOption key={lang.id} {...lang} />
      ))}
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
          width="50px"
          height="50px"
          rounded="full"
          //   border={isActive ? "1px solid" : "none"}
          //   borderColor={isActive ? "gray.900" : "none"}
          //   borderWidth={isActive ? "1px" : "0px"}
          _hover={{}}
        >
          <Box as="span" fontSize="3xl" mb="-2px">
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
