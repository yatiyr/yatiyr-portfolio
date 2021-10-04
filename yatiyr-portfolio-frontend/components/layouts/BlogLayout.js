import Head from "next/head";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Header from "components/sections/Header";
import FrontMatter from 'components/sections/FrontMatter'
import Footer from "components/sections/Footer";
import { useState, useEffect } from "react";
import DarkModeSwitch from "components/ui/DarkModeSwitch";
import axios from "axios";
import ViewApi from "lib/api/views";

const BlogLayout = (props) => {

    const iconBaseColor   = useColorModeValue("gray.900","gray.50");
    const iconHoverColor  = useColorModeValue("black", "white");
    const iconActiveColor = useColorModeValue("black", "white");
    const [showHeader, setShowHeader] = useState(true);
    const controllHeader = () => {
  
      if(window.scrollY > 200) {
        setShowHeader(false);
      }
      else {
        setShowHeader(true);
      }
    }

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
  
    useEffect(() => {
  
      getClientLoc();
      
      window.addEventListener('scroll', controllHeader);
      return () => {
        window.removeEventListener('scroll', controllHeader);
      }
    }, [])    

    const { user, loading, children, frontMatter, backgroundColor } = props;
    
    return (
        <>
            <Head>
                <title>{frontMatter.title}</title>
                <meta name="description" content={frontMatter.title} />
                <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
                integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
                crossOrigin="anonymous"
                />
            </Head>        
            <Box className="mdx" backgroundColor={backgroundColor}>
                <DarkModeSwitch 
                    opacity={showHeader ? '0' : '1'}
                    margin="0 0 0 20px" 
                    baseColor={iconBaseColor} 
                    hoverColor={iconHoverColor} 
                    activeColor={iconActiveColor}
                    position="fixed"
                    width="4rem"
                    height="4rem"/>                  
                <Header user={user} loading={loading} />
                <Box
                mx="auto"
                px={['1rem', '1rem', '1rem', '1rem']}
                py={['0.5rem', '1rem', '2rem', '2rem']}
                my="2rem"
                width={{sm: "95%", lmd: "95%", md: "70%", lg: "60%", xl: "800px", "2xl": "800px"}}
                display="flex"
                flexDirection="column">
                <FrontMatter matter={frontMatter} />
                {children}
                </Box>
            </Box>
            <Footer/>
        </>
    );
};

export default BlogLayout;