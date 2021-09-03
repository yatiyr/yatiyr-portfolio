import { Badge, Box, Flex, Heading, Image } from "@chakra-ui/react";



const BlogInfoBox = (props) => {
    return (
        <Flex 
            flexDir="column"
            width="600px"
            height="512px"
            justifyContent="center"
            border="2px"
            textOverflow="ellipsis">
            <Image
                
                objectFit="cover"
                src={props.imagePath}
                alt="blogInfo"/>
            <Flex flexDir="column"
                  width="600px"
                  height="90px">
                <Flex flexDir="row"
                       width="100%"
                       justifyContent="center">
                    <Heading color={props.headingColor} transition="background .3s, color .3s" fontSize="lg" textAlign="center" mx="100px">{props.title}</Heading>
                    <Box color={props.headingColor} transition="background .3s, color .3s"  position="absolute" transform="translate(200px,0px)">{props.date}</Box>
                </Flex>
                <Box  
                      display="block"
                      width="100%"
                      height="90px"
                      maxHeight="90px"
                      textOverflow="ellipsis"
                      overflow="hidden"
                      className="truncated"
                      color={props.paragraphColor}
                      transition="background .3s, color .3s">
                    Fugiat Lorem exercitation sint aliquip consequat irure consectetur deserunt incididunt proident tempor labore qui. Minim nisi laboris reprehenderit enim elit commodo est dolor laborum cupidatat. Magna id dolor mollit ut excepteur mollit esse id ut anim excepteur ad Lorem nostrud. Anim et esse non dolore fugiat aute officia elit. Reprehenderit officia ea Lorem non exercitation amet esse irure culpa magna eiusmod sit.
                </Box>
                <Flex flexDir="row"
                      width="100%"
                      height="16px"
                      justifyContent="space-around">
                    <Badge colorScheme="blue">Badge1</Badge>
                    <Badge colorScheme="purple">Badge2</Badge>
                    <Badge colorScheme="orange">Badge3</Badge>
                    <Badge colorScheme="green">Badge4</Badge>
                </Flex>                     
            </Flex>
        </Flex>
    )
}


export default BlogInfoBox;