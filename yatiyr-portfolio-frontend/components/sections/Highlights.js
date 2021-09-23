import { Flex, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import BlogInfoBox from "components/ui/BlogInfoBox";
import ProjectInfoBox from "components/ui/ProjectInfoBox";
import {projects} from "data/projects";

const Highlights = (props) => {



    return(
        <Flex
        justifyContent="start"
        alignItems="center"
        flexDirection="column"
        my={{sm: "10px", lmd: "10px", md: "10px", lg: "40px", xl: "40px", "2xl": "40px"}}
        mx={{sm: "10px", lmd: "20px", md: "20px", lg: "75px", xl: "100px", "2xl": "150px"}}
        >
            <Heading
                mx={{sm: "100px", lmd: "100px", md: "130px", lg: "160px", xl: "200px", "2xl": "230px"}} 
                alignSelf="start"
                textAlign="center" 
                my={{sm: "0px", lmd: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px"}}
                fontSize={{sm: "lg", lmd: "xl", md: "2xl", lg: "3xl", xl: "3xl", "2xl": "3xl"}}
                color={props.headingColor}>Projects</Heading>
            <SimpleGrid my="20px" columns={[1, null, 2]} spacing="40px">
                {projects.map((project, index) => (
                    <ProjectInfoBox
                        key={index}
                        owner={project.owner}
                        title={project.title}
                        url={project.url}
                        description={project.description}
                        language={project.language}
                        headingColor={props.headingColor}
                        paragraphColor={props.paragraphColor}
                        linkHoverColor={props.linkHoverColor}                        />                        
                ))}
            </SimpleGrid>

            <Heading
                mx={{sm: "100px", lmd: "100px", md: "130px", lg: "160px", xl: "200px", "2xl": "230px"}} 
                alignSelf="start"
                textAlign="center" 
                my={{sm: "0px", lmd: "0px", md: "0px", lg: "0px", xl: "0px", "2xl": "0px"}}
                fontSize={{sm: "lg", lmd: "xl", md: "2xl", lg: "3xl", xl: "3xl", "2xl": "3xl"}}
                color={props.headingColor}>Highlighted Blogs</Heading>
            <BlogInfoBox 
                imagePath="/images/veachAjarPathTraced.png"
                title="Ray Tracer Journey"
                date="02/07/2021"
                description="Nulla esse voluptate esse esse. Ipsum anim esse quis dolor proident. Eiusmod est reprehenderit magna deserunt exercitation reprehenderit et ipsum ea duis ullamco in nostrud occaecat. Incididunt ea ipsum id aute ut in ipsum ea tempor id nisi. In Lorem adipisicing consequat aliqua qui tempor minim in consectetur non quis dolore voluptate. Laborum pariatur duis velit reprehenderit eiusmod dolor. Anim nisi laboris anim officia adipisicing exercitation veniam id."
                owner="erendere"
                slug="#"
                blogId="#"
                headingColor={props.headingColor}
                paragraphColor={props.paragraphColor}
                linkHoverColor={props.linkHoverColor}
                imageBackgroundColor={props.imageBackgroundColor}/>
        </Flex>
    )

}


export async function getStaticProps({ params }) {
    const cont = await getFileBySlug('blog', 'hydrate-redux-state-in-nextjs');
  
    return {props: {...cont } };
  }

export default Highlights;