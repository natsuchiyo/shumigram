
import { HStack, StackProps, Text, TextProps } from "@chakra-ui/react";
import { TimeIcon } from "../chakraIcons";




export function BlogDateTimes({ datemodified, datepublished, ...props }: StackProps & {
    datemodified: string;
    datepublished: string;
}) {

    return (
        <HStack
            spacing={2}
            justifyContent='flex-end'
            flexWrap="wrap"
            {...props as any}
        >
            {datemodified !== datepublished && <ModifiedDate date={datemodified} />}
            <PublishedDate date={datepublished} />
        </HStack>
    );
};



function PublishedDate(props: { date: string; }) {
    return <BlogDateTime label="公開" itemProp='datepublished' date={props.date} />;
};


function ModifiedDate(props: { date: string; }) {
    return <BlogDateTime label="更新" itemProp='datemodified' date={props.date} />;
};



function BlogDateTime({ itemProp, date, label, ...props }: TextProps & {
    date: string;
    label: string;
    itemProp: string;
}) {

    return (
        <Text
            as={HStack}
            variant="body2"
            color="text-secondary"
            spacing={1}
            fontSize='sm'
            {...props as any}
        >
            <span>{label}</span>
            <TimeIcon fontSize="small" />
            <time dateTime={date} itemProp={itemProp} >{date}</time>
        </Text>
    );
};