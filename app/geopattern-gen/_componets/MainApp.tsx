'use client';

import { HStack, VStack, Button, Box } from '@chakra-ui/react';
import { useLogic } from '../_functions/useLogic';
import { Canvas } from './canvases/Canvas';
import { Inputs } from './inputs/Inputs';



export function MainApp() {


    const {
        start,
        stop,
        reset,
        apply,
        canvasRef,
        upperCanvasRef,
        isRunning,
    } = useLogic();


    return (
        <Box width='full'>

            <Canvas lowerCanvasRef={canvasRef} upperCanvasRef={upperCanvasRef} />

            <VStack spacing={4} marginTop={2}>

                <HStack flexWrap='wrap'>
                    <Button onClick={start} isDisabled={isRunning}>スタート</Button>
                    <Button onClick={stop}>ストップ</Button>
                    <Button onClick={reset}>リセット</Button>
                    <Button onClick={apply}>設定反映</Button>
                </HStack>

                <Inputs />

            </VStack>

        </Box>
    );
};