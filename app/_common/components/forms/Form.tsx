'use client';

import { copy } from "copy-anything";
import { createContext, PropsWithChildren } from "react";
import { useForm, UseFormProps, FieldValues, UseFormReturn } from "react-hook-form";



export type FormPropsType<T extends FieldValues = any> = PropsWithChildren & UseFormProps<T> & {
    onSubmit: (newValues: T) => void;
};



export const FormContext = createContext({} as UseFormReturn);



export const Form = <T extends FieldValues = any>(props: FormPropsType<T>) => {


    const methods = useForm({ mode: 'onChange', ...props });


    // providerに渡すためメモ化する    
    // TODO 必要？
    // const methodValues = useMemo(() => methods, []);

    // サブミットして得られるデータはディープコピーされているため,すべて新しいオブジェクトとなる
    const onSubmit = methods.handleSubmit(
        (data: T) => { props.onSubmit(copy(data)); }
    );


    return (
        <FormContext.Provider value={methods as any}>
            <form onSubmit={onSubmit} >
                {props.children}
            </form>
        </FormContext.Provider>
    );
};