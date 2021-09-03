import { Box } from "@chakra-ui/layout";

export const MetuIcon = (props) => {
    const {baseColor, hoverColor} = props;
    return(
        <Box
            as="svg"
            xmnls="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            stroke={baseColor}
            fill={baseColor}
            _hover={{stroke: hoverColor, fill: hoverColor}}
            strokeWidth="4"
            viewBox="0 0 118.53 99.416"            
            >
            <g transform="translate(2.2581 -28.061)">
                <g transform="matrix(.26458 0 0 .26458 -5.6991 26.474)" strokeWidth="4">
                    <path d="m200 8a186 186 0 1 0 2 0zm36 368a186 186 0 0 1 0-364"/>
                    <path d="m272 8a186 186 0 1 0 2 0z" fill="none"/>
                </g>
            </g> 
        </Box>
    )
}

export const CengIcon = (props) => {


    const {baseColor, hoverColor} = props;

    return(
        <Box
            as="svg"
            xmnls="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            stroke={baseColor}
            fill={baseColor}
            _hover={{stroke: hoverColor, fill: hoverColor}}
            strokeWidth="4"
            viewBox="0 0 234.02 234.75"            
            >
            <g transform="translate(-21.756 -18.874)">
                <g transform="translate(5.4198 1.5529)">
                    <path d="m17.022 134.8 116.23-116.79 116.41 116.71-116.54 116.67z" fill="none" strokeWidth=".97117px"/>
                    <g>
                        <path d="m185.01 134.24-51.539-0.24219v-115.77l58.124 58.118c31.968 31.965 58.124 58.222 58.124 58.348 0 0.12634-2.9629 0.13098-6.5843 0.0103-3.6214-0.12066-29.777-0.32838-58.124-0.46159zm17.482-19.066c0-0.89047-49.28-50.183-50.171-50.183-0.37803 0-0.68732 7.0431-0.68732 15.651v15.651l19.495 19.556h15.682c8.6249 0 15.682-0.30377 15.682-0.67505z"/>
                        <path d="m75.459 192.91-57.994-58 57.825-0.6743c31.804-0.37086 58.006-0.49281 58.228-0.271s0.29809 26.625 0.16952 58.674l-0.23377 58.271zm29.197-29.835-10.225-10.254h-14.773c-8.125 0-14.773 0.30377-14.773 0.67505s11.137 11.818 24.748 25.437l24.748 24.762 0.24987-15.183 0.24986-15.183z"/>
                        <path d="m154.88 188.89 0.0382-14.524 20.687-19.574 27.387 0.50208-48.15 48.121z"/>
                        <path d="m89.916 90.355 23.606-23.621 0.50342 27.637-19.544 19.605h-28.171z"/>
                    </g>
                </g>
            </g>
        </Box>        
    )
}


