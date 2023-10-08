import { memo } from "react";
import { Props } from "@react-three/fiber";
import { Box, BoxProps } from "@chakra-ui/react";



export type ThreeCanvasType = Omit<Props, 'children'> & Partial<Pick<Props, 'children'>> & React.RefAttributes<HTMLCanvasElement>;


export const CanvasWrapper = memo(function CanvasWrapper({ aspectRatio = '1.2', ...props }: BoxProps & {
    aspectRatio?: string;
}) {

    return (
        <Box
            position='relative'
            backgroundColor='gray.800'
            width='full'
            maxWidth='lg'
            borderRadius='2xl'
            sx={{ aspectRatio }}
            {...props}
        />
    );
});

