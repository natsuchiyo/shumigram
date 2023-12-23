import { HStack } from '@chakra-ui/react';
import { memo } from 'react';
import { Small } from '../../../_common/components/parts/Text';
import { BgColorInput } from './BgColorInput';
import { CircleLengthButton } from '../buttons/CircleLengthButton';
import { CirclesInputTable } from './CirclesInputTable';
import { SampleSelect } from './SampleSelect';
import { GeopatternTweet } from '../buttons/Tweet';



export const Inputs = memo(function Inputs() {

    return (
        <>
            <CirclesInputTable />

            <HStack
                flexWrap='wrap'
                rowGap={4}
                columnGap={8}
                justifyContent='center'
            >

                <HStack spacing={2}>
                    <CircleLengthButton type='add' />
                    <CircleLengthButton type='delete' />
                </HStack>

                <Small>背景色<BgColorInput /></Small>

                <SampleSelect />

                <GeopatternTweet />

            </HStack>

        </>
    );
});




