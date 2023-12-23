import { useRecoilCallback, useSetRecoilState } from "recoil";
import { createAddRadiansList, createInitialRadiansList, createInitialStartCoords } from "./utils/utils";
import { bgColorAtom, circlesAtom, currentUrlAtom } from "../_values/states";
import { createQueryParams } from "./utils/createQueryParams";
import { useResetController } from "./useResetController";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { canvasHalfSize } from "../_values/constants";
import { createCirclesFromParams } from "./utils/createCirclesFromParams";
import { GeopatternContext } from "../_componets/GeopatternContext";



export const useApplyController = () => {


    const {
        lowerCanvasRef,
        upperCanvasRef,
        circlesRef,
        addRadiansListRef,
        bgColorRef
    } = useContext(GeopatternContext);

    const searchParams = useSearchParams();

    const setCircles = useSetRecoilState(circlesAtom);

    const setBgColor = useSetRecoilState(bgColorAtom);

    const reset = useResetController();


    const apply = useRecoilCallback(({ snapshot, set }) => async () => {

        const bgColor = await snapshot.getPromise(bgColorAtom);

        const circles = await snapshot.getPromise(circlesAtom);

        const currentUrl = `${window.location.pathname}?${createQueryParams(circles, bgColor)}`;

        window.history.replaceState(null, '', currentUrl);

        addRadiansListRef.current = createAddRadiansList(circles);

        circlesRef.current = circles;
        bgColorRef.current = bgColor;

        reset();

        set(currentUrlAtom, currentUrl);
    });


    useEffect(() => {

        const lowerCanvasCtx = lowerCanvasRef.current!.getContext("2d")!;
        const upperCanvasCtx = upperCanvasRef.current!.getContext("2d")!;

        if (searchParams.size) {
            const { bgColor, circles } = createCirclesFromParams(searchParams);
            setCircles(circles);
            setBgColor(bgColor);
        }

        lowerCanvasCtx.translate(canvasHalfSize, canvasHalfSize);
        upperCanvasCtx.translate(canvasHalfSize, canvasHalfSize);

        apply();

        return () => { lowerCanvasCtx.reset(); upperCanvasCtx.reset(); };
    }, []);

    return apply;
};
