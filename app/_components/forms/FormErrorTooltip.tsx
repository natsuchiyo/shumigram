import { Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";



export const FormErrorTooltip = (props: { isShow: boolean; text: string; children: ReactNode; }) => {
    return (
        <Tooltip
            hasArrow
            bg='gray.600'
            fontSize='xs'
            isOpen={props.isShow}
            label={props.text}
            children={props.children}
        />
    );
}; 