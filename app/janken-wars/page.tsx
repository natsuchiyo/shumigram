'use client';

import { useLogic } from "./_functions/useLogic";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
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
        <HStack>
          <Box as='span' color={handColors.rock} fontWeight='bold'>青:グー</Box>
          <Box as='span' color={handColors.scissors} fontWeight='bold'>赤:チョキ</Box>
          <Box as='span' color={handColors.paper} fontWeight='bold'>緑:パー</Box>
        </HStack>

        <canvas
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          style={{
            width: '100%',
            objectFit: 'contain',
            maxWidth: '360px'
          }}
        />

        <VStack spacing={4} marginTop={4}>
          <HStack>
            <Button onClick={start} isDisabled={isRunning}>スタート</Button>
            <Button onClick={stop} isDisabled={!isRunning}>ストップ</Button>
            <Button onClick={reset}>リセット</Button>
          </HStack>
          <Settings onSubmit={setSettingValues} />
        </VStack>
      </div>
    </MainContents >
  );
}

