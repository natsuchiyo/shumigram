import { useEffect, useRef, useState } from "react";
import { clearCanvas, updateRadiansList, createInitialStartCoords, drawLines, nextCoords, createAddRadiansList, createInitialRadiansList, createCenterCoordList, fillBgColor } from "./utils";
import { CirclesType, CoordListType } from "../_types/_types";
import { canvasHalfSize, drawInterval, pageName } from "../_values/constants";
import { useRecoilCallback, useSetRecoilState } from "recoil";
import { bgColorAtom, circlesAtom } from "../_values/states";
import { useSearchParams } from "next/navigation";
import { createCirclesFromParams } from "./createCirclesFromParams";
import { createQueryParams } from "./createQueryParams";



export const useLogic = () => {

    const [isRunning, setIsRunning] = useState(false);

    const setCircles = useSetRecoilState(circlesAtom);

    const setBgColor = useSetRecoilState(bgColorAtom);

    const searchParams = useSearchParams();

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const upperCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const timeOutIdRef = useRef(0);
    const startCoordListRef = useRef<CoordListType>([]);
    const radiansListRef = useRef<number[]>([]);
    const addRadiansListRef = useRef<number[]>([]);
    const circlesRef = useRef<CirclesType>([]);
    const bgColorRef = useRef<string>('');


    const getContext = () => canvasRef.current!.getContext('2d')!;

    const getUpperContext = () => upperCanvasRef.current!.getContext('2d')!;


    const start = () => {

        const ctx = getContext();
        const upperCtx = getUpperContext();

        const run = () => {

            const circles = circlesRef.current;

            const {
                endCoordList,
                centerCoordList
            } = nextCoords(radiansListRef.current, circles);

            drawLines('drawTrajectory', startCoordListRef.current, endCoordList, circles, ctx);

            clearCanvas(upperCtx);

            drawLines('drawNeedle', centerCoordList, endCoordList, circles, upperCtx);

            radiansListRef.current = updateRadiansList(radiansListRef.current, addRadiansListRef.current);

            startCoordListRef.current = endCoordList;

            timeOutIdRef.current = window.setTimeout(run, drawInterval);
        };

        run();

        setIsRunning(true);
    };


    const stop = () => {
        window.clearTimeout(timeOutIdRef.current);
        setIsRunning(false);
    };



    const apply = useRecoilCallback(({ snapshot }) => async () => {

        const bgColor = await snapshot.getPromise(bgColorAtom);

        const circles = await snapshot.getPromise(circlesAtom);

        window.history.replaceState(null, '', `${window.location.pathname}?${createQueryParams(circles, bgColor)}`);

        radiansListRef.current = createInitialRadiansList(circles);
        addRadiansListRef.current = createAddRadiansList(circles);
        startCoordListRef.current = createInitialStartCoords(circles);

        circlesRef.current = circles;
        bgColorRef.current = bgColor;

        reset();
    });


    const reset = () => {

        // clearCanvas(getContext());
        // clearCanvas(getUpperContext());

        drawInitialLine();
    };


    const drawInitialLine = () => {

        const circles = circlesRef.current;
        const centerCoordList = createCenterCoordList(startCoordListRef.current);

        fillBgColor(bgColorRef.current, getContext());

        drawLines('drawNeedle', centerCoordList, startCoordListRef.current, circles, getUpperContext());
    };



    useEffect(() => {

        if (searchParams.size) {
            const { bgColor, circles } = createCirclesFromParams(searchParams);
            setCircles(circles);
            setBgColor(bgColor);
        }

        const ctx = getContext();
        ctx.translate(canvasHalfSize, canvasHalfSize);
        const upperCtx = getUpperContext();
        upperCtx.translate(canvasHalfSize, canvasHalfSize);

        apply();

        return () => { ctx.reset(); upperCtx.reset(); };
    }, []);



    return {
        canvasRef,
        upperCanvasRef,
        start,
        reset,
        stop,
        apply,
        isRunning
    };
};