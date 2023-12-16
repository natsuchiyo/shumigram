'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import { memo } from 'react';
import { useModalHandlers } from './useModal';



export const ModalOpenButton = memo(function ModalOpenButton({ modalNumber = 0, modalIndex = 0, ...props }: ButtonProps & {
    modalNumber?: number;
    modalIndex?: any;
}) {

    const { openModalClosure } = useModalHandlers(modalNumber);


    return <Button {...props as any} onClick={openModalClosure(modalIndex)} />;
});