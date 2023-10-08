import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, AccordionProps } from '@chakra-ui/react';
import { ReactNode } from 'react';



export const SlideDown = ({ label, children, ...props }: AccordionProps & {
    label: ReactNode;
}) => {

    return (
        <Accordion
            allowToggle
            width='full'
            borderWidth='1px'
            borderColor='gray.300'
            borderRadius='md'
            bgColor='gray.50'
            overflow='hidden'
            {...props as any}
        >
            <AccordionItem border='none'>

                <AccordionButton
                    borderBottomWidth='1px'
                    borderColor='gray.300'
                    _hover={{ bgColor: 'gray.200' }}
                >
                    <Box flex='1' textAlign='center' fontWeight='bold' children={label} />
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} bgColor='white'>
                    {children}
                </AccordionPanel>

            </AccordionItem>
        </Accordion>
    );
};