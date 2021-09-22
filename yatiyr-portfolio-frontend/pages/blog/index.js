import BaseLayout from 'components/layouts/BaseLayout';
import { useGetUser } from "actions/user";
import { Heading, useColorModeValue, Flex } from "@chakra-ui/react";
import { MDXRemote } from 'next-mdx-remote';

import MDXComponents from 'components/mdx';
import { getFileBySlug } from 'utils/mdx';
import BlogLayout from 'components/layouts/BlogLayout';


const Blog = (props) => {
  // Load user information
  const { data, loading } = useGetUser();

  const backgroundColor = useColorModeValue("white", "gray.900");

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
  )

}

export async function getStaticProps({ params }) {
  const cont = await getFileBySlug('blog', 'hydrate-redux-state-in-nextjs');

  return {props: {...cont } };
}

export default Blog;