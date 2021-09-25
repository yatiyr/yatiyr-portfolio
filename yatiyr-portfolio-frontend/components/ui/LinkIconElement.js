import { Icon, Box, useProps } from '@chakra-ui/react';
import NextLink from 'next/link';

const LinkIconElement = (props) => {
 
  return(
      <NextLink href={props.to} passHref>
          <Box
            display="flex"
            alignItems="center"
            padding={props.padding}
            as="a"
            height="100%"
            width="100%">
            <Icon
                cursor="pointer"
                color={props.baseColor}
                _hover={{color: props.hoverColor}}
                _active={{color: props.activeColor}}
                as={props.icon}
                transition="color .3s"
                height="100%"
                width="100%"/>
          </Box>
      </NextLink>
  );
}

export default LinkIconElement;