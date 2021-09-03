import { Flex, useProps } from '@chakra-ui/react';
import Header from 'components/sections/Header';

const BaseLayout = (props) => {
  const { className, user, loading, children } = props;

  return (
    <Flex
      direction="column"
      align="center"
      alignItems="stretch"
      backgroundColor={props.backgroundColor}
    >
      <Header/>
      {children}
      {/* Buraya footer girecek */}
    </Flex>
  )
}

export default BaseLayout;