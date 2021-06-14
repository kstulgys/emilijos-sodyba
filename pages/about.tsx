import React from "react";
import { Spacer, Flex, AspectRatio, Stack, Box, Text, Wrap, WrapItem, Button, Icon, Link } from "@chakra-ui/react";
// import { Header, Main, Cards, Footer, Button } from "@components";
import Head from "next/head";
import { FiCalendar, FiMessageSquare, FiMessageCircle, FiHome, FiInfo, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";
import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), { ssr: false });
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function MyEditor() {
  const [editorState, setState] = React.useState(() => EditorState.createEmpty());

  return (
    <>
      <Box minH="xs" mr={20} dangerouslySetInnerHTML={{ __html: draftToHtml(convertToRaw(editorState.getCurrentContent())) }} />
      {/* {JSON.stringify(editorState, null, 4)} */}
      <Box borderWidth="1px" borderColor="gray.300" mr={20}>
        <Editor
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setState}
        />
      </Box>
    </>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>Apie | Emilijos Sodyba</title>
        <meta name="description" content="Kaimo turizmas, Emilijos Sodyba" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Stack height="100vh" fontFamily="Poppins" px={20} py={10} spacing={0}>
        <Box>
          <NavigationItem name="Atgal" icon={FiArrowLeft} />
        </Box>
        <Stack isInline pt={28} spacing={0}>
          <Box flex={1}>
            <MyEditor />
          </Box>
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
