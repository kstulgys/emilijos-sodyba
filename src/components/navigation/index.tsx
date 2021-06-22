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
} from "@chakra-ui/react";
// import { Header, Main, Cards, Footer, Button } from "@components";
import Head from "next/head";
import { FiPhone, FiArrowLeft, FiHome, FiMapPin, FiCalendar, FiMessageSquare, FiMessageCircle, FiInfo } from "react-icons/fi";
import NextLink from "next/link";
import { Router, useRouter } from "next/router";
import { useAdmin } from "store/useAdmin";
import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon } from "@chakra-ui/icons";

export function Navigation() {
  const router = useRouter();
  const { locale, locales, defaultLocale, asPath } = router;
  const showArrowLeft = asPath !== "/";

  return (
    <Stack
      isInline
      alignItems="center"
      px={4}
      py={3}
      bg="#EBCBB7"
      color="gray.900"
      boxShadow="sm"
      position="fixed"
      top={0}
      left={0}
      width="full"
    >
      <Stack isInline flex={1} alignItems="center" justifyContent="flex-start">
        {showArrowLeft && (
          <Box>
            <Button variant="unstyled" onClick={() => router.push("/")}>
              <Icon as={FiArrowLeft} fontSize="3xl" />
            </Button>
          </Box>
        )}
      </Stack>
      <Stack spacing={1.5} isInline alignItems="center" flex={2} justifyContent="center">
        <Box as="span" fontSize="xl">
          🌼
        </Box>
        <NextLink href="/" passHref>
          <Link textAlign="center" fontWeight="semibold">
            Emilijos Sodyba
          </Link>
        </NextLink>
      </Stack>
      <Stack isInline flex={1} justifyContent="flex-end">
        <MenuDrawer />
      </Stack>
    </Stack>
  );
}

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const router = useRouter();
  const { locale, locales, defaultLocale, asPath } = router;
  const t = translations[locale];

  return (
    <>
      <Button variant="unstyled" ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon fontSize="4xl" />
      </Button>
      <Drawer size="xs" isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
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
              <NavLink name={t.nav.about} href="/about" icon={FiInfo} />
              <NavLink name={t.nav.chalets} href="/chalets" icon={FiHome} />
              <NavLink name={t.nav.availability} href="/availability" icon={FiCalendar} />
              <NavLink name={t.nav.neighbourhood} href="/neighbourhood" icon={FiMapPin} />
              <NavLink name={t.nav.enquiries} href="/enquiries" icon={FiMessageSquare} />
            </Stack>
            <Stack isInline ml="-2">
              <LanguageOptions />
            </Stack>
          </DrawerBody>
          <DrawerFooter justifyContent="flex-start" p={0}>
            <Stack width="full">
              <Stack bg="gray.100" isInline justifyContent="space-evenly" py={3}>
                <Box boxSize={10}>
                  <Link href="https://www.facebook.com/Kaimo-turizmas-Emilijos-sodyba-1123021504414978" isExternal>
                    <Image src="/icons/fb-icon.svg" />
                  </Link>
                </Box>
                <Box boxSize={10}>
                  <Link href="https://www.instagram.com/emilijos_sodyba" isExternal>
                    <Image src="/icons/insta-icon.svg" />
                  </Link>
                </Box>
              </Stack>
            </Stack>
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
        <Box as="span" mr={4} pb={1}>
          <Icon as={icon} fontSize="3xl" strokeWidth="1.5" />
        </Box>
        {name}
      </Link>
    </NextLink>
  );
}

function LanguageOptions() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <Stack isInline alignItems="center" spacing={0}>
      {locales.map((locale) => (
        <LanguageOption key={locale} locale={locale} />
      ))}
    </Stack>
  );
}

function LanguageOption({ locale }) {
  const router = useRouter();
  const { locale: currentLoacale, defaultLocale } = router;
  const isActive = locale === currentLoacale;
  const { asPath } = router;

  const flag = {
    lt: "🇱🇹",
    en: "🇬🇧",
  };

  return (
    <Box>
      <NextLink href={`/${locale}${asPath}`} locale={locale} passHref>
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
            {flag[locale]}
          </Box>
        </Link>
      </NextLink>
    </Box>
  );
}

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
