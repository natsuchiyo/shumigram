import { Center, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { MainContents } from './_components/layouts/MainContents';
import { Card } from './_components/pieces/PageCard';
import { Headline } from './_components/parts/Headline';
import { simulationUrlList } from './_config/urls/urls';
import { Metadata } from 'next';
import logoImg from "./_assets/img/logo.png";
import ExportedImage from 'next-image-export-optimizer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'シュミグラム',
  description: '趣味で始めるプログラミング',
};

export default function TopPage() {


  return (
    <MainContents maxWidth='full' paddingY={10}>

      {/* <Center marginBottom='4'>
        <Headline
          as='h1'
          size='lg'
          display='inline-block'
          design='doubleborder'
          children='プログラム一覧'
        />
      </Center> */}

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        minChildWidth='250px'
        spacing='4'
        spacingY='14'
        width='full'
        justifyItems='center'
      >
        <Image src={logoImg} width={250} alt={'ロゴ'} />
        {simulationUrlList.map(url => <Card key={url} url={url} />)}
      </SimpleGrid>

    </MainContents>
  );
}