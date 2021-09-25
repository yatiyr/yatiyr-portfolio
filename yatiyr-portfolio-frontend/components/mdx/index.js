import { Heading, Link as ChakraLink, useColorModeValue, Text, UnorderedList, OrderedList, Divider, Box, Flex} from "@chakra-ui/react";
import Link from 'next/link';
import { Image } from "@chakra-ui/image";

const CustomLink = (props) => {

    const linkColor = useColorModeValue("cyan.700", "cyan.300");

    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if(isInternalLink) {
        return (
            <Link href={href} passHref>
                <ChakraLink color={linkColor} {...props} fontWeight="bold" className="mdx">
                    {props.children}
                </ChakraLink>
            </Link>
        )
    }

    return (
        <ChakraLink
            target="_blank"
            rel="noopener noreferrer"
            color={linkColor}
            className="mdx"
            fontWeight="bold"
            {...props}
        >
            {props.children}
        </ChakraLink>
    )
}

const H1 = (props) => {

    const headingColor = useColorModeValue("gray.800", "gray.300");    

    return <Heading color={headingColor} size="2xl" my="10px" {...props}/>
}

const H2 = (props) => {

    const headingColor = useColorModeValue("gray.800", "gray.300");    

    return <Heading color={headingColor} size="xl" my="10px" {...props}/>
}

const H3 = (props) => {

    const headingColor = useColorModeValue("gray.800", "gray.300");    

    return <Heading fontFamily={'Ubuntu'} color={headingColor} size="lg" my="10px" {...props}/>
}

const H4 = (props) => {

    const headingColor = useColorModeValue("gray.800", "gray.300");    

    return <Heading fontFamily={'Ubuntu'} color={headingColor} size="sm" my="10px" {...props}/>
}

const P = (props) => {
    const paragraphColor = useColorModeValue("gray.600", "gray.400");  

    return <Text text-align="justify" text-justify="inter-word" fontFamily="Ubuntu" color={paragraphColor} {...props}/>
}

const UL = (props) => {
    const ulColor = useColorModeValue("gray.600", "gray.400");

    return <UnorderedList color={ulColor}  {...props}/>
}

const OL = (props) => {
    const olColor = useColorModeValue("gray.600", "gray.400");

    return <OrderedList color={olColor} {...props}/>
}

const HR = (props) => {
    const hrColor = useColorModeValue("cyan.600", "cyan.400");

    return <Divider borderColor={hrColor}/>
}

const MathEq = (props) => {
    const mathEqColor = useColorModeValue("gray.600", "gray.400");

    return <Box color={mathEqColor} {...props}/>
}

const ApiImage = (props) => {
    const captionColor = useColorModeValue("gray.500", "gray.500");

    return (
        <Flex flexDirection="column" alignSelf="center">
            <Image 
                   alignSelf="center"
                   objectFit="cover" 
                   alt={props.alt}
                   src={`${process.env.PORTFOLIO_API_URL}/media${props.src}`}
                   width={props.width} height={props.height}                   
                   flexGrow="1"/>
            <Text flexGrow="1"
                  textAlign="center" 
                  fontFamily="UbuntuMono"
                  fontSize="14px"
                  color={captionColor}>
                      {props.caption}
            </Text>
        </Flex>
    )
}

const components = {
    a: CustomLink,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    ul: UL,
    ol: OL,
    hr: HR,
    div: MathEq,
    ApiImage,
    Image,
};

export default components;

