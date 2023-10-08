import { Chart, Plugin } from "chart.js";



export const verticalYTitlePlugin: Plugin = {

    id: 'verticalYTitle',

    start: (chart: any, args, opts) => {

        const fontSize = 14;


        const yTitle = (chart.options.scales?.y as any)?.title;

        if (yTitle) {
            chart.verticalYTitle = {};
            (chart.options.layout!.padding as any).left = 25;
            chart.verticalYTitle.font = `bold ${fontSize}px sans-serif`;
            chart.verticalYTitle.fillStyle = chart.options.color;
            chart.verticalYTitle.lineHeight = fontSize * 1.1;
            chart.verticalYTitle.xPosition = 8;

            verticalYTitlePlugin.afterLayout = setYTitlePosition;

            verticalYTitlePlugin.afterDraw = drawYTitle;
        };
    },
};


const setYTitlePosition = (chart: any) => {
    const yTitle = (chart.options.scales?.y as any)?.title;
    chart.verticalYTitle.yPosition = (chart.chartArea.top + chart.chartArea.bottom - (yTitle.text.length - 1) * chart.verticalYTitle.lineHeight) / 2;
};


const drawYTitle = (chart: any) => {
    const yTitle = chart.options.scales.y.title;
    chart.ctx.font = chart.verticalYTitle.font;
    chart.ctx.fillStyle = chart.verticalYTitle.fillStyle;

    Array.prototype.forEach.call(yTitle.text, (ch, i) => {
        chart.ctx.fillText(ch, chart.verticalYTitle.xPosition, chart.verticalYTitle.yPosition + chart.verticalYTitle.lineHeight * i);
    });
};