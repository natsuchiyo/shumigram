'use client';

import { Textarea, TextareaProps } from "@chakra-ui/react";
import { useContext } from "react";
import { get, RegisterOptions, useFormState } from "react-hook-form";
import { FormContext } from "../Form";
import { FormErrorTooltip } from "../parts/FormErrorTooltip";




export const FormTextarea = ({ name, options, ...props }: TextareaProps & {
    name: string;
    options?: RegisterOptions;
}) => {


    const { register, control } = useContext(FormContext);
    const { errors } = useFormState({ name, control });
    const error = get(errors, name);


    return (
        <FormErrorTooltip isShow={error} text={error?.message}  >
            <Textarea {...props as any} isInvalid={error} {...register(name, options)} />
        </FormErrorTooltip>
    );
};