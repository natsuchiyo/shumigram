import { Thead, Tr, Th } from "@chakra-ui/react";
import { memo } from "react";
import { TableHeaderType } from "./types";



export const CustomThead = memo(function CustomThead(props: {
    columnHeaders?: TableHeaderType[];
    rowHeaders?: TableHeaderType[];
    firstHeader?: string;
}) {

    if (!props.columnHeaders) return null;

    return (
        <Thead>
            <Tr>
                {props.rowHeaders && <Th >{props.firstHeader}</Th>}

                {props.columnHeaders.map((header, i) => (
                    <Th key={i}  {...header.cellProps as any}>{header.label}</Th>
                ))}
            </Tr>
        </Thead>
    );
});

