import Head from "next/head";
import { Box } from "@chakra-ui/layout";
import Header from "components/sections/Header";
import FrontMatter from 'components/sections/FrontMatter'
import Footer from "components/sections/Footer";


const BlogLayout = (props) => {

    const { user, loading, children, frontMatter, backgroundColor } = props;
    
    return (
        <>
            <Head>
                <title>{frontMatter.title}</title>
                <meta name="description" content="Generated by create next app" />
                <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
                integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
                crossOrigin="anonymous"
                />
            </Head>        
            <Box className="mdx" backgroundColor={backgroundColor}>
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