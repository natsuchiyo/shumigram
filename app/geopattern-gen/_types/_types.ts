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