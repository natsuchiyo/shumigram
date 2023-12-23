'use client';

import { VStack, Box } from '@chakra-ui/react';
import { Canvas } from './canvases/Canvas';
import { Inputs } from './inputs/Inputs';
import { GeopatternTweet } from './buttons/Tweet';
import { ControlButtons } from './buttons/ControlButtons';
import { useRefs } from '../_functions/useRefs';
import { GeopatternContext } from './GeopatternContext';




export function MainApp() {

    const value = useRefs();

    return (
        <GeopatternContext.Provider value={value}>

            <Box width='full' paddingX={4}>

                <Canvas />

                <VStack spacing={8} marginTop={2}>

                    <ControlButtons />

                    <Inputs />

                </VStack>



            </Box>

        </GeopatternContext.Provider>
    );
};