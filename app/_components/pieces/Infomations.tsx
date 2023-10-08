import { Box, List, ListItem } from "@chakra-ui/react";
import { IconText } from "../parts/IconText";
import { Small } from "../parts/Text";
import { Paper } from "../parts/Paper";
import { InfomationsList } from "../../_config/values/infomationList";
import { InfoOutlineIcon } from "../chakraIcons";




export const Infomations = () => {

    return (
        <Paper padding='4' width='full' >

            <IconText as='h4' icon={InfoOutlineIcon} fontWeight='bold' fontSize='xl' marginBottom='2'>
                お知らせ
            </IconText>

            <List spacing='3'>
                {InfomationsList.map((info, i) => (
                    <ListItem key={i} borderBottomWidth='1px' borderColor='gray.100' paddingBottom={4}>
                        <Small>{info.date}</Small>
                        <Box display='inline-block' paddingLeft={1}>{info.text}</Box>
                    </ListItem>
                ))}
            </List>
        </Paper>

    );
};

