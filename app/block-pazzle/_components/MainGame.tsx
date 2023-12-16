'use client';

import { Box } from '@chakra-ui/react';
import { GameHandlers } from './gameParts/GameHandlers';
import { MainCanvas } from './gameCanvas/MainCanvas';
import { useMainLogic } from '../_functions/useMainLogic';
import EditModal from './settingModal/SettingModal';
import { createContext } from 'react';
import { BlockPazzleState, HandlersType } from '../values/_type';



export const BlockPazzleContext = createContext([{}, {}] as [BlockPazzleState, HandlersType]);


export const MainGame = () => {


    const { immerState, handlers } = useMainLogic();


    return (
        <Box width='full' maxWidth='lg'>
            <BlockPazzleContext.Provider value={[immerState, handlers]}>

                <MainCanvas stageSize={immerState.stageSize} />

                <GameHandlers />

                <EditModal />

            </BlockPazzleContext.Provider>
        </Box>
    );
};