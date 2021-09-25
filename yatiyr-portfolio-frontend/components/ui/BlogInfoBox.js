import { Badge, Box, Flex, Heading, Image, useColorModeValue, Text } from "@chakra-ui/react";

import Link from "next/link";


const BlogInfoBox = (props) => {

    const cardContainerBg = useColorModeValue("white", "gray.900");
    const cardBorder      = useColorModeValue("none", "2px");
    
    return (
        <Link href={`blog/${props.slug}`} passHref>
            <Flex
                as="a" 
                flexDir="column"
                width="100%"
                justifyContent="start"
                alignItems="center"
                textOverflow="ellipsis"
                backgroundColor={cardContainerBg}
                boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
                _hover={{boxShadow: "0 12px 24px 0 rgba(0,0,0,0.2)", transform:"translate(0px, -10px)"}}
                transition="0.3s"
                cursor="pointer"
                border={cardBorder}                
                my="25px"
                 >
                <Box marginBottom="10px"
                    background={props.imageBackgroundColor}
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    transition="background .3s">
                    <Image
                    objectFit="cover"     
                    height="200px"
                    width="100%"
                    userSelect="none"
                    src={`${process.env.PORTFOLIO_API_URL}/media/${props.imagePath}`}
                    alt="blogInfo"
                    />
                </Box>
                <Flex flexDir="column"
                    width="100%"
                    height="100%"
                    padding="4px 16px">
                    <Flex flexDir="row"
                        width="100%"
                        justifyContent="start">
                        <Heading
                                _hover={{color: props.linkHoverColor}}                             
                                color={props.headingColor}
                                transition="background .3s, color .3s"
                                fontSize={{sm: "2xl", lmd: "2xl", md: "3xl", lg: "4xl", xl: "4xl", "2xl": "4xl"}}>
                                    {props.title}
                        </Heading>
                    </Flex>
                    <Box  
                        display="block"
                        width="100%"
                        height="100%"
                        flexGrow="1"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        className="truncated"
                        color={props.paragraphColor}
                        transition="background .3s, color .3s">
                        <Text>{props.description}</Text>
                    </Box>
                    <Box as="a"
                        href={props.slug}
                        my="10px"
                        color={props.paragraphColor}
                        _hover={{color: props.linkHoverColor}}
                        transition="background .3s, color .3s">
                        Read More
                    </Box>
                    <Flex flexDir="row"
                        width="100%"
                        height="16px"
                        justifyContent="start">
                        <Badge colorScheme="blue">by {props.owner}</Badge>
                        <Badge marginLeft="20px" colorScheme="purple">{props.date}</Badge>
                    </Flex>                     
                </Flex>
            </Flex>
        </Link>
    )
}


export default BlogInfoBox;