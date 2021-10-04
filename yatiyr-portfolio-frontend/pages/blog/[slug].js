import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug } from "utils/mdx";

import MDXComponents from 'components/mdx';
import BlogLayout from "components/layouts/BlogLayout";
import { useGetUser } from "actions/user";
import { useColorModeValue } from "@chakra-ui/react";
import BlogApi from "lib/api/blogs";

const BlogContent = (props) => {
    const { data, loading } = useGetUser();

    const backgroundColor = useColorModeValue("white", "gray.900");

    return (
        <>
            <BlogLayout
                user={data}
                loading={loading}
                backgroundColor={backgroundColor}
                frontMatter={props.frontMatter}
                page={`blog/${props.frontMatter.slug}`}>
                    <MDXRemote {...props.mdxSource} components={{...MDXComponents}} />
            </BlogLayout>
        </>
    )
}

export async function getStaticPaths() {
    const json = await new BlogApi().getAll();
    const blogs = json.data;

    return {
        paths: blogs.map((p) => ({
            params: {
                slug: p.slug
            }
        })),
        fallback: 'blocking'
    };
}

export async function getStaticProps({params}) {
    const blog = await getFileBySlug('blog', params.slug);

    return {
        props: {...blog},
        revalidate: 60
    }
}


export default BlogContent;