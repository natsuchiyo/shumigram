import { Box, Divider, Heading, LinkBox } from "@chakra-ui/react";
import ExportedImage from "next-image-export-optimizer";
import { LinkingOverlay } from "../parts/Linking";
import { Tags } from "../parts/Tags";
import { Small } from "../parts/Text";
import { getPageInfo } from "../../functions/urls/usePageInfo";
import config from "../../../_config/config";



export const PageCard = ({ path }: { path: string; }) => {


    const pageInfo = getPageInfo(path);


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
                src={`${config.basePath}/img${path}.webp`}
                alt={pageInfo.title}
                width={300}
                height={200}
                style={{ objectFit: 'contain' }}
            />

            {/* <Divider borderColor='mainLight' borderBottomWidth={1} /> */}

            <Box padding='4' paddingTop='2'>

                <Heading as='h4' size='sm' >
                    <LinkingOverlay href={path}>{pageInfo.titleElm}</LinkingOverlay>
                </Heading>

                {pageInfo.tags && <Tags tagNames={pageInfo.tags} marginY='2' />}

                <Small >{pageInfo.description}</Small>

            </Box>

        </LinkBox>
    );
};