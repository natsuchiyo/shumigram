import { useStartController } from '../../_functions/useStartController';
import { Button } from '@chakra-ui/react';



export function StartButton() {

    const { start, isRunning } = useStartController();

    return (
        <Button onClick={start} isDisabled={isRunning}>スタート</Button>
    );
};