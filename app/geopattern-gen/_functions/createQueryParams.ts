import { CirclesType } from "../_types/_types";


export const createQueryParams = (circles: CirclesType, bgColor: string) => {

    let query = `b=${bgColor.replace('#', '')}`;

    circles.forEach((circle) => {
        query += `&a=${circle.angle}`
            + `&c=${circle.color.replace('#', '')}`
            + `&n=${circle.drawNeedle ? 't' : 'f'}`
            + `&t=${circle.drawTrajectory ? 't' : 'f'}`
            + `&r=${circle.reverse ? 't' : 'f'}`
            + `&l=${circle.lineLength}`;
    });

    return encodeURI(query);
};
