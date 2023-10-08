import { ReactNode } from "react";



export type BasePageInfoType = {
    _title: string;
    description: string;
    // tags?: TagType[];
    // relationPageList?: string[];
    // isSimulation: boolean;
};



export type PageInfoType = BasePageInfoType & {
    title: string;
    titleElm: ReactNode;
};



export type TagType = { label: string; color: string; };


export type TagsType = { [key: string]: TagType; };


export type RoutingType = Map<string, PageInfoType>;