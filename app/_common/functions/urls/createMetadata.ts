import { Metadata } from "next";
import { getPageInfo } from "./usePageInfo";


export const createMetadata = (pagePath: string): Metadata => {


    if (pagePath[0] !== '/') {
        pagePath = '/' + pagePath;
    }

    const pageInfo = getPageInfo(pagePath);

    return {
        title: pageInfo.title,
        description: pageInfo.description,
    };
};