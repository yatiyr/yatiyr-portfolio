import BaseLayout from 'components/layouts/BaseLayout';
import { useGetUser } from "actions/user";
import { Heading, useColorModeValue, Flex } from "@chakra-ui/react";
import { MDXRemote } from 'next-mdx-remote';

import MDXComponents from 'components/mdx';
import { getAllFilesFrontMatter } from 'utils/mdx';
import BlogLayout from 'components/layouts/BlogLayout';
import BlogInfoBox from 'components/ui/BlogInfoBox';
import { Box } from '@chakra-ui/react';

const Blog = (props) => {
  // Load user information
  const { data, loading } = useGetUser();

  const backgroundColor = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700","gray.200");
  const paragraphColor = useColorModeValue("gray.600", "gray.400");
  const linkHoverColor = useColorModeValue("purple.600", "purple.400");
  const imageBackgroundColor = useColorModeValue("gray.300", "gray.700")

  return (
    <BaseLayout
      user={data}
      loading={loading}
      backgroundColor={backgroundColor}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          justifySelf="center"
          alignItems="center"
          minHeight="100vh"
          mx={{sm: "0px", lmd: "0px", md: "130px", lg: "160px", xl: "200px", "2xl": "230px"}}          >
            {props.blogs.map((blog, index) => (
              <BlogInfoBox
                key={index}
                imagePath={blog.headImageUrl}
                title={blog.title}
                date={blog.publishedAt}
                description={blog.summary}
                owner="erendere"
                slug={blog.slug}
                headingColor={headingColor}
                paragraphColor={paragraphColor}
                linkHoverColor={linkHoverColor}
                imageBackgroundColor={imageBackgroundColor}/>
              ))}
        </Box>
      </BaseLayout>
  )

  /*
  return (
    <>
      <BlogLayout
        user={data}
        loading={loading}
        backgroundColor={backgroundColor}
        frontMatter={props.frontMatter}>
          <MDXRemote {...props.mdxSource} components={{...MDXComponents}} />                                                                                                          
      </BlogLayout>
    </>
  ) */

}

export async function getStaticProps() {
  const blogs = await getAllFilesFrontMatter('blog');

  return {props: {blogs}};
}

/*
export async function getStaticProps({ params }) {
  const cont = await getFileBySlug('blog', 'hydrate-redux-state-in-nextjs');

  return {props: {...cont } };
} */

export default Blog;