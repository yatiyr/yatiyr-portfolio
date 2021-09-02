import { Flex, useProps } from '@chakra-ui/react';
import Header from 'components/sections/Header';

const BaseLayout = (props) => {
  const { className, user, loading, children } = props;

  return (
    <Flex
      direction="column"
      align="center"
      alignItems="stretch"
      mx={{sm: "0px", md: "5px", lg: "10px", xl: "20px", "2xl": "30px"}}
      backgroundColor={props.backgroundColor}
    >
      <Header/>
      {children}
      {/* Buraya footer girecek */}
    </Flex>
  )
}

export default BaseLayout;