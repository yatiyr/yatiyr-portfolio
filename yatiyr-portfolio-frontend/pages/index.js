import BaseLayout from 'components/layouts/BaseLayout';
import IndexMain from 'components/sections/IndexMain';
import { useGetUser } from "actions/user";
import { useColorModeValue } from "@chakra-ui/react";
import { getAllHighlightsFrontMatter } from 'utils/mdx';

const Home = (props) => {

  // Load user information
  const { data, loading } = useGetUser();

  const backgroundColor = useColorModeValue("white", "gray.900");

  return (
    <>
      <BaseLayout
        user={data}
        loading={loading}
        backgroundColor={backgroundColor}>
        <IndexMain highlightedBlogs={props.blogs}/>                                                                                                             
      </BaseLayout>
    </>
  )
}

export async function getStaticProps() {
  const blogs = await getAllHighlightsFrontMatter('blog');

  return {props: {blogs}};
}

export default Home;