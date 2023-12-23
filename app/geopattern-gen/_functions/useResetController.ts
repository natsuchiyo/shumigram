import { useContext } from "react";
import { fillBgColor, drawLines, clearCanvas } from "./utils/canvasDrawing";
import { createCenterCoordList, createInitialRadiansList, createInitialStartCoords } from "./utils/utils";
import { GeopatternContext } from "../_componets/GeopatternContext";



export const useResetController = () => {


    const {
        lowerCanvasRef,
        upperCanvasRef,
        circlesRef,
        radiansListRef,
        startCoordListRef,
        addRadiansListRef,
        bgColorRef
    } = useContext(GeopatternContext);


    const reset = () => {

        const lowerCanvasCtx = lowerCanvasRef.current!.getContext("2d")!;
        const upperCanvasCtx = upperCanvasRef.current!.getContext("2d")!;

        const circles = circlesRef.current;

        radiansListRef.current = createInitialRadiansList(circles);
        startCoordListRef.current = createInitialStartCoords(circles);
        const centerCoordList = createCenterCoordList(startCoordListRef.current);

        fillBgColor(bgColorRef.current, lowerCanvasCtx);

        clearCanvas(upperCanvasCtx);

        drawLines('drawNeedle', centerCoordList, startCoordListRef.current, circles, upperCanvasCtx);
    };

    return reset;
};
