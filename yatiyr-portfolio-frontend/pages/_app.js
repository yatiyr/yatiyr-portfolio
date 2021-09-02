import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import customTheme from 'styles/customTheme';
import GlobalStyle from 'styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider options={{initialColorMode: "light", useSystemColorMode: true}}>
        <GlobalStyle>
          <Component {...pageProps}/>
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
