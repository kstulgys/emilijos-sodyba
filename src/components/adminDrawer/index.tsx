import React from "react";
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
  Stack,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { useAdmin } from "store/useAdmin";
import { useRouter } from "next/router";

// function HomeContent() {
//   return (
//     <>
//       <Text>Hello Home</Text>
//       <Input />
//     </>
//   );
// }

function AboutContent() {
  return (
    <Stack>
      <Input />
      <Textarea />
    </Stack>
  );
}

function ChaletsContent() {
  return (
    <Stack>
      <Input />
      <Textarea />
    </Stack>
  );
}

function EnquiriesContent() {
  return (
    <Stack>
      <Input />
      <Textarea />
    </Stack>
  );
}

{
  /* <NavigationItem name={t.nav.about} icon={FiInfo} href="/about" />
<NavigationItem name={t.nav.chalet} icon={FiHome} href="/chalets" />
<NavigationItem name={t.nav.availability} icon={FiCalendar} href="/" />
<NavigationItem name={t.nav.neighbourhood} icon={FiCalendar} href="/" />
<NavigationItem name={t.nav.enquiries} icon={FiMessageSquare} href="/enquiries" /> */
}

function DrawerInputs() {
  const router = useRouter();
  // if (router.asPath === "/") return <HomeContent />;
  if (router.asPath === "/about") return <AboutContent />;
  if (router.asPath === "/chalets") return <ChaletsContent />;
  if (router.asPath === "/enquiries") return <EnquiriesContent />;
  return null;
}

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
            <DrawerInputs />
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
