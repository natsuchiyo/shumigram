import { ReadonlyURLSearchParams } from "next/navigation";
import { GeometricPatternDataType } from "../_types/_types";



export const createCirclesFromParams = (params: ReadonlyURLSearchParams): GeometricPatternDataType => {

    const bgColor = '#' + params.get('b')!;
    const lineLengthList = params.getAll('l');
    const angleList = params.getAll('a');
    const reverseList = params.getAll('r');
    const drawTrajectoryList = params.getAll('t');
    const drawNeedleList = params.getAll('n');
    const colorList = params.getAll('c');


    const circles = lineLengthList.map((_, i) => ({
        lineLength: parseFloat(lineLengthList[i]),
        angle: parseFloat(angleList[i]),
        reverse: reverseList[i] === 't',
        drawTrajectory: drawTrajectoryList[i] === 't',
        drawNeedle: drawNeedleList[i] === 't',
        color: '#' + colorList[i],
    }));

    return { bgColor, circles };
};