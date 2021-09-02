import { useColorMode, useColorModeValue } from "@chakra-ui/react"; 
import { Global, css } from '@emotion/react';
import Fonts from "styles/fonts/fonts";

const GlobalStyle = ({children}) => {

    const backgroundColor = useColorModeValue('#F7FAFC', '#171923');
    return (
        <>
            <Global
                styles={css`
                    ::selection {
                    background-color: #90CDF4;
                    color: #fefefe;
                    }

                    ::-moz-selection {
                    background: #ffb7b7;
                    color: #fefefe;
                    }
        
                    html {
                    min-width: 356px;
                    scroll-behavior: smooth;            
                    }
        
                    #__next {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    background: ${backgroundColor};
                    transition: background .3s, color .3s;                                       
                    }

                    #__next > * {
                    transition: background .3s, color .3s;              
                    }


                `}/>
                <Fonts/>
                {children}
        </>
    )
}

export default GlobalStyle;