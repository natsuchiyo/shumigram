import { HStack } from '@chakra-ui/react';
import { memo } from 'react';
import { Small } from '../../../_common/components/parts/Text';
import { BgColorInput } from './BgColorInput';
import { CircleLengthButton } from './CircleLengthButton';
import { CirclesInputTable } from './CirclesInputTable';
import { SampleSelect } from './SampleSelect';



export const Inputs = memo(function Inputs() {

    return (
        <>
            <CirclesInputTable />

            <HStack flexWrap='wrap' spacing={8}>

                <HStack spacing={2}>
                    <CircleLengthButton type='add' />
                    <CircleLengthButton type='delete' />
                </HStack>

                <Small>背景色<BgColorInput /></Small>

                <SampleSelect />

            </HStack>
        </>
    );
});