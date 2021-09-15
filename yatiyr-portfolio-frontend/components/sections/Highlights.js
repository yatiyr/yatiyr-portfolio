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
                description="Nulla esse voluptate esse esse. Ipsum anim esse quis dolor proident. Eiusmod est reprehenderit magna deserunt exercitation reprehenderit et ipsum ea duis ullamco in nostrud occaecat. Incididunt ea ipsum id aute ut in ipsum ea tempor id nisi. In Lorem adipisicing consequat aliqua qui tempor minim in consectetur non quis dolore voluptate. Laborum pariatur duis velit reprehenderit eiusmod dolor. Anim nisi laboris anim officia adipisicing exercitation veniam id."
                owner="erendere"
                date="20/07/2021"
                slug="#"
                blogId="#"
                headingColor={props.headingColor}
                paragraphColor={props.paragraphColor}
                linkHoverColor={props.linkHoverColor}
                imageBackgroundColor={props.imageBackgroundColor}/>
        </Flex>
    )

}

export default Highlights;