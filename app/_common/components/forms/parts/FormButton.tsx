'use client';

import { Button, ButtonProps } from "@chakra-ui/react";
import { useContext } from "react";
import { useFormState } from "react-hook-form";
import { FormContext } from "../Form";



export const FormButton = (props: ButtonProps) => {

    const { control } = useContext(FormContext);
    const { isSubmitted, isValid } = useFormState({ control });


    // サブミット後にisValidでない場合はボタンを無効にする
    return <Button type='submit' isDisabled={isSubmitted && !isValid} children='送信' {...props as any} />;
};