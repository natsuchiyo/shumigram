import { ReactNode } from "react";
import { TagNameType } from "./tags";



export type BasePageInfoType = {
    _title: string;
    description: string;
    tags?: TagNameType[];
    relationPageList?: string[];
    showNav?: boolean;
};



export type PageInfoType = BasePageInfoType & {
    title: string;
    titleElm: ReactNode;
};




export type PageInfoMapType = Map<string, PageInfoType>;


