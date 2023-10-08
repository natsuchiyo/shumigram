'use client';

import { Box, BoxProps, chakra } from "@chakra-ui/react";



// export function Paper(props: BoxProps) {

//     return (
//         <Box
//             display='inline-block'
//             bg='white'
//             padding='4'
//             borderRadius='md'
//             boxShadow='xs'
//             overflow='auto'
//             {...props}
//         />
//     );
// }



export const Paper = chakra(Box, {
    baseStyle: {
        // display: 'inline-block',
        display: 'block',
        maxWidth: '3xl',
        bg: 'white',
        padding: '4',
        borderRadius: 'md',
        boxShadow: 'xs',
        overflow: 'auto',
    }
});