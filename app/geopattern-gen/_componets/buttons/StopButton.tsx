import { Button } from '@chakra-ui/react';
import { useStopController } from '../../_functions/useStopController';



export function StopButton() {

    const stop = useStopController();

    return (
        <Button onClick={stop} >ストップ</Button>
    );
};