import { Badge, Box, Flex, Heading, Image } from "@chakra-ui/react";



const BlogInfoBox = (props) => {
    return (
        <Flex 
            flexDir="column"
            width="100%"
            justifyContent="start"
            alignItems="center"
            textOverflow="ellipsis">
            <Image
                
                objectFit="cover"
                src={props.imagePath}
                alt="blogInfo"
                marginBottom="10px"/>
            <Flex flexDir="column"
                  width="100%"
                  height="100%">
                <Flex flexDir="row"
                       width="100%"
                       justifyContent="start">
                    <Heading color={props.headingColor}
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
                    Fugiat Lorem exercitation sint aliquip consequat irure consectetur deserunt incididunt proident tempor labore qui. Minim nisi laboris reprehenderit enim elit commodo est dolor laborum cupidatat. Magna id dolor mollit ut excepteur mollit esse id ut anim excepteur ad Lorem nostrud. Anim et esse non dolore fugiat aute officia elit. Reprehenderit officia ea Lorem non exercitation amet esse irure culpa magna eiusmod sit.
                </Box>
                <Box my="10px">
                    Read More
                </Box>
                <Flex flexDir="row"
                      width="100%"
                      height="16px"
                      justifyContent="start">
                    <Badge colorScheme="blue">by erendere</Badge>
                    <Badge marginLeft="20px" colorScheme="purple">20/07/2021</Badge>
                </Flex>                     
            </Flex>
        </Flex>
    )
}


export default BlogInfoBox;