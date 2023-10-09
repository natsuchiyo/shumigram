'use client';

import { useLogic } from "./_functions/useLogic";
import { Badge, Box, Button, HStack, VStack } from "@chakra-ui/react";
import { MainContents } from "../_components/layouts/MainContents";
import { Title } from "../_components/parts/Title";
import { Settings } from "./_componets/Settings";
import { canvasSize, handColors } from "./_values/_constants";




export default function Page() {


  const { start, stop, reset, canvasRef, isRunning, setSettingValues } = useLogic();


  return (
    <MainContents>

      <Title />

      <div>

        <HStack justifyContent='center' marginBottom='2'>
          <Badge variant='subtle' colorScheme='green' children='青:グー' />
          <Badge variant='subtle' colorScheme='orange' children='赤:チョキ' />
          <Badge variant='subtle' colorScheme='blue' children='緑:パー' />
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
    </MainContents >
  );
}

