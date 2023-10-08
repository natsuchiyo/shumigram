import { FlexProps } from '@chakra-ui/react';
import { Paper } from '../parts/Paper';
import { MetaHead } from '../parts/MetaHead';



export const MainContents = (props: FlexProps) => {

    return (
        <>
            {/* <MetaHead /> */}
            <Paper
                padding={1}
                display='flex'
                flexDirection='column'
                alignItems='center'
                gap='20'
                paddingY='20'
                width='full'
                // maxWidth='3xl'
                {...props}
            />
        </>
    );
};