import { useApplyController } from '../../_functions/useApplyController';
import { Button } from '@chakra-ui/react';



export function ApplyButton() {

    const apply = useApplyController();

    return (
        <Button onClick={apply}>設定反映</Button>
    );
};