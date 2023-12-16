import { UseToastOptions, useToast } from "@chakra-ui/react";



export const useSuccessToast = (text?: string) => {

    successToastProps.title = text || '完了！';

    return useToast(successToastProps);
};


export const successToastProps: UseToastOptions = {
    title: '完了！',
    status: 'success',
};


export const errorToastProps: UseToastOptions = {
    title: '失敗しました',
    status: 'error',
};

export const toastDefaultOptions = {
    defaultOptions: {
        position: 'bottom-right' as const,
        duration: 2000,
    }
};