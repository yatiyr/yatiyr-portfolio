import { Badge, Box, Flex, Heading, Image } from "@chakra-ui/react";



const BlogInfoBox = (props) => {
    return (
        <Flex 
            flexDir="column"
            width="100%"
            justifyContent="start"
            alignItems="center"
            textOverflow="ellipsis">
            <Box marginBottom="10px"
                 as="a"
                 href={props.slug}
                 background={props.imageBackgroundColor}
                 width="100%"
                 display="flex"
                 flexDirection="row"
                 justifyContent="center"
                 transition="background .3s">
                <Image                
                objectFit="cover"
                src={props.imagePath}
                alt="blogInfo"
                />
            </Box>
            <Flex flexDir="column"
                  width="100%"
                  height="100%">
                <Flex flexDir="row"
                       width="100%"
                       justifyContent="start">
                    <Heading
                             as="a"
                             href={props.slug}
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
                    {props.description}
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
    )
}


export default BlogInfoBox;