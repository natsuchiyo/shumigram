import { MutableRefObject } from "react";

export type CoordType = [number, number];

export type CoordListType = CoordType[];

export type CircleType = {
    lineLength: number;
    angle: number;
    drawTrajectory: boolean;
    drawNeedle: boolean;
    color: string;
    reverse: boolean;
};

export type DrawKeyType = 'drawTrajectory' | 'drawNeedle';

export type CircleKeyType = keyof CircleType;

export type CirclesType = CircleType[];


export type GeometricPatternDataType = {
    // title: string;
    bgColor: string;
    circles: CirclesType;
};

export type GeometricPatterSampleType = GeometricPatternDataType & {
    title: string;
};

export type GeopatternContextValueType = {
    lowerCanvasRef: MutableRefObject<HTMLCanvasElement | null>;
    upperCanvasRef: MutableRefObject<HTMLCanvasElement | null>;
    timeOutIdRef: MutableRefObject<number>;
    startCoordListRef: MutableRefObject<CoordListType>;
    radiansListRef: MutableRefObject<number[]>;
    addRadiansListRef: MutableRefObject<number[]>;
    circlesRef: MutableRefObject<CirclesType>;
    bgColorRef: MutableRefObject<string>;
};