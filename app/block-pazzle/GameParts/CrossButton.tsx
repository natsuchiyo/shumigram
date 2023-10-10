import { memo, MouseEvent, MouseEventHandler } from 'react';
import { Button, ButtonProps, Center, Flex } from '@chakra-ui/react';
import { Bold } from '../../_components/parts/Text';




export const CrossButton = memo(function CrassButton(props: {
    text: string,
    clickDirection(direction: string): void;
}) {


    const onClick = (e: any) => {
        props.clickDirection(e.target.value);
    };


    return (
        <Center
            display='inline-flex'
            width='92px'
            height='70px'
            position='relative'
            justifyContent='space-around'
            flexDirection='column'
        >
            <UpButton onClick={onClick} value='U' />
            <Bold>{props.text}</Bold>
            <DownButton onClick={onClick} value='D' />
            <Flex position='absolute' width='full' justifyContent='space-between'>
                <LeftButton onClick={onClick} value='L' />
                <RightButton onClick={onClick} value='R' />
            </Flex>
        </Center>
    );
});



const defaultProps: ButtonProps = {
    backgroundColor: 'transparent',
    width: '0px',
    height: '0px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4))',
    minWidth: '0',
    variant: 'unstyled',
};



const UpButton = (props: ButtonProps) => {
    return (
        <Button
            {...defaultProps}
            {...props as any}
            paddingLeft='2px'
            borderWidth='0 18px 18px 20px'
            borderBottomColor='button'
            _hover={{ borderBottomColor: 'mainDark' }}
        />
    );
};



const RightButton = (props: ButtonProps) => {
    return (
        <Button
            {...defaultProps}
            {...props as any}
            paddingTop='4px'
            borderWidth='13px 0 13px 22px'
            borderLeftColor='button'
            _hover={{ borderLeftColor: 'mainDark' }}
        />
    );
};



const DownButton = (props: ButtonProps) => {
    return (
        <Button
            {...defaultProps}
            {...props as any}
            paddingLeft='2px'
            borderWidth='18px 18px 0 18px'
            borderTopColor='button'
            _hover={{ borderTopColor: 'mainDark' }}
        />
    );
};



const LeftButton = (props: ButtonProps) => {
    return (
        <Button
            {...defaultProps}
            {...props as any}
            paddingTop='4px'
            borderWidth='13px 22px 13px 0'
            borderRightColor='button'
            _hover={{ borderRightColor: 'mainDark' }}
        />
    );
};