import { Flex, useProps } from '@chakra-ui/react';
import Header from 'components/sections/Header';

const BaseLayout = (props) => {

  const { user, loading, children } = props;

  return (
    <Flex
      direction="column"
      align="center"
      alignItems="stretch"
      backgroundColor={props.backgroundColor}
    >
      <Header
        user={user}
        loading={loading}/>
      {children}
      {/* Buraya footer girecek */}
    </Flex>
  )
}

export default BaseLayout;