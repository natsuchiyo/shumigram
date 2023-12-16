'use client';

import { Box, chakra } from "@chakra-ui/react";




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