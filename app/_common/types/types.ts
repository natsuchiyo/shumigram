import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";



export type CustomConfigType = {
    brandColor: string;
    brandLightNum?: number;
    brandDarkNum?: number;
    accentColor: string;
    clickableColor: string;
    initialColorMode?: 'light' | 'dark';
    websiteLabelName: string;
    websiteName: string;
    headerIcon?: IconProp;
    basePath?: string;
};

export type InfomationType = {
    date: string;
    text: ReactNode;
};


export type ConfigType = Required<CustomConfigType>;

export type TagType = { label: string; color: string; };


export type TagsType = { [key: string]: TagType; };


export type MdxMetaType = {
    title: string;
    tagNames: any[];
    datepublished: string;
    datemodified: string;
    description?: string;
    usedVersions?: string[];
    private?: boolean;
};



export type BlogMetaType = MdxMetaType & {
    slug: string;
};