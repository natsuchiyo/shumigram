'use client';

import { Button, Input, InputProps, Box, FormControlProps } from '@chakra-ui/react';
import { forwardRef, LegacyRef, useContext } from 'react';
import { get, RegisterOptions, useFormState } from 'react-hook-form';
import { FormContext } from '../Form';
import { FormErrorTooltip } from '../parts/FormErrorTooltip';




export type MouseEventWithValue = React.MouseEvent & { target: { value: string; }; };




export const NumButtonInput = forwardRef(function NumButtonInput({ onClickPlus, onClickMinus, ...props }: InputProps & {
    onClickPlus: (e: MouseEventWithValue) => void;
    onClickMinus: (e: MouseEventWithValue) => void;
}, ref: LegacyRef<HTMLInputElement>) {


    return (
        <Box whiteSpace='nowrap' display='inline-block' >
            <Button value='1' onClick={onClickPlus as any} fontSize='xl' size='xs'>+</Button>
            <Input
                type='number'
                width='auto'
                marginX='2'
                ref={ref}
                {...props as any}
            />
            <Button value='-1' onClick={onClickMinus as any} fontSize='xl' size='xs'>-</Button>
        </Box >
    );
});




export const FormNumButtonInput = ({ name, options, ...props }: FormControlProps & {
    name: string;
    options?: RegisterOptions;
}) => {


    const { register, control, getValues, setValue } = useContext(FormContext);
    const { errors } = useFormState({ name, control });
    const error = get(errors, name);


    const onClickNumButton = (e: MouseEventWithValue) => {

        const currentNum = getValues(name);

        const addingNum = parseFloat(e.target.value);

        setValue(name, (currentNum || 0) + addingNum, {
            shouldValidate: true,
            shouldDirty: true
        });
    };


    return (
        <FormErrorTooltip isShow={error} text={error?.message}  >
            <NumButtonInput
                onClickPlus={onClickNumButton}
                onClickMinus={onClickNumButton}
                isInvalid={!!error}
                {...props}
                {...register(name, { valueAsNumber: true, ...options as any })}
            />
        </FormErrorTooltip>
    );
};




