import { Button, ButtonProps } from '@chakra-ui/react';


export const Clickable = (props: ButtonProps) => {

    return <Button variant='ghost' color='inherit' borderRadius='none' padding={0} {...props as any} />;
};