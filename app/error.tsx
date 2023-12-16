'use client';

import { Linking } from './_common/components/parts/Linking';
import { Button, VStack } from '@chakra-ui/react';
import { Headline } from './_common/components/parts/Headline';
import { MainContents } from './_common/components/layouts/MainContents';



export default function Error({ error, reset, }: {
    error: Error & { digest?: string; };
    reset: () => void;
}) {

    return (
        <MainContents>
            <Headline as='h1' design='colorfulborder'>エラーが発生しました</Headline>
            <VStack spacing={8}>
                <Button
                    onClick={() => reset()}
                    children='ページを更新'
                />
                <Linking href='/' children='>>TOPへ戻る' />
            </VStack>
        </MainContents>
    );
}