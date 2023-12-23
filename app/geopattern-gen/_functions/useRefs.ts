import { useRef } from "react";
import { CoordListType, CirclesType } from "../_types/_types";



export const useRefs = () => {

    const lowerCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const upperCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const timeOutIdRef = useRef(0);
    const startCoordListRef = useRef<CoordListType>([]);
    const radiansListRef = useRef<number[]>([]);
    const addRadiansListRef = useRef<number[]>([]);
    const circlesRef = useRef<CirclesType>([]);
    const bgColorRef = useRef<string>('');

    return {
        lowerCanvasRef,
        upperCanvasRef,
        timeOutIdRef,
        startCoordListRef,
        radiansListRef,
        addRadiansListRef,
        circlesRef,
        bgColorRef,
    };
};
