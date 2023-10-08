
import { Td } from "@chakra-ui/react";
import { XSmall } from "../parts/Text";
import { ReactNode } from "react";
import { TableHeaderType } from "./types";





export const CustomTd = (props: {
    children: ReactNode;
    columnHeader?: TableHeaderType;
    rowHeader?: TableHeaderType;
    rowIndex: number;
    clmIndex: number;
}) => {

    const valueFormat = props.columnHeader?.valueFormat || props.rowHeader?.valueFormat || (value => value);

    return (
        <Td
            data-testid={`${props.rowIndex}${props.clmIndex}`}
            {...props.columnHeader?.cellProps as any}
            {...props.rowHeader?.cellProps as any}
        >
            {valueFormat(props.children)}
            <TableUnit {...props} />
        </Td>
    );
};




const TableUnit = ({ children: cellValue, columnHeader, rowHeader }: {
    children: ReactNode;
    columnHeader?: TableHeaderType;
    rowHeader?: TableHeaderType;
}) => {


    if (columnHeader
        && columnHeader.unit
        && !(columnHeader.hideUnitFn && columnHeader.hideUnitFn(cellValue))
    ) {
        return <XSmall marginLeft='1'>{columnHeader.unit}</XSmall>;
    }

    if (rowHeader
        && rowHeader.unit
        && !(rowHeader.hideUnitFn && rowHeader.hideUnitFn(cellValue))
    ) {
        return <XSmall marginLeft='1'>{rowHeader.unit}</XSmall>;
    }

    return null;
};
