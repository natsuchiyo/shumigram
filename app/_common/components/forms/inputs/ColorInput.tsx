import { Box, BoxProps, Center, Input, chakra, styled } from '@chakra-ui/react';
import { ChangeEventHandler, ReactNode } from 'react';
import { Small } from '../../parts/Text';



export const ColorInput = ({ label, value, onChangeValue, ...props }: BoxProps & {
    label?: ReactNode;
    value: string;
    onChangeValue: (colorValue: string) => void;
}) => {


    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        onChangeValue(event.target.value);
    };


    return (
        <Center
            as='label'
            borderRadius='md'
            borderWidth={1}
            borderColor={value}
            gap={1}
            display='inline-flex'
            // width='24'
            paddingX={2}
            {...props as any}
        >
            <chakra.input
                type='color'
                width='1em'
                height='1em'
                value={value}
                onChange={onChange}
            />
            <Small>{label}</Small>
        </Center>
    );
};