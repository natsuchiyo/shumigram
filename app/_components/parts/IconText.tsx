import { HStack, Icon, IconProps, StackProps, Text } from "@chakra-ui/react";



export const IconText = ({ icon, iconProps, ...props }: StackProps & {
    icon: any;
    iconProps?: IconProps;
}) => {

    return (
        <HStack {...props as any}>
            <Icon as={icon} color='mainDark' {...iconProps} />
            <Text >{props.children}</Text>
        </HStack>
    );
};