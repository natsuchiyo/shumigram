import { Box, Center } from '@chakra-ui/react';
import { faChartPie, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { Linking } from '../parts/Linking';
import { headerHeight } from './_values';



export const Header = memo(function Header() {

    return (
        <Center
            as='header'
            bg='mainLight'
            fontSize='xl'
            fontWeight='bold'
            width='full'
            height={headerHeight}
            position='fixed'
            zIndex='layout'
        >
            <Linking href='/' textDecoration='none !important' color='white'>
                <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '4px' }} />シュミグラム
            </Linking>
        </Center>
    );
});