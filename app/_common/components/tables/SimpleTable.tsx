import { Box, Table, TableProps } from '@chakra-ui/react';
import { memo, ReactNode } from 'react';
import { CustomTbody } from './Tbody';
import { CustomThead } from './Thead';
import { TableHeaderType } from './types';



export const SimpleTable = memo(function SimpleTable({
    data,
    columnHeaders,
    rowHeaders,
    firstHeader,
    size,
    variant,
    outline,
    ...props
}: Omit<TableProps, 'outline'> & {
    data?: null | ReactNode[][];
    columnHeaders?: TableHeaderType[];
    rowHeaders?: TableHeaderType[];
    firstHeader?: string;
    outline?: true;
}) {


    if (!data || !data.length) return null;


    const style = outline && variant !== 'cellborder'
        ? { "tr:last-child td": { borderBottom: 'none' } }
        : undefined;


    return (
        <Box
            borderRadius='md'
            borderWidth={outline ? '1px' : 'none'}
            overflowX='auto'
            overflowY='hidden'
            width='full'
            maxWidth='full'
            {...props as any}
        >
            <Table
                whiteSpace='nowrap'
                variant={variant}
                size={size}
                sx={style}
            >

                <CustomThead
                    columnHeaders={columnHeaders}
                    rowHeaders={rowHeaders}
                    firstHeader={firstHeader}
                />

                <CustomTbody
                    data={data}
                    columnHeaders={columnHeaders}
                    rowHeaders={rowHeaders}
                />

            </Table>
        </Box >
    );
});