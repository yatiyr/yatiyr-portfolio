import { Badge, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import IconElement from 'components/ui/IconElement';
import { MetuIcon, CengIcon } from 'styles/icons/customIcons';
import Typed from 'react-typed';
import BlogInfoBox from 'components/ui/BlogInfoBox';
import Highlights from './Highlights';

const WelcomeSection = (props) => {

    const headingColor = useColorModeValue("black","white");
    const paragraphColor = useColorModeValue("gray.800", "gray.300");

    const iconBaseColor = useColorModeValue("gray.500", "gray.200");
    const iconHoverColor = useColorModeValue("gray.700", "gray.100");

    const sectionBorderColor = useColorModeValue("black", "purple.200");

    return(
        <Flex
            flexDirection={{sm: "column", lmd: "column", md: "row", lg: "row", xl: "row", "2xl": "row"}}
            minHeight={{sm: "900px", lmd: "750px", md: "600px", lg: "700px", xl: "700px", "2xl": "700px"}}
            zIndex="1"
            justifyContent={{sm: "start", lmd: "start", md: "start", lg: "center", xl: "center", "2xl": "center"}}
            alignItems={{sm: "center", lmd: "center", md: "start", lg: "center", xl: "center", "2xl": "center"}}            
            borderBottom="1px"
            borderBottomColor={sectionBorderColor}
            my={{sm: "10px", lmd: "40px", md: "40px", lg: "40px", xl: "40px", "2xl": "40px"}}
            mx={{sm: "0", lmd: "0", md: "20px", lg: "75px", xl: "100px", "2xl": "150px"}}>
                <Image 
                    boxSize="400px"
                    objectFit="cover"
                    src="/images/erenAvatar1.jpeg"
                    alt="eren"
                    boxShadow="0 4px 15px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.3)"/>
                <Flex
                    flexDirection="column"
                    margin="10px 50px 0px 50px"
                    height={{sm: "220px", lmd: "220px", md: "350px", lg: "350px", xl: "350px", "2xl": "350px"}}
                    justifyContent="space-between">
                        <Heading 
                            my="5px"
                            textAlign="center"
                            color={headingColor}
                            fontFamily="Ubuntu"
                            fontSize = {{sm: "4xl", lmd: "5xl", md: "4xl", lg: "4xl", xl: "5xl", "2xl": "5xl"}}                            
                            transition="background .3s, color .3s">
                                
                                <Typed 
                                    loop={true}
                                    typeSpeed={70}
                                    backSpeed={70}
                                    strings={["Welcome"," to my page!"]}
                                    backDelay={1000}
                                    loopCount={0}
                                    showCursor={true}
                                    className="self-typed"
                                    cursorChar="|"/>                                

                            </Heading>
                        <Text 
                            color={paragraphColor}
                            my="0px"
                            fontSize = {{sm: "xl", lmd: "xl", md: "md", lg: "lg", xl: "xl", "2xl": "xl"}}
                            transition="background .3s, color .3s">
                            I'm Eren. This is my blog site. I'm building it with NextJS and
                            ChakraUI. I am a graduate student in
                            Middle East Technical University, Computer Engineering Department, Ankara, Turkey. Here, I will post my fun
                            projects and also keep track of the things I'm trying to
                            learn. 
                        </Text>
                    <Flex
                        marginTop="20px"
                        justifyContent="space-around" 
                        flexDirection="row"
                        maxHeight="50px">
                        <MetuIcon baseColor={iconBaseColor} hoverColor={iconHoverColor}/>
                        <Badge height="20px" colorScheme="purple">06 CENG 2019</Badge>
                        <CengIcon baseColor={iconBaseColor} hoverColor={iconHoverColor}/>
                    </Flex>
                </Flex>
        </Flex>
    )
}

const IndexMain = (props) => {

    
    const headingColor = useColorModeValue("black","white");
    const paragraphColor = useColorModeValue("gray.800", "gray.300");
    const linkHoverColor = useColorModeValue("purple.600", "purple.300");
    const imageBackgroundColor = useColorModeValue("gray.300", "gray.700")


    return(
        <>
            <WelcomeSection/>
            <Highlights
                headingColor={headingColor}
                paragraphColor={paragraphColor}
                linkHoverColor={linkHoverColor}
                imageBackgroundColor={imageBackgroundColor}/>    
        </>
    )

}



export default IndexMain;