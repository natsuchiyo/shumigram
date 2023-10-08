'use client';

import { CheckboxProps, Checkbox } from "@chakra-ui/react";
import { ChangeEvent, memo, useContext } from "react";
import { get, RegisterOptions, useFormState } from "react-hook-form";
import { FormContext } from "../Form";



export const CheckboxInput = memo(function CheckboxInput({ onChangeValue, ...props }: CheckboxProps & {
    onChangeValue: (isChecked: boolean) => void;
}) {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e.target.checked);
    };

    return <Checkbox onChange={onChange} {...props as any} />;
});




export const FormCheckbox = memo(function FormCheckbox({ name, options, ...props }: CheckboxProps & {
    name: string;
    options?: RegisterOptions;
}) {

    const { register, control } = useContext(FormContext);
    const { errors } = useFormState({ name, control });
    const error = get(errors, name);

    return <Checkbox {...props as any} isInvalid={!!error}{...register(name, options)} />;
});

