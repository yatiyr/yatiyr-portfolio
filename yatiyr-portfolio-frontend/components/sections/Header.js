import { Text } from '@chakra-ui/layout'
import { Flex, useProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import DarkModeSwitch from 'components/ui/DarkModeSwitch';
import IconElement from 'components/ui/IconElement';
import LinkIconElement from 'components/ui/LinkIconElement';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaSteam } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';

import { useColorModeValue, 
         Button,
         Menu,
         MenuButton,
         MenuList,
         MenuItem,
         MenuItemOption,
         MenuGroup,
         MenuOptionGroup,
         MenuIcon,
         MenuCommand,
         MenuDivider,
         Box } from "@chakra-ui/react";

const HeaderLink = (props) => {
  return(
    <NextLink href={props.to} passHref>
      <Button
        aria-label="Header Link"
        variant="ghost"
        as="a"
        color={props.baseColor}
        bg={props.backgroundColor}
        _focus={{boxShadow: "none"}}
        _hover={{background: props.backgroundColor, color: props.hoverColor}}
        _active={{background: props.activeBackgroundColor, color: props.activeColor}}
        rounded={false}
        minHeight="40px"
        transition="background .3s, color .3s"
      >
        {props.text}
      </Button>     
    </NextLink>
  )
}

const HeaderLogo = (props) => {
  return (
    <NextLink href="/" passHref>
      <Button
        aria-label="Header Logo"
        variant="ghost"
        as="a"
        color={props.baseColor}
        bg={props.backgroundColor}
        _focus={{boxShadow: "none"}}
        _hover={{background: props.backgroundColor, color: props.hoverColor}}
        _active={{background: props.activeBackgroundColor, color: props.activeColor}}
        rounded={false}
        transition="background .3s, color .3s"
        display={props.display}
      >
        {props.text}
      </Button>
    </NextLink>
  )
}

const AdminMenu = (props) => {
  return (
    <Menu>
      <MenuButton 
        userSelect="none"
        as={Box}
        cursor="pointer"
        color={props.baseColor}
        _hover={{color: props.hoverColor}}
        _active={{color: props.activeColor}}
        transition="color .3s"
        >
        Admin
      </MenuButton>
      <MenuList border="none" borderRadius="none">
        <MenuItem color={props.baseColor}
                  _hover={{color: props.hoverColor}}
                  _active={{color: props.activeColor}}>
          <NextLink href="/" passHref>Dashboard</NextLink>
        </MenuItem>
        <MenuItem color={props.baseColor}
                  _hover={{color: props.hoverColor}}
                  _active={{color: props.activeColor}}>
          <NextLink href="/" passHref>Create a Blog</NextLink>
        </MenuItem>       
      </MenuList>
    </Menu>
  )
}

const HeaderMenuIcon = (props) => {
  return (
    <IconElement
      onClickHandler={props.onClickHandler}
      padding={props.padding}      
      baseColor={props.baseColor}
      hoverColor={props.hoverColor}
      activeColor={props.activeColor}
      icon={props.menuToggled ? VscChromeClose : GiHamburgerMenu}/>
  )
}

const Header = (props) => {

  const [menuToggled, setMenuToggled] = useState(false);

  const color           = useColorModeValue("black", "white");
  const activeColor     = useColorModeValue("gray.100", "gray.800");
  const backgroundColor = useColorModeValue("gray.50", "gray.900");

  const logoBaseColor   = useColorModeValue("gray.600", "gray.500");
  const logoHoverColor  = useColorModeValue("gray.800", "gray.100");
  const logoActiveColor = useColorModeValue("gray.900", "gray.100");

  const iconBaseColor   = useColorModeValue("gray.600","gray.500");
  const iconHoverColor  = useColorModeValue("gray.700", "gray.400");
  const iconActiveColor = useColorModeValue("gray.800", "gray.300");

  const headerLinkBaseColor = useColorModeValue("gray.600", "gray.400");
  const headerLinkHoverColor = useColorModeValue("gray.800", "gray.100");
  const headerLinkActiveColor = useColorModeValue("gray.900", "gray.100");    

  return (
    <Flex
      position="sticky"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="stretch"
      minWidth="356px"
      width="auto"
      top="0"
    >
      {/* Desktop Part */}      
      <HeaderLogo 
        text="YATIYR" 
        baseColor={logoBaseColor}
        hoverColor={logoHoverColor}
        activeColor={logoActiveColor}
        backgroundColor={backgroundColor}
        activeBackgroundColor={backgroundColor}
        display={{sm: "none", lmd: "flex", md: "flex", lg: "flex", xl: "flex", "2xl": "flex"}}/>

      <Flex
        display={{sm: "none", lmd: "flex", md: "flex", lg: "flex", xl: "flex", "2xl": "flex"}}
        flexDirection="row"
        justifyContent="start"
        alignItems="stretch"
        flexShrink="1"
        flexGrow="1"
        backgroundColor={backgroundColor}
        transition="background .3s, color .3s">
        <HeaderLink to="/" text="Home" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
        <HeaderLink to="/" text="About" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
        <HeaderLink to="/" text="Blog" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
        <HeaderLink to="/" text="Cv" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
      </Flex>


      <Flex
        display={{sm: "none", lmd: "flex", md: "flex", lg: "flex", xl: "flex", "2xl": "flex"}}
        flexDirection="row"
        justifyContent="stretch"
        alignItems="center"
        backgroundColor={backgroundColor}
        transition="background .3s, color .3s"        
      >
        <LinkIconElement padding="0 20px 0 0"to="https://steamcommunity.com/id/yatiyr" baseColor={iconBaseColor} hoverColor={iconHoverColor} activeColor={iconActiveColor} icon={FaSteam}/>        
        <LinkIconElement padding="0 20px 0 0"to="https://github.com/yatiyr/" baseColor={iconBaseColor} hoverColor={iconHoverColor} activeColor={iconActiveColor} icon={FaGithub}/>
        <LinkIconElement padding="0 20px 0 0"to="https://www.linkedin.com/in/eren-dere/" baseColor={iconBaseColor} hoverColor={iconHoverColor} activeColor={iconActiveColor} icon={FaLinkedin}/>        
        <DarkModeSwitch padding="0 20px 0 0" baseColor={iconBaseColor} hoverColor={iconHoverColor} activeColor={iconActiveColor}/>
        <AdminMenu baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor}/>
        <HeaderLink to="/" text="Login" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>        
      </Flex>
      {/* Desktop Part END! */}

      {/* Mobile Part */}
      <Flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="start"
        display={{sm: "flex", lmd: "none", md: "none", lg: "none", xl: "none", "2xl": "none"}}
        height={menuToggled ? "310px" : "40px"}        
        backgroundColor={backgroundColor}
        transition="height 0.5s, background .3s, color .3s">
        <Flex 
          flexDirection="row"
          flexGrow="1"
          flexShrink="1"
          justifyContent="space-between">
          <HeaderLogo 
            text="YATIYR" 
            baseColor={logoBaseColor}
            hoverColor={logoHoverColor}
            activeColor={logoActiveColor}
            backgroundColor={backgroundColor}
            activeBackgroundColor={backgroundColor}/> 

          <Flex
            flexDirection="row">
            <DarkModeSwitch padding="0 20px 0 0" baseColor={iconBaseColor} hoverColor={iconHoverColor} activeColor={iconActiveColor}/>
            <HeaderMenuIcon
              padding="0 20px 0 0"            
              onClickHandler={() => {setMenuToggled(!menuToggled);}}
              menuToggled={menuToggled}
              baseColor={headerLinkBaseColor}
              hoverColor={headerLinkHoverColor}
              activeColor={headerLinkActiveColor}/>
          </Flex>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="start"
          overflow="hidden"
          height="100%"
          >
            <HeaderLink to="/" text="Home" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
            <HeaderLink to="/" text="About" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
            <HeaderLink to="/" text="Blog" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
            <HeaderLink to="/" text="Cv" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              flexGrow="1"
              minHeight="40px">
              <AdminMenu baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor}/>
            </Flex>
            <HeaderLink to="/" text="Login" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
            <Flex
              flexDirection="row"
              justifyContent="center"
              flexGrow="1">
              <LinkIconElement padding="0 0 0 0"to="https://steamcommunity.com/id/yatiyr" baseColor={iconBaseColor} hoverColor={iconHoverColor} activeColor={iconActiveColor} icon={FaSteam}/>        
              <LinkIconElement padding="0 20px 0 20px"to="https://github.com/yatiyr/" baseColor={iconBaseColor} hoverColor={iconHoverColor} activeColor={iconActiveColor} icon={FaGithub}/>
              <LinkIconElement padding="0 0 0 0"to="https://www.linkedin.com/in/eren-dere/" baseColor={iconBaseColor} hoverColor={iconHoverColor} activeColor={iconActiveColor} icon={FaLinkedin}/>
            </Flex>            
        </Flex>     

      </Flex>

    </Flex>
  )
}


export default Header;