
import { Tbody, Td, Tr } from "@chakra-ui/react";
import { ReactNode } from "react";
import { CustomTd } from "./Td";
import { TableHeaderType } from "./types";





export const CustomTbody = ({ data, columnHeaders, rowHeaders }: {
    data: ReactNode[][];
    columnHeaders?: TableHeaderType[];
    rowHeaders?: TableHeaderType[];
}) => {

    return (
        <Tbody>

            {data.map((dataRow, rowIndex) => (
                <Tr key={rowIndex} >

                    {rowHeaders && (
                        <Td
                            fontWeight='bold'
                            color='gray.600'
                            fontSize='sm'
                            children={rowHeaders[rowIndex].label}
                        />
                    )}

                    {dataRow.map((value, clmIndex) => (
                        <CustomTd
                            key={clmIndex}
                            rowIndex={rowIndex}
                            clmIndex={clmIndex}
                            columnHeader={columnHeaders && columnHeaders[clmIndex]}
                            rowHeader={rowHeaders && rowHeaders[rowIndex]}
                            children={value}
                        />
                    ))}
                </Tr>
            ))}
        </Tbody>
    );
};


