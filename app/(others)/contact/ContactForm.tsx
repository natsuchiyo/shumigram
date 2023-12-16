'use client';

import { Badge, Box, FormLabel, Grid, useToast } from '@chakra-ui/react';
import { Form } from '../../_common/components/forms/Form';
import { FormInput } from '../../_common/components/forms/inputs/Input';
import { FormTextarea } from '../../_common/components/forms/inputs/Textarea';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FormValuesType, postContact, resolver } from './_values';
import useSWRMutation from "swr/mutation";
import { PropsWithChildren } from 'react';
import { notice } from '../../_common/functions/console';
import { FormButton } from '../../_common/components/forms/parts/FormButton';



export const ContactForm = () => {

    const { executeRecaptcha } = useGoogleReCaptcha();

    const { trigger } = useSWRMutation('https://manemyu.net/api/contact', postContact);

    const toast = useToast();


    const onSubmit = async (newValues: FormValuesType) => {

        if (!executeRecaptcha) {
            notice('Execute recaptcha not yet available');
            return;
        }

        try {

            const token = await executeRecaptcha('contact');

            const response = await trigger({ ...newValues, recaptcha_response: token });

            if (response !== 1) throw Error();

            toast({ title: '送信完了', status: 'success' });

        } catch {
            toast({ title: '送信に失敗しました', status: 'error' });

        }
    };


    return (
        <Form onSubmit={onSubmit} resolver={resolver}>
            <Grid templateColumns={{ base: '1fr', md: 'auto 300px' }} gap='2'>
                <InputLabel>
                    <label htmlFor='name'>お名前</label>
                    <LabelBadge />
                </InputLabel>
                <FormInput id='name' name='name' />
                <InputLabel>
                    <label htmlFor='email'>メールアドレス</label>
                    <LabelBadge children='必須' />
                </InputLabel>
                <FormInput id='email' name='email' type="email" />
                <InputLabel>
                    <label htmlFor='message'>お問い合わせ内容</label>
                    <LabelBadge children='必須' />
                </InputLabel>
                <FormTextarea id='message' name='message' />
            </Grid>
            <Box textAlign='right' marginTop='8'>
                <FormButton />
            </Box>

        </Form>
    );
};


const LabelBadge = (props: PropsWithChildren) => {
    return <Badge width='34px' fontSize='2xs' marginX='2' children={props.children} />;
};


const InputLabel = (props: PropsWithChildren) => {
    return (
        <FormLabel textAlign={{ base: 'left', md: 'right' }} fontWeight='bold' {...props as any} />
    );
};