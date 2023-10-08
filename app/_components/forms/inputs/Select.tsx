'use client';

import { SelectProps, Select } from "@chakra-ui/react";
import { ChangeEventHandler, useContext } from "react";
import { get, RegisterOptions, useFormState } from "react-hook-form";
import { FormContext } from "../Form";




export const SelectInput = <T extends any = any>({ optionList, onChangeValue, ...props }: SelectProps & {
    optionList: { value: T; label: string | number; }[];
    onChangeValue: (value: T) => void;
}) => {

    const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        onChangeValue(optionList[event.target.selectedIndex].value);
    };

    return (
        <Select onChange={onChange} display='inline-block' width='24' {...props as any} >
            {optionList.map((option, i) => (
                <option key={i} value={option.value + ''}>{option.label}</option>
            ))}
        </Select>
    );
};




export const FormSelect = <T extends any = any>({ name, options, optionList, ...props }: SelectProps & {
    name: string;
    optionList: { value: T; label: string | number; }[];
    options?: RegisterOptions;
}) => {

    const { register, control } = useContext(FormContext);
    const { errors } = useFormState({ name, control });
    const error = get(errors, name);

    return (
        <Select {...props as any} isInvalid={error} {...register(name, options)}>
            {optionList.map((option, i) => (
                <option key={i} value={option.value + ''}>{option.label}</option>
            ))}
        </Select>
    );
};


