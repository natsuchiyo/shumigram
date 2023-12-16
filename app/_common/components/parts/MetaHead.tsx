'use client';

import Head from 'next/head';
import { usePageInfo } from '../../functions/urls/usePageInfo';



export const MetaHead = () => {


    const pageInfo = usePageInfo();

    if (pageInfo === undefined) return null;


    return (
        <Head>
            <title>{pageInfo.title}</title>
            <meta name="description" content={pageInfo.description} />
        </Head>
    );
};