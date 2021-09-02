import { Icon, Box } from '@chakra-ui/react';


const IconElement = (props) => {
 
  return(
    <Box 
      padding={props.padding}>
      <Icon
          onClick={props.onClickHandler}
          cursor="pointer"
          color={props.baseColor}
          _hover={{color: props.hoverColor}}
          _active={{color: props.activeColor}}
          as={props.icon}
          transition="color .3s"/>
    </Box>
  );
}

export default IconElement;