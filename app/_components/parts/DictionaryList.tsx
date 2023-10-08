import { List, ListItem, Box } from "@chakra-ui/react";



export const DictionaryList = (props: { list: [string, string][]; }) => {

    return (
        <List spacing='8'>
            {props.list.map(([word, description], i) => (
                <ListItem key={i}>
                    <Box fontWeight='bold'>{word}</Box>
                    <Box paddingLeft='8'>{description}</Box>
                </ListItem>
            ))}
        </List>
    );
};