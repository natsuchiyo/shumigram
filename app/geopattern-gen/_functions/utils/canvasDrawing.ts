import { CirclesType, CoordListType, CoordType, DrawKeyType } from "../../_types/_types";
import { canvasHalfSize, canvasSize } from "../../_values/constants";




export const drawLine = (prevCoord: CoordType, nextCoord: CoordType, ctx: CanvasRenderingContext2D) => {

    ctx.beginPath();

    ctx.moveTo(...prevCoord);

    ctx.lineTo(...nextCoord);

    ctx.stroke();
};



export const drawLines = (
    drawKey: DrawKeyType,
    startCoordList: CoordListType,
    endCoordList: CoordListType,
    circles: CirclesType,
    ctx: CanvasRenderingContext2D,
) => {

    circles.forEach((circle, i) => {

        if (!circle[drawKey]) return;

        ctx.strokeStyle = circle.color;

        drawLine(startCoordList[i], endCoordList[i], ctx);
    });
};



export const clearCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(-canvasHalfSize, -canvasHalfSize, canvasSize, canvasSize);
};



export const fillBgColor = (bgColor: string, ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.fillStyle = bgColor;
    ctx.fillRect(-canvasHalfSize, -canvasHalfSize, canvasSize, canvasSize);
};