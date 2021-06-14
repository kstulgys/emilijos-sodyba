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
  Input,
  Textarea,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
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

      <Stack height="100vh" fontFamily="Poppins" spacing={0}>
        <Stack isInline flex={1} spacing={0}>
          <Stack flex={1}>
            <Stack px={[28]} py="10" isInline alignItems="center" justifyContent="space-between">
              <NavigationItem name="Atgal" icon={FiArrowLeft} />
              <Stack isInline>
                <Text m={0}>Roma:</Text>
                <Text>+370 (611) 10 855</Text>
              </Stack>
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              <Stack as="form" spacing={5} width="full" px={[28]} pt={20}>
                <Box py={6}>
                  <Text as="h1" textAlign="center" fontSize="3xl">
                    Susisiekite / Contact
                  </Text>
                </Box>
                <Box>
                  <FormControl id="email">
                    <FormLabel fontSize="sm">El. paštas / Email</FormLabel>
                    <Input fontSize="md" type="email" rounded="sm" size="lg" borderColor="gray.900" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="message">
                    <FormLabel fontSize="sm">Žinutė / Message</FormLabel>
                    <Textarea fontSize="md" type="text" rounded="sm" size="lg" borderColor="gray.900" />
                  </FormControl>
                </Box>
                <Box width="full">
                  <Button
                    isDisabled={true}
                    size="lg"
                    variant="outline"
                    rounded="sm"
                    borderColor="gray.900"
                    color="gray.900"
                    _hover={{ bg: "gray.900", color: "white" }}
                    fontWeight="normal"
                    fontSize="md"
                  >
                    Siųsti / Send
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Box flex={1}>
            <Box
              as="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.233975229509!2d23.756121316093502!3d54.10505582531005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e096a90d1ca70d%3A0x3791eae736d710bf!2sEmilijos%20Sodyba!5e0!3m2!1sen!2slt!4v1623000652352!5m2!1sen!2slt"
              loading="lazy"
              height="full"
              width="full"
            />
          </Box>
        </Stack>
      </Stack>
    </>
  );
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
