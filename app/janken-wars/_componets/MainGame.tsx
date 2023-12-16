'use client';

import { HStack, Badge, VStack, Button } from '@chakra-ui/react';
import { canvasSize } from '../_values/_constants';
import { Settings } from './Settings';
import { useLogic } from '../_functions/useLogic';



export function MainGame() {

    const { start, stop, reset, canvasRef, isRunning, setSettingValues } = useLogic();

    return (
        <div>

            <HStack justifyContent='center' marginBottom='2'>
                <Badge variant='subtle' colorScheme='green' children='緑:グー' />
                <Badge variant='subtle' colorScheme='orange' children='赤:チョキ' />
                <Badge variant='subtle' colorScheme='blue' children='青:パー' />
            </HStack>

            <canvas
                ref={canvasRef}
                width={canvasSize}
                height={canvasSize}
                style={{
                    width: '100%',
                    objectFit: 'contain',
                    maxWidth: '360px',
                    borderRadius: '12px'
                }}
            />

            <VStack spacing={2} marginTop={2}>
                <HStack>
                    <Button onClick={start} isDisabled={isRunning}>スタート</Button>
                    <Button onClick={stop}>ストップ</Button>
                    <Button onClick={reset}>リセット</Button>
                </HStack>
                <Settings onSubmit={setSettingValues} />
            </VStack>
        </div>
    );
};