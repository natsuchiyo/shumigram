import { HStack, Badge, StackProps } from "@chakra-ui/react";
import { TagType } from "../../_config/urls/types";



export const Tags = (props: StackProps & { tags?: TagType[]; }) => {

    if (!props.tags) return null;

    return (
        <HStack spacing='2' marginY='2' {...props as any}>
            {props.tags.map(tag => (
                <Badge
                    key={tag.color}
                    variant='solid'
                    fontSize='sm'
                    fontWeight='normal'
                    colorScheme={tag.color}
                    children={tag.label}
                />
            ))}
        </HStack>
    );
};
