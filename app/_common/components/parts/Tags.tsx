'use client';

import { HStack, Badge, StackProps } from "@chakra-ui/react";
import { TagNameType } from "../../types/tags";
import tags from "../../../_config/tags";



export const Tags = ({ tagNames, ...props }: StackProps & { tagNames?: TagNameType[]; }) => {

    if (!tagNames) return null;

    return (
        <HStack spacing='2'
            {...props as any}>
            {tagNames.map(tagName => (
                <Badge
                    key={tagName}
                    variant='solid'
                    fontSize='sm'
                    fontWeight='normal'
                    colorScheme={tags[tagName].color}
                    children={tags[tagName].label}
                />
            ))}
        </HStack>
    );
};
