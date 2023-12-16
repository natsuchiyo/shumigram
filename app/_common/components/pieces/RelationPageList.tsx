'use client';

import { LinkIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { List, ListItem, HStack, ListIcon } from "@chakra-ui/react";
import { usePageInfo, getPageInfo } from "../../functions/urls/usePageInfo";
import { IconText } from "../parts/IconText";
import { Linking } from "../parts/Linking";
import { Paper } from "../parts/Paper";



export const RelationPageList = () => {


    const relationPageList = usePageInfo().relationPageList;

    if (!relationPageList) return null;


    return (
        <Paper padding='4' width='full' >

            <IconText as='h4' icon={LinkIcon} fontWeight='bold' fontSize='xl' marginBottom='2'>
                関連シミュレーション
            </IconText>

            <List spacing='3'>
                {relationPageList.map((url: string) => (
                    <ListItem key={url}>
                        <HStack>
                            <ListIcon as={ArrowRightIcon} color='button' />
                            <Linking href={url} children={getPageInfo(url).titleElm} />
                        </HStack>
                    </ListItem>
                ))}
            </List>

        </Paper>
    );
};