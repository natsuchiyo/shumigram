import { useRecoilValue } from 'recoil';
import { bgColorAtom } from '../../_values/states';
import { Box } from '@chakra-ui/react';


export function BgLayer() {

    const bgColor = useRecoilValue(bgColorAtom);

    return (
        <Box bgColor={bgColor} width='full' height='full' position='absolute' />

    );
};