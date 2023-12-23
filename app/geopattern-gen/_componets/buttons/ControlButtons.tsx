import { HStack } from '@chakra-ui/react';
import { StartButton } from './StartButton';
import { StopButton } from './StopButton';
import { ResetButton } from './ResetButton';
import { ApplyButton } from './ApplyButton';




export function ControlButtons() {

    return (
        <HStack flexWrap='wrap'>
            <StartButton />
            <StopButton />
            <ResetButton />
            <ApplyButton />
        </HStack>
    );
};