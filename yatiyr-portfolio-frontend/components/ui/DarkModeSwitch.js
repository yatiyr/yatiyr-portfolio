import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import IconElement from "components/ui/IconElement";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeSwitch = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconElement 
      padding={props.padding}
      icon={colorMode === 'dark' ? FaSun : FaMoon}
      onClickHandler={toggleColorMode}
      baseColor={props.baseColor}
      hoverColor={props.hoverColor}
      activeColor={props.activeColor}
    />
  );
}

export default DarkModeSwitch;