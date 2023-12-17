import { MutableRefObject } from 'react';
import { canvasSize } from '../../_values/constants';
import { Box } from '@chakra-ui/react';



export function Canvas(props: {
    lowerCanvasRef: MutableRefObject<HTMLCanvasElement | null>;
    upperCanvasRef: MutableRefObject<HTMLCanvasElement | null>;
}) {
    return (
        <Box
            position='relative'
            width='full'
            borderRadius='xl'
            maxWidth='sm'
            aspectRatio={1}
            overflow='hidden'
            margin='auto'
        >
            <canvas
                ref={props.lowerCanvasRef}
                width={canvasSize}
                height={canvasSize}
                style={{
                    position: 'absolute',
                    width: '100%',
                    // objectFit: 'contain',
                    // maxWidth: '360px',
                    // borderRadius: '12px'
                }}
            />
            <canvas
                ref={props.upperCanvasRef}
                width={canvasSize}
                height={canvasSize}
                style={{
                    position: 'absolute',
                    width: '100%',
                    // objectFit: 'contain',
                    // maxWidth: '360px',
                    // borderRadius: '12px'
                }}
            />
        </Box>
    );
};