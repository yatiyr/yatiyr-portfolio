import { Flex, useProps, useColorModeValue } from '@chakra-ui/react';
import Footer from 'components/sections/Footer';
import Header from 'components/sections/Header';
import DarkModeSwitch from 'components/ui/DarkModeSwitch';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import ViewApi from 'lib/api/views';
import axios from 'axios';

const BaseLayout = (props) => {

  const { user, loading, children } = props;
  const iconBaseColor   = useColorModeValue("gray.900","gray.50");
  const iconHoverColor  = useColorModeValue("black", "white");
  const iconActiveColor = useColorModeValue("black", "white");
  const [showHeader, setShowHeader] = useState(true);


  const getClientLoc = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');

    const viewData = {
      ...res.data,
      page: props.page
    }

    console.log(res.data);
    try {
      await new ViewApi().saveView(viewData);
    } catch(error) {

    }
  }


  const controllHeader = () => {
    if(window.scrollY > 200) {
      setShowHeader(false);
    }
    else {
      setShowHeader(true);
    }
  }

  useEffect(() => {

    getClientLoc();

    window.addEventListener('scroll', controllHeader);
    return () => {
      window.removeEventListener('scroll', controllHeader);
    }
  }, [])

  return (
    <>
        <Head>
          <title>Eren&apos;s Portfolio</title>
          <meta property="og:image" content=""/>                   
        </Head>      
        <DarkModeSwitch 
          opacity={showHeader ? '0' : '1'}
          margin="0 0 0 20px" 
          baseColor={iconBaseColor} 
          hoverColor={iconHoverColor} 
          activeColor={iconActiveColor}
          position="fixed"
          width="4rem"
          height="4rem"/>     
    <Flex
      direction="column"
      align="center"
      alignItems="stretch"
      backgroundColor={props.backgroundColor}
    >
      <Header
        user={user}
        loading={loading}/>
      {children}
      {/* Buraya footer girecek */}
      <Footer/>
    </Flex>
    </>
  )
}

export default BaseLayout;