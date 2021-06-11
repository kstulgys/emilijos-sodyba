import React from "react";
import { Spacer, Flex, AspectRatio, Stack, Box, Text, Wrap, WrapItem, Button, Icon, Link } from "@chakra-ui/react";
// import { Header, Main, Cards, Footer, Button } from "@components";
import Head from "next/head";
import { FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Emilijos Sodyba | Kontaktai</title>
        <meta name="description" content="Kaimo turizmas, Emilijos Sodyba" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Stack height="100vh" fontFamily="Poppins">
        <Box flex={1} pl={[16]} py="10">
          <Box>
            <NavigationItem name="Atgal" icon={FiArrowLeft} />
          </Box>
        </Box>
        <Box>
          <AccomodationLocation />
        </Box>
      </Stack>
    </>
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

function NavigationItem({ name, icon }) {
  return (
    <NextLink href="/" passHref>
      <Link
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
