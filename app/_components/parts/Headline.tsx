import { Box, Center, Heading, HeadingProps } from "@chakra-ui/react";



type DesignType = 'leftborder' | 'doubleborder' | 'colorfulborder' | 'sideborder' | 'none';



export function Headline({ design = 'none', ...props }: HeadingProps & {
    design?: DesignType;
}) {

    const Component = headlines[design];

    return <Component as="h2" {...props} />;
}






const Leftborder = (props: HeadingProps) => {

    return (
        <Heading
            paddingY='2'
            paddingLeft='4'
            borderLeftWidth='5px'
            borderColor='mainLight'
            {...props as any}
        />
    );
};




const Doubleborder = (props: HeadingProps) => {

    return (
        <Heading
            textAlign='center'
            padding='4'
            borderTopWidth='4px'
            borderBottomWidth='4px'
            borderColor='gray.500'
            borderRadius='4px'
            {...props as any}
        />
    );
};




const Colorfulborder = (props: HeadingProps) => {

    return (
        <Heading
            borderBottomWidth='3px'
            borderColor='gray.100'
            position='relative'
            _before={{
                position: 'absolute',
                content: `""`,
                display: 'block',
                border: 'none',
                borderBottomWidth: '3px',
                borderStyle: 'solid',
                borderColor: 'mainLight',
                bottom: '-3px',
                width: '30%'
            }}
            {...props as any}
        >
            <Box padding={2}>{props.children}</Box>
        </Heading>
    );
};





const Sideborder = (props: HeadingProps) => {

    return (
        <Center>
            <Heading
                fontSize='2xl'
                position='relative'
                textAlign='center'
                maxWidth='sm'
                width='full'
                _before={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    width: '100%',
                    height: '3px',
                    content: '""',
                    backgroundColor: 'mainLight'
                }}
                {...props as any}
            >
                <Box
                    display='inline-block'
                    position='relative'
                    padding='0 1em'
                    background='white'
                    children={props.children}
                />
            </Heading>
        </Center>
    );
};

const headlines: { [key in DesignType]: any } = {
    leftborder: Leftborder,
    doubleborder: Doubleborder,
    colorfulborder: Colorfulborder,
    sideborder: Sideborder,
    none: Heading
};

