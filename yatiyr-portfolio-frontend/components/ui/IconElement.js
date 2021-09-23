import { Icon, Box } from '@chakra-ui/react';


const IconElement = (props) => {
 
  return(
    <Box 
      margin={props.margin}
      display={props.display}
      justifyContent="center"
      transition="background .3s">
      <Icon
          alignSelf="center"
          justifySelf="center"
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