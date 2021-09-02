import { Icon, Box, useProps } from '@chakra-ui/react';
import NextLink from 'next/link';

const LinkIconElement = (props) => {
 
  return(
      <NextLink href={props.to} passHref>
          <Box 
            padding={props.padding}
            as="a">
            <Icon
                cursor="pointer"
                color={props.baseColor}
                _hover={{color: props.hoverColor}}
                _active={{color: props.activeColor}}
                as={props.icon}
                transition="color .3s"/>
          </Box>
      </NextLink>
  );
}

export default LinkIconElement;