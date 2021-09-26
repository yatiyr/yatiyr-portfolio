import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import IconElement from "components/ui/IconElement";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeSwitch = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconElement
      display={props.display}
      margin={props.margin}
      icon={colorMode === 'dark' ? FaSun : FaMoon}
      onClickHandler={toggleColorMode}
      baseColor={props.baseColor}
      hoverColor={props.hoverColor}
      activeColor={props.activeColor}
      height={props.height}
      width={props.width}
      position={props.position}
      opacity={props.opacity}
      visibility={props.visibility}
    />
  );
}

export default DarkModeSwitch;