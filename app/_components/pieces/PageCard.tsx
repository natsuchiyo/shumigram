import { Box, Heading, LinkBox } from "@chakra-ui/react";
import ExportedImage from "next-image-export-optimizer";
import { LinkingOverlay } from "../parts/Linking";
import { Tags } from "../parts/Tags";
import { Small } from "../parts/Text";
import { getPageInfo } from "../../_config/urls/_functions/usePageInfo";




export const Card = ({ url }: { url: string; }) => {


    const pageInfo = getPageInfo(url);


    return (
        <LinkBox
            as='section'
            display='inline-block'
            width='full'
            height='full'
            borderRadius='md'
            overflow='hidden'
            bg='white'
            maxWidth='300px'
            borderWidth='1px'
            _hover={{
                transform: 'translateY(-3px)',
                boxShadow: 'md'
            }}
        >
            <ExportedImage
                priority
                src={'/img' + url + '.png'}
                alt={pageInfo.title}
                width={300}
                height={200}
                style={{ objectFit: 'contain' }}
            />

            <Box padding='5'>

                <Heading as='h4' size='sm' >
                    <LinkingOverlay href={url}>{pageInfo.titleElm}</LinkingOverlay>
                </Heading>

                <Tags tags={pageInfo.tags} />

                <Small >{pageInfo.description}</Small>

            </Box>

        </LinkBox>
    );
};