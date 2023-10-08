'use client';

import { List, ListItem, ListIcon, HStack } from "@chakra-ui/react";
import { Paper } from "../parts/Paper";
import { Linking } from "../parts/Linking";
import { IconText } from "../parts/IconText";
import { getPageInfo, usePageInfo } from "../../_config/urls/_functions/usePageInfo";
import { ArrowRightIcon, LinkIcon } from "../chakraIcons";



export const RelationPageList = () => {




    const relationPageList = usePageInfo().relationPageList;

    if (!relationPageList) return null;



    return (
        <Paper padding='4' width='full' >

            <IconText as='h4' icon={LinkIcon} fontWeight='bold' fontSize='xl' marginBottom='2'>
                関連シミュレーション
            </IconText>

            <List spacing='3'>
                {relationPageList.map(url => (
                    <ListItem key={url}>
                        <HStack>
                            <ListIcon as={ArrowRightIcon} color='pink.500' />
                            <Linking href={url} children={getPageInfo(url).titleElm} />
                        </HStack>
                    </ListItem>
                ))}
            </List>

        </Paper>
    );
};