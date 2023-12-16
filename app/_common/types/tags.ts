import tags from "../../_config/tags";

export type TagNameType = keyof typeof tags;

export type TagType = { label: string; color: string; };


export type TagsType = { [key: string]: TagType; };