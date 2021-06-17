import React from "react";
import { Spacer, Flex, AspectRatio, Stack, Box, Text, Wrap, WrapItem, Button, Icon, Link } from "@chakra-ui/react";
// import { Header, Main, Cards, Footer, Button } from "@components";
import Head from "next/head";
import { FiCalendar, FiMessageSquare, FiMessageCircle, FiHome, FiInfo } from "react-icons/fi";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useAdmin } from "store/useAdmin";

export default function Admin() {
  const router = useRouter();
  const setIsAdmin = useAdmin((state) => state.setIsAdmin);

  React.useLayoutEffect(() => {
    // router.prefetch("/");
    // setIsAdmin(true);
    const psw = prompt();
    if (psw === process.env.NEXT_PUBLIC_ADMIN_PWD) {
      setIsAdmin(true);
      router.push("/");
    }
  }, []);

  return null;
}
