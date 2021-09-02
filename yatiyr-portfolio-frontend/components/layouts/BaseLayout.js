import { Flex, useProps } from '@chakra-ui/react';
import Header from 'components/sections/Header';

const BaseLayout = (props) => {
  const { className, user, loading, children } = props;

  return (
    <Flex
      direction="column"
      align="center"
      alignItems="stretch"
      mx={{sm: "0px", md: "20px", lg: "50px", xl: "100px", "2xl": "200px"}}
      backgroundColor={props.backgroundColor}
    >
      <Header/>
      {children}
      {/* Buraya footer girecek */}
    </Flex>
  )
}

export default BaseLayout;