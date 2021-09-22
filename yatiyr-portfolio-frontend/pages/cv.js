import BaseLayout from 'components/layouts/BaseLayout';
import { useGetUser } from "actions/user";
import { Heading, useColorModeValue } from "@chakra-ui/react";

const Cv = () => {
  // Load user information
  const { data, loading } = useGetUser();

  const backgroundColor = useColorModeValue("white", "gray.900");
  
  return (
    <>
      <BaseLayout
        user={data}
        loading={loading}
        backgroundColor={backgroundColor}>
        <>
            <Heading color={backgroundColor}>Cv page</Heading>
        </>                                                                                                            
      </BaseLayout>
    </>
  )

}

export default Cv;