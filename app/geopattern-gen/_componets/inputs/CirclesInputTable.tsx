import { Table, Thead, Tr, Th, Tbody, Td, TableContainer } from '@chakra-ui/react';
import { circlesLengthSelector } from '../../_values/states';
import { useRecoilValue } from 'recoil';
import { arrayMap } from '../../../_common/functions/array';
import { CircleNumInput } from './CircleNumInput';
import { CircleCheckbox } from './CircleCheckbox';
import { LineColorInput } from './CircleColorInput';



export function CirclesInputTable() {

    const circlesLength = useRecoilValue(circlesLengthSelector);

    return (
        <TableContainer>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>長さ</Th>
                        <Th>回転角度</Th>
                        <Th>逆回転</Th>
                        <Th>軌道線を描く</Th>
                        <Th>回転針を表示</Th>
                        <Th>線の色</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {arrayMap(circlesLength, (_, circleIndex) => (
                        <Tr key={circleIndex}>
                            <Th>線{circleIndex + 1}</Th>
                            <Td>
                                <CircleNumInput circleKey='lineLength' circleIndex={circleIndex} />
                            </Td>
                            <Td>
                                <CircleNumInput circleKey='angle' circleIndex={circleIndex} />
                            </Td>
                            <Td>
                                <CircleCheckbox circleKey='reverse' circleIndex={circleIndex} />
                            </Td>
                            <Td>
                                <CircleCheckbox circleKey='drawTrajectory' circleIndex={circleIndex} />
                            </Td>
                            <Td>
                                <CircleCheckbox circleKey='drawNeedle' circleIndex={circleIndex} />
                            </Td>
                            <Td>
                                <LineColorInput circleIndex={circleIndex} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};