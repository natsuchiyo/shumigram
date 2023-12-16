'use client';

import { BarElement, CategoryScale, Chart, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
import { ColorsPlugin } from "./plugins/colors";
import { verticalYTitlePlugin } from "./plugins/verticalYTitle";
import { Box, BoxProps } from "@chakra-ui/react";


Chart.defaults.borderColor = 'hsl(0,0%,93%)';


Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    verticalYTitlePlugin,
    ColorsPlugin,
    // Annotation,
);



export const ChartArea = (props: BoxProps) => {

    return (
        <Box
            data-testid='chart'
            display='inline-block'
            width='full'
            maxWidth='lg'
            {...props}
        />
    );
};

