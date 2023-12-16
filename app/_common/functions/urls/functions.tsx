import { Box } from "@chakra-ui/react";
import { BasePageInfoType, PageInfoType, PageInfoMapType } from "../../types/pageInfos";




export const createPageInfo = (pageInfo: BasePageInfoType): PageInfoType => {

    return {
        ...pageInfo,

        get title() {
            return this._title.replace(':', '');
        },

        get titleElm() {

            const titleArray = this._title.split(':');

            return (
                <>
                    <Box display='inline-block'>{titleArray[0]}</Box>
                    {titleArray[1] && <Box display='inline-block'>{titleArray[1]}</Box>}
                </>
            );
        },
    };
};




export const createPageInfos = (basePageInfoList: [string, BasePageInfoType][]): PageInfoMapType => {

    basePageInfoList.forEach((basePageInfoArray) => {

        basePageInfoArray[1] = createPageInfo(basePageInfoArray[1]);
    });

    return new Map(basePageInfoList) as PageInfoMapType;
};




export const convertUrlToPageName = (url: string) => {

    const path = url[url.length - 1] === '/' ? url.slice(0, -1) : url;

    return url[0] === '/' ? path.slice(1) : path;
};

