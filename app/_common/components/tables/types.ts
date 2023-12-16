import { TableCellProps } from "@chakra-ui/react";
import { ReactNode } from "react";


export type TableHeaderType = {
    label: ReactNode;
    unit?: string;
    valueFormat?: (cellValue: ReactNode) => ReactNode;
    hideUnitFn?: (cellValue: ReactNode) => boolean;
    cellProps?: TableCellProps;
};