import { useRecoilState } from "recoil";
import { drawInterval } from "../_values/constants";
import { nextCoords, updateRadiansList } from "./utils/utils";
import { isRunningAtom } from "../_values/states";
import { drawLines, clearCanvas } from "./utils/canvasDrawing";
import { useContext } from "react";
import { GeopatternContext } from "../_componets/GeopatternContext";



export const useStartController = () => {


    const {
        lowerCanvasRef,
        upperCanvasRef,
        circlesRef,
        radiansListRef,
        startCoordListRef,
        addRadiansListRef,
        timeOutIdRef
    } = useContext(GeopatternContext);

    const [isRunning, setIsRunning] = useRecoilState(isRunningAtom);


    const start = () => {

        const lowerCanvasCtx = lowerCanvasRef.current!.getContext("2d")!;
        const upperCanvasCtx = upperCanvasRef.current!.getContext("2d")!;

        const run = () => {

            const circles = circlesRef.current;

            const {
                endCoordList,
                centerCoordList
            } = nextCoords(radiansListRef.current, circles);

            drawLines('drawTrajectory', startCoordListRef.current, endCoordList, circles, lowerCanvasCtx);

            clearCanvas(upperCanvasCtx);

            drawLines('drawNeedle', centerCoordList, endCoordList, circles, upperCanvasCtx);

            radiansListRef.current = updateRadiansList(radiansListRef.current, addRadiansListRef.current);
            timeOutIdRef;
            startCoordListRef.current = endCoordList;

            timeOutIdRef.current = window.setTimeout(run, drawInterval);
        };

        run();

        setIsRunning(true);
    };

    return { start, isRunning };
};
