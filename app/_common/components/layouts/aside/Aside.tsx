import { Center } from '@chakra-ui/react';
import { Infomations } from '../../pieces/Infomations';
import { RelationPageList } from '../../pieces/RelationPageList';
import { headerHeight } from '../_constants';



export const Aside = function Aside() {

    return (
        <>
            <Center maxWidth='100%' >
                <Infomations />
            </Center>
            <Center maxWidth='100%' position='sticky' top={headerHeight} paddingTop='4'>
                <RelationPageList />
            </Center>
        </>
    );
};