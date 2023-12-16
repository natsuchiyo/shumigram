import { Box, List, ListItem } from "@chakra-ui/react";
import { IconText } from "../parts/IconText";
import { Small } from "../parts/Text";
import { Paper } from "../parts/Paper";
import InfomationsList from "../../../_config/infomationList";
import { InfoOutlineIcon } from "../chakraIcons";




export const Infomations = () => {


    if (!(InfomationsList?.length)) return null;


    return (
        <Paper padding='4' width='full' >

            <IconText
                as='h4'
                icon={InfoOutlineIcon}
                color='subtext'
                fontWeight='bold'
                fontSize='xl'
                marginBottom='2'
                children='お知らせ'
            />

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

