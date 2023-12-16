import { theme } from "@chakra-ui/react";
import { ChartDataset, Chart, DoughnutController, PolarAreaController } from "chart.js";
import { transparentize } from "color2k";

interface ColorsPluginOptions {
    enabled?: boolean;
    forceOverride?: boolean;
}

interface ColorsDescriptor {
    backgroundColor?: unknown;
    borderColor?: unknown;
}


const BORDER_COLORS = [
    theme.colors.blue[400],
    theme.colors.orange[400],
    theme.colors.green[400],
    theme.colors.purple[400],
    theme.colors.yellow[400],
    theme.colors.red[400],
    theme.colors.gray[400],
];


const BACKGROUND_COLORS = BORDER_COLORS.map(color => transparentize(color, 0.2));



function getBorderColor(i: number) {
    return BORDER_COLORS[i % BORDER_COLORS.length];
}

function getBackgroundColor(i: number) {
    return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
}

function colorizeDefaultDataset(dataset: ChartDataset, i: number) {
    dataset.borderColor = getBorderColor(i);
    dataset.backgroundColor = getBackgroundColor(i);

    return ++i;
}

function colorizeDoughnutDataset(dataset: ChartDataset, i: number) {
    dataset.backgroundColor = dataset.data.map(() => getBorderColor(i++));

    return i;
}

function colorizePolarAreaDataset(dataset: ChartDataset, i: number) {
    dataset.backgroundColor = dataset.data.map(() => getBackgroundColor(i++));

    return i;
}

function getColorizer(chart: Chart) {
    let i = 0;

    return (dataset: ChartDataset, datasetIndex: number) => {
        const controller = chart.getDatasetMeta(datasetIndex).controller;

        if (controller instanceof DoughnutController) {
            i = colorizeDoughnutDataset(dataset, i);
        } else if (controller instanceof PolarAreaController) {
            i = colorizePolarAreaDataset(dataset, i);
        } else if (controller) {
            i = colorizeDefaultDataset(dataset, i);
        }
    };
}

function containsColorsDefinitions(
    descriptors: ColorsDescriptor[] | Record<string, ColorsDescriptor>
) {
    let k: number | string;

    for (k in descriptors) {
        if ((descriptors as any)[k].borderColor || (descriptors as any)[k].backgroundColor) {
            return true;
        }
    }

    return false;
}

function containsColorsDefinition(
    descriptor: ColorsDescriptor
) {
    return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
}

export const ColorsPlugin = {
    id: 'colors',

    defaults: {
        enabled: true,
        forceOverride: false
    } as ColorsPluginOptions,

    beforeLayout(chart: Chart, _args: any, options: ColorsPluginOptions) {
        if (!options.enabled) {
            return;
        }

        const {
            data: { datasets },
            options: chartOptions
        } = chart.config;
        const { elements } = chartOptions!;

        if (!options.forceOverride && (containsColorsDefinitions(datasets) || containsColorsDefinition(chartOptions!) || (elements && containsColorsDefinitions(elements)))) {
            return;
        }

        const colorizer = getColorizer(chart);

        datasets.forEach(colorizer);
    }
};