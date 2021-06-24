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
  Image,
} from "@chakra-ui/react";
import { useAdmin } from "store/useAdmin";
import { useRouter } from "next/router";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import { getChalet, listChaletImages } from "src/graphql/queries";
import { updateChalet } from "src/graphql/mutations";

// function HomeContent() {
//   return (
//     <>
//       <Text>Hello Home</Text>
//       <Input />
//     </>
//   );
// }

function AboutContent({ asyncActionRef }) {
  return (
    <Stack>
      <Input />
      <Textarea />
    </Stack>
  );
}

function ChaletsContent({ asyncActionRef }) {
  return (
    <Stack>
      <Input />
      <Textarea />
    </Stack>
  );
}

function EnquiriesContent({ asyncActionRef }) {
  return (
    <Stack>
      <Input />
      <Textarea />
    </Stack>
  );
}

function ChaletContent({ asyncActionRef }) {
  const router = useRouter();
  const [data, setData] = React.useState<any>(null);
  const [translation, setTranslation] = React.useState<any>({});

  const onDataChange = (e) => {
    const { name, value } = e.target;
    setTranslation((prev) => ({ ...prev, [name]: value }));
  };

  console.log({ router });
  const { query, locale } = router;

  async function getData() {
    const { data: chaletData } = (await API.graphql({
      query: getChalet,
      variables: {
        id: query.id,
      },
    })) as { data: any };
    // const { data: listChaletImagesData } = await API.graphql({ query: listChaletImages });
    const { translation } = chaletData.getChalet;
    const parsed = JSON.parse(translation || "{}");
    const t = parsed[locale] || {};
    // const images = listChaletImagesData.listChaletImages.items.filter(({ chaletId }) => chaletId === query.id);
    return { ...chaletData.getChalet, t };
  }

  React.useEffect(() => {
    getData().then((data) => {
      setData(data);
      setTranslation(data.t);
    });
  }, [query.id]);

  // export type UpdateChaletInput = {
  //   id: string,
  //   translation?: string | null,
  //   calendar?: string | null,
  //   _version?: number | null,
  // };

  const updateData = async () => {
    const prevTranslations = JSON.parse(data.translation);
    const updatedTranslation = JSON.stringify({ ...prevTranslations, [locale]: { ...translation } });
    console.log({ updatedTranslation });
    const updatedData = await API.graphql({
      query: updateChalet,
      variables: {
        input: { id: query.id, translation: updatedTranslation },
      },
    });
    console.log({ updatedData });
  };

  React.useEffect(() => {
    asyncActionRef.current = updateData;
  }, [updateData]);

  console.log({ data });
  console.log({ translation });
  if (!data?.t) return null;

  return (
    <Stack>
      <Text>{query.id}</Text>
      <Text>Name</Text>
      <Input onChange={onDataChange} name="name" defaultValue={data.t.name} value={translation.name} />
      <Text>Short description</Text>
      <Textarea
        onChange={onDataChange}
        name="shortDescription"
        defaultValue={data.t.shortDescription}
        value={translation.shortDescription}
      />
      <Text>Description</Text>
      <Textarea onChange={onDataChange} name="description" defaultValue={data.t.description} value={translation.description} />
      <Text>Images</Text>
      {/* <Stack isInline>
        {data.images.map(({ id, url }) => {
          return (
            <Box boxSize={32} key={id}>
              <Image boxSize={32} src={url} objectFit="cover" />
            </Box>
          );
        })}
      </Stack> */}
      <Button>Add Image</Button>
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

function DrawerInputs({ asyncActionRef }) {
  const router = useRouter();
  // if (router.asPath === "/") return <HomeContent />;
  if (router.asPath === "/about") return <AboutContent asyncActionRef={asyncActionRef} />;
  if (router.asPath === "/chalets") return <ChaletsContent asyncActionRef={asyncActionRef} />;
  if (router.asPath === "/enquiries") return <EnquiriesContent asyncActionRef={asyncActionRef} />;
  if (router.pathname === "/chalets/[id]") return <ChaletContent asyncActionRef={asyncActionRef} />;
  return null;
}

export function AdminDrawer() {
  let isAdmin = useAdmin((state) => state.isAdmin);
  isAdmin = true;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const asyncActionRef = React.useRef(null);
  const btnRef = React.useRef();

  const handleSubmit = async () => {
    if (asyncActionRef.current) {
      setIsSubmitting(true);
      try {
        const action = asyncActionRef.current;
        await action();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

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
            <DrawerInputs asyncActionRef={asyncActionRef} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit} isLoading={isSubmitting}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
