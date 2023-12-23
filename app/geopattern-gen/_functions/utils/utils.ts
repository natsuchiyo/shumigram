import { CircleType, CirclesType, CoordListType, CoordType, DrawKeyType } from "../../_types/_types";
import { canvasHalfSize, canvasSize } from "../../_values/constants";



export const nextCoord = (centerCoord: CoordType, radians: number, lineLength: number): CoordType => {
    return [
        centerCoord[0] + Math.cos(radians) * lineLength,
        centerCoord[1] + Math.sin(radians) * lineLength
    ];
};

export const nextCoords = (radiansList: number[], circles: CirclesType) => {

    const centerCoordList: CoordListType = [[0, 0]];
    const endCoordList: CoordListType = [];

    circles.forEach((circle, i) => {
        const endCood = nextCoord(centerCoordList[i], radiansList[i], circle.lineLength);
        centerCoordList.push(endCood);
        endCoordList.push(endCood);
    });

    centerCoordList.pop();

    return { centerCoordList, endCoordList };
};



export const createInitialStartCoords = (circles: CirclesType) => {

    const startCoord: CoordListType = [];

    circles.forEach((circle, index) => {
        let totalLineLength = 0;
        for (let i = 0; i <= index; i++) {
            totalLineLength += circles[i].lineLength;
        }
        startCoord.push([0, -totalLineLength]);
    });

    return startCoord;
};



export const createAddRadiansList = (circles: CirclesType) => {

    return circles.map((circle, i) => {

        const radians = (circle.reverse ? 360 - circle.angle : circle.angle) * Math.PI / 180;

        // if (circle.reverse) return 360 - radians;
        return radians;
    });
};


export const updateRadiansList = (radiansList: number[], addRadiansList: number[]) => {
    return radiansList.map((r, i) => r + addRadiansList[i]);
};


export const createCenterCoordList = (startCoordList: CoordListType): CoordListType => {
    return [
        [0, 0],
        ...startCoordList.slice(0, -1)
    ];
};


export const createInitialRadiansList = (circles: CirclesType) => {
    return circles.map(() => Math.PI * 1.5);
};




export const createDefaultCircle = (): CircleType => {
    return {
        lineLength: 10,
        angle: 1,
        reverse: false,
        drawTrajectory: true,
        drawNeedle: true,
        color: '#000000'
    };
};
