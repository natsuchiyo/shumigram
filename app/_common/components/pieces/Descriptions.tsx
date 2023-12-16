import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Headline } from '../parts/Headline';
import { Box, BoxProps, Container, ContainerProps } from '@chakra-ui/react';





export const DescriptionArea = (props: ContainerProps) => {

    return (
        <Container
            centerContent
            maxWidth='750px'
            gap='12'
            // width='full'
            {...props as any}
        />
    );
};





export const DescriptionSection = (props: {
    title: string;
    children: ReactNode;
}) => {

    return (
        <Box as='section' maxWidth='full' paddingX={{ base: 0, sm: 8, lg: 12 }}        >
            <Headline as='h2' design='sideborder' children={props.title} marginBottom='6' />
            {props.children}
        </Box>
    );
};






export const DescripSubArea = (props: BoxProps) => {

    return (
        <Box
            paddingY='4'
            paddingX={{ base: '0', sm: '4', lg: '8' }}
            {...props}
        />
    );
};




export const ExampleText = () => {
    return <div style={{ fontSize: '85%', margin: '20px 0 5px' }}>
        ---------
        {<FontAwesomeIcon icon={faPencilAlt} style={{ fontSize: '85%' }} />}
        例---------
    </div>;
};


