import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { MainContents } from './_common/components/layouts/MainContents';
import { PageCard } from './_common/components/pieces/PageCard';
import ExportedImage from 'next-image-export-optimizer';
import { createMetadata } from './_common/functions/urls/createMetadata';
import config from './_config/config';
import { listedPathList } from './_common/values/listedPathList';




export default function TopPage() {


  return (
    <MainContents maxWidth='full' paddingY={10}>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        minChildWidth='250px'
        spacing='4'
        spacingY='14'
        width='full'
        justifyItems='center'
      >

        <ExportedImage src={config.basePath + '/img/logo.png'} width={250} height={250} alt='ロゴ' />

        {listedPathList.map(pageName => <PageCard key={pageName} path={pageName} />)}
      </SimpleGrid>

    </MainContents>
  );
}



export const metadata = createMetadata('');