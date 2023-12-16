import { Divider, Flex, Heading, LinkBox } from "@chakra-ui/react";
import { LinkingOverlay } from "../parts/Linking";
import { Tags } from "../parts/Tags";
import { BlogMetaType } from "../../types/types";
import { BlogDateTimes } from "./BlogDateTime";



export const BlogCard = (props: BlogMetaType) => {

    return (
        <LinkBox
            width='full'
            height='full'
            borderRadius='md'
            overflow='hidden'
            bg='article-bg'
            maxWidth='380px'
            borderWidth='1px'
            borderColor='paper-bg'
            padding={4}
            boxShadow='md'
            display='flex'
            flexDirection='column'
            _hover={{
                transform: 'translateY(-3px)',
                boxShadow: 'md'
            }}
        >

            <Flex flexGrow={1} flexDirection='column' alignItems='stretch'>

                <Heading as='h4' size='sm' flexGrow={1}>
                    <LinkingOverlay href={`/blog/${props.slug}`}>{props.title}</LinkingOverlay>
                </Heading>

                <BlogDateTimes
                    datemodified={props.datemodified}
                    datepublished={props.datepublished}
                    marginTop={4}
                />
            </Flex>

            <Divider borderColor='mainLight' borderBottomWidth={2} marginX='auto' marginY={4} />

            <Tags tagNames={props.tagNames} />

        </LinkBox>
    );
};