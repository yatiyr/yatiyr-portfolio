import { Flex, Heading } from "@chakra-ui/react";
import BlogInfoBox from "components/ui/BlogInfoBox";

const Highlights = (props) => {



    return(
        <Flex
        justifyContent="start"
        alignItems="center"
        flexDirection="column"
        my={{sm: "10px", lmd: "10px", md: "10px", lg: "40px", xl: "40px", "2xl": "40px"}}
        mx={{sm: "10px", lmd: "20px", md: "20px", lg: "75px", xl: "100px", "2xl": "150px"}}
        overflow="hidden">
            <Heading 
                textAlign="center" 
                my={{sm: "10px", lmd: "10px", md: "10px", lg: "40px", xl: "40px", "2xl": "40px"}}
                fontSize={{sm: "2xl", lmd: "3xl", md: "4xl", lg: "5xl", xl: "5xl", "2xl": "5xl"}}
                color={props.headingColor}>HIGHLIGHTED BLOGS</Heading>
            <BlogInfoBox 
                imagePath="/images/veachAjarPathTraced.png"
                title="Ray Tracer Journey"
                date="02/07/2021"
                headingColor={props.headingColor}
                paragraphColor={props.paragraphColor}/>
        </Flex>
    )

}

export default Highlights;