import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "utils/mdx";

import MDXComponents from 'components/mdx';
import BlogLayout from "components/layouts/BlogLayout";
import { useGetUser } from "actions/user";
import { useColorModeValue } from "@chakra-ui/react";

const BlogContent = (props) => {
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

export async function getStaticPaths() {
    const blogs = await getFiles('blog');

    return {
        paths: blogs.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    };
}

export async function getStaticProps({params}) {
    const blog = await getFileBySlug('blog', params.slug);

    return {props: {...blog}}
}


export default BlogContent;