/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { AppProps } from "next/app";
import {
  ChakraProvider,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import dynamic from "next/dynamic";
// const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), { ssr: false });
// import draftToHtml from "draftjs-to-html";
import { useAdmin } from "store/useAdmin";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// const CKEditor = dynamic(() => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor), { ssr: false });
// const ClassicEditor = dynamic(() => import("@ckeditor/ckeditor5-build-classic").then(ClassicEditor), { ssr: false });
// const ClassicEditor = dynamic(() => import("@ckeditor/ckeditor5-build-classic"), { ssr: false });

export function AdminDrawer() {
  const isAdmin = useAdmin((state) => state.isAdmin);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  if (!isAdmin) return null;

  return (
    <>
      <Box position="fixed" top={0} left={0} m={4} zIndex={999}>
        <Button bg="green.400" rounded="full" boxShadow="md" ref={btnRef} colorScheme="teal" onClick={onOpen}>
          +
        </Button>
      </Box>
      <Drawer size="lg" isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Page</DrawerHeader>

          <DrawerBody>
            <MyEditor />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

// function MyEditor() {
//   const [editorState, setState] = React.useState(() => EditorState.createEmpty());

//   return (
//     <>
//       {/* <Box > */}
//       <Box
//         as={Editor}
//         borderWidth="1px"
//         borderColor="gray.300"
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         editorState={editorState}
//         // toolbarClassName="toolbarClassName"
//         // wrapperClassName="wrapperClassName"
//         // editorClassName="editorClassName"
//         onEditorStateChange={setState}
//       />
//       {/* </Box> */}
//     </>
//   );
// }

function MyEditor() {
  const editorRef = React.useRef<any>();
  const [editorLoaded, setEditorLoaded] = React.useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  React.useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  const [data, setData] = React.useState("");

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={data}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setData(data);
          }}
        />
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}
