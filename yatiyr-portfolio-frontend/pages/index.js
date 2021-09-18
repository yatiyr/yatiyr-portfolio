import BaseLayout from 'components/layouts/BaseLayout';
import IndexMain from 'components/sections/IndexMain';
import { useGetUser } from "actions/user";
import { useColorModeValue } from "@chakra-ui/react";

export default function Home() {

  // Load user information
  const { data, loading } = useGetUser();

  const backgroundColor = useColorModeValue("gray.50", "gray.900");
  
  return (
    <>
      <BaseLayout
        user={data}
        loading={loading}
        backgroundColor={backgroundColor}>
        <IndexMain/>                                                                                                             
      </BaseLayout>
    </>
  )
}
