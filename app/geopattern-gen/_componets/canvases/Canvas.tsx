import { useContext } from 'react';
import { canvasSize } from '../../_values/constants';
import { Box } from '@chakra-ui/react';
import { GeopatternContext } from '../GeopatternContext';



export function Canvas() {


    const { lowerCanvasRef, upperCanvasRef } = useContext(GeopatternContext);


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
                ref={lowerCanvasRef}
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
                ref={upperCanvasRef}
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