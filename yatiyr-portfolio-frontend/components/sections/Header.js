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
import { isAuthorized } from 'utils/auth0';

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
        _hover={{background: props.hoverBackgroundColor, color: props.hoverColor}}
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
        _hover={{background: props.hoverBackgroundColor, color: props.hoverColor}}
        _active={{background: props.activeBackgroundColor, color: props.activeColor}}
        rounded={false}
        minHeight="40px"        
        transition="background .3s, color .3s"
        height="100%"
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
        as={Button}
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        color={props.baseColor}
        bg={props.backgroundColor}
        rounded={false}                
        _hover={{background: props.hoverBackgroundColor, color: props.hoverColor}}
        _active={{background: props.activeBackgroundColor, color: props.activeColor}}
        _focus={{boxShadow: "none"}}        
        width={props.menuToggled ? "100%" : "auto"}
        transition="background .3s, color .3s"
        zIndex="100"
        >
          Admin
      </MenuButton>
      <MenuList border="none" borderRadius="none" zIndex="100">
        <MenuItem color={props.baseColor}
                  _hover={{background: props.hoverBackgroundColor, color: props.hoverColor}}
                  _active={{background: props.activeBackgroundColor, color: props.activeColor}}>
          <NextLink href="/" passHref>Dashboard</NextLink>
        </MenuItem>
        <MenuItem color={props.baseColor}
                  _hover={{background: props.hoverBackgroundColor, color: props.hoverColor}}
                  _active={{background: props.activeBackgroundColor, color: props.activeColor}}>
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

  const headerBorderColor = useColorModeValue("gray.100"," gray.300");

  const color           = useColorModeValue("black", "white");
  const activeColor     = useColorModeValue("gray.100", "gray.800");
  const backgroundColor = useColorModeValue("gray.50", "gray.900");

  const logoBaseColor   = useColorModeValue("purple.500", "purple.300");
  const logoHoverColor  = useColorModeValue("purple.600", "purple.200");
  const logoActiveColor = useColorModeValue("purple.700", "purple.100");

  const iconBaseColor   = useColorModeValue("gray.600","gray.500");
  const iconHoverColor  = useColorModeValue("gray.700", "gray.400");
  const iconActiveColor = useColorModeValue("gray.800", "gray.300");

  const headerLinkBaseColor = useColorModeValue("gray.600", "gray.400");
  const headerLinkHoverColor = useColorModeValue("gray.800", "gray.100");
  const headerLinkActiveColor = useColorModeValue("gray.900", "gray.100");

  const menuItemHoverColor = useColorModeValue("gray.200", "gray.700");

  const borderHandler = (menuToggled) => (menuToggled ? "0px" : "2px")

  return (
    <Flex
      position="sticky"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="stretch"
      minWidth="356px"
      width="auto"
      minHeight="40px"
      top="0"
      borderBottom="1px"
      borderBottomColor={headerBorderColor}
      fontFamily="Inter"
      zIndex="100"      
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
        { !props.loading && 
          <>
            { props.user && 
              <>
                { isAuthorized(props.user, 'admin') && <AdminMenu menuToggled={menuToggled} hoverBackgroundColor={menuItemHoverColor} backgroundColor={backgroundColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor}/> }
                <HeaderLink to="/api/v1/logout" text="Logout" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>        
              </>
            }
            { !props.user &&
              <HeaderLink to="/api/v1/login" text="Login" baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>                      
            }
          </>
        }
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
            flexDirection="row"
            height="40px"
            alignItems="center">
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
            <HeaderLink to="/" text="Home" hoverBackgroundColor={menuItemHoverColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
            <HeaderLink to="/" text="About" hoverBackgroundColor={menuItemHoverColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
            <HeaderLink to="/" text="Blog" hoverBackgroundColor={menuItemHoverColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>
            <HeaderLink to="/" text="Cv" hoverBackgroundColor={menuItemHoverColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>

            { !props.loading && 
              <>
                { props.user && 
                  <>
                    { isAuthorized(props.user, 'admin') &&                     
                      <Flex
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      flexGrow="1"
                      minHeight="40px"
                      cursor="pointer"
                      _hover={{background: menuItemHoverColor}}
                      _active={{background: backgroundColor}}
                      transition="background .3s, color .3s">
                        <AdminMenu menuToggled={menuToggled} hoverBackgroundColor={menuItemHoverColor} backgroundColor={backgroundColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor}/>
                      </Flex>                    
                    }
                    <HeaderLink to="/api/v1/logout" text="Logout" hoverBackgroundColor={menuItemHoverColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>      
                  </>
                }
                { !props.user &&
                  <HeaderLink to="/api/v1/login" text="Login" hoverBackgroundColor={menuItemHoverColor} baseColor={headerLinkBaseColor} hoverColor={headerLinkHoverColor} activeColor={headerLinkActiveColor} activeBackgroundColor={backgroundColor}/>                                 
                }
              </>
            }            
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