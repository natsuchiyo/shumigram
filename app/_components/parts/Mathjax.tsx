'use client';

import { Box, BoxProps, chakra } from '@chakra-ui/react';



// export const ExpresionBox = (props: BoxProps) => {

//     return (
//         <Box
//             overflowY='hidden'
//             fontSize='lg'
//             textAlign='center'
//             marginY='4'
//             maxWidth='full'
//             {...props}
//         >
//             {String.raw`${props.children}`}
//         </Box>
//     );
// };

export const ExpresionBox = chakra(Box, {
    baseStyle: {
        overflowY: 'hidden',
        fontSize: 'lg',
        textAlign: 'center',
        marginY: '4',
        maxWidth: 'full'
    }
});