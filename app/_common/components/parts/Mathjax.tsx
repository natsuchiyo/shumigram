'use client';

import { Box, chakra } from '@chakra-ui/react';





export const ExpresionBox = chakra(Box, {
    baseStyle: {
        overflowY: 'hidden',
        fontSize: 'lg',
        textAlign: 'center',
        marginY: '4',
        maxWidth: 'full'
    }
});