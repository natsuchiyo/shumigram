'use client';

import { Input, InputProps } from "@chakra-ui/react";
import { useContext } from "react";
import { get, RegisterOptions, useFormState } from "react-hook-form";
import { FormContext } from "../Form";
import { FormErrorTooltip } from "../FormErrorTooltip";




export const FormInput = ({ name, options, ...props }: InputProps & {
    name: string;
    options?: RegisterOptions;
}) => {


    const { register, control } = useContext(FormContext);
    const { errors } = useFormState({ name, control });
    const error = get(errors, name);


    return (
        <FormErrorTooltip isShow={error} text={error?.message}  >
            <Input {...props as any} isInvalid={error} {...register(name, options)} />
        </FormErrorTooltip>
    );
};

