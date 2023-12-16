import { ChartType, ChartOptions } from "chart.js";
import { merge } from "../../functions/util";



const defaultOptions = {
    scales: {
        x: {
            title: { font: { size: 14, weight: 'bold', } },
            ticks: { includeBounds: false }
        },
        y: {
            title: { display: false, },
            ticks: { includeBounds: false }
        }
    }
};



export const createChartOptions = <T extends ChartType = ChartType>(options: ChartOptions<T>) => {
    return merge(options, defaultOptions) as ChartOptions<T>;
};
