import { Icon, Box } from '@chakra-ui/react';


const IconElement = (props) => {
 
  return(
    <Box 
      margin={props.margin}
      display={props.display}
      justifyContent="center"
      transition="background .3s"
      height="100%"
      width="100%"
      padding="0px 0px">
      <Icon
          padding="1rem 1rem"
          height="100%"
          width="100%"
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