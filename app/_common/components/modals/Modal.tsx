'use client';

import { ModalOverlay, ModalContent, Modal as ChakraModal, ModalProps, ModalCloseButton, ModalHeader, Button, ModalFooter, ModalBody } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { Form, FormPropsType } from '../forms/Form';
import { useModal } from './useModal';
import { useSuccessToast } from '../../functions/hooks/useToast';
import { FormButton } from '../forms/parts/FormButton';




export const Modal = ({ title, modalNumber = 0, onSubmit, submitLabel, children, ...props }: Omit<ModalProps, 'isOpen' | 'onClose'> & {
    modalNumber?: number;
    title?: string;
    submitLabel?: string;
    onSubmit?: () => void;
}) => {


    const { isOpen, closeModal } = useModal(modalNumber);


    const onClick = () => {
        onSubmit && onSubmit();
        closeModal();
    };


    return (
        <ChakraModal isCentered {...props} onClose={closeModal} isOpen={isOpen}>

            <ModalOverlay bg='blackAlpha.400' backdropFilter='blur(2px)' />

            <ModalContent>

                <ModalHeader children={title} />
                <ModalCloseButton />

                {children}

                {submitLabel && (
                    <ModalFooter>
                        <Button children={submitLabel} onClick={onClick} />
                    </ModalFooter>
                )}

            </ModalContent>

        </ChakraModal>
    );
};




export const FormModal = <T extends FieldValues = any>({ formProps, title, modalNumber = 0, submitLabel, toastText, children, ...props }: Omit<ModalProps, 'isOpen' | 'onClose'> & {
    modalNumber?: number;
    title?: string;
    submitLabel: string;
    formProps: FormPropsType<T>;
    toastText?: string;
}) => {


    const { isOpen, closeModal } = useModal(modalNumber);

    const successToast = useSuccessToast(toastText);


    const onSubmit = (formValues: T) => {
        formProps.onSubmit(formValues);
        toastText && successToast();
        closeModal();
    };


    return (
        <ChakraModal isCentered {...props} onClose={closeModal} isOpen={isOpen}>

            <ModalOverlay bg='blackAlpha.400' backdropFilter='blur(2px)' />

            <ModalContent>

                <ModalHeader children={title} />
                <ModalCloseButton />

                <Form {...formProps} onSubmit={onSubmit}>

                    <ModalBody>
                        {children}
                    </ModalBody>

                    <ModalFooter>
                        <FormButton children={submitLabel} />
                    </ModalFooter>

                </Form>

            </ModalContent>

        </ChakraModal>
    );
};