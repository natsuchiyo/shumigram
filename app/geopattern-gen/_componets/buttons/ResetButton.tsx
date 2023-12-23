import { useResetController } from '../../_functions/useResetController';
import { Button } from '@chakra-ui/react';



export function ResetButton() {

    const reset = useResetController();

    return (
        <Button onClick={reset} >リセット</Button>
    );
};