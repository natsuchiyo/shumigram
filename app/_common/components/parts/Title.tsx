'use client';

import { Box, BoxProps } from "@chakra-ui/react";
import { Headline } from "./Headline";
import { Tags } from "./Tags";
import { getPageInfo, usePageInfo } from "../../functions/urls/usePageInfo";
import { MdxMetaType } from "../../types/types";
import { BlogDateTimes } from "../pieces/BlogDateTime";



export const Title = (props: BoxProps) => {


    const pageInfo = usePageInfo();


    return (
        <Box marginX={4} marginBottom={8} {...props}>
            <Headline
                as='h1'
                design="colorfulborder"
                display='inline-block'
                textAlign='center'
                size='lg'
                children={pageInfo.titleElm}
            />
            <Tags tagNames={pageInfo.tags} justifyContent='right' marginY='2' />
        </Box>
    );
};


export const PageTitle = ({ path, ...props }: BoxProps & { path: string; }) => {


    const pageInfo = getPageInfo(path);


    return (
        <Headline
            as='h1'
            design="colorfulborder"
            size='lg'
            marginX={4}
            marginBottom={12}
            children={pageInfo.titleElm}
        />
        // <Tags tagNames={pageInfo.tags} justifyContent='right' />
    );
};


export function BlogTitle({ mdxMeta }: { mdxMeta: MdxMetaType; }) {


    return (
        <Box marginBottom={16} >
            <Headline
                as='h1'
                design="colorfulborder"
                // display='inline-block'
                // textAlign='center'
                size='lg'
                children={mdxMeta.title}
            />
            <Tags tagNames={mdxMeta.tagNames} marginY={2} />
            <BlogDateTimes datemodified={mdxMeta.datemodified} datepublished={mdxMeta.datepublished} />
        </Box>
    );
};