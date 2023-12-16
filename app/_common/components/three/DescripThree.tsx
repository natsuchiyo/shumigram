import { SimpleTable } from '../tables/SimpleTable';
import { Center } from '@chakra-ui/react';
import { Headline } from '../parts/Headline';
import { DescriptionSection } from '../pieces/Descriptions';





export const ThreeDescription = () => {

    return (
        <DescriptionSection title='3Dの操作方法'>

            <Center>
                <SimpleTable
                    outline
                    size='sm'
                    width='full'
                    maxWidth='md'
                    columnHeaders={[
                        { label: 'PC' },
                        { label: 'スマホ' }
                    ]}
                    rowHeaders={[
                        { label: '回転' },
                        { label: 'ズーム' },
                        { label: '視点移動' }
                    ]}
                    data={[
                        ['ドラッグ', 'ドラッグ'],
                        ['ホイール操作', 'ピンチアウト'],
                        ['右ボタンドラッグ', 'ピンチ操作'],
                    ]}
                />
            </Center>
        </DescriptionSection>
    );
};