import Head from 'next/head'
import Image from 'next/image'
import { Text } from '@chakra-ui/layout'
import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import DarkModeSwitch from 'components/ui/DarkModeSwitch'
import BaseLayout from 'components/layouts/BaseLayout';
import Header from 'components/sections/Header';

import { Flex } from '@chakra-ui/react';

export default function Home() {

  const { colorMode } = useColorMode();
  const backgroundColor = useColorModeValue("gray.50", "gray.900");

  return (
    <>
      <BaseLayout backgroundColor={backgroundColor}>
        <Flex height="100vh"
              flexDirection="column">
          <Text height="900px">Eren Dere</Text>                                                                                                                                           
        </Flex>                                                                                                               
      </BaseLayout>
    </>
  )
}
