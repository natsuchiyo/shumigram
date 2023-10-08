export type HandsType = 'rock' | 'scissors' | 'paper';

// export type HandsType={
//     rock:string;
//    scissors :string;
//     paper :string;
// }


export type PositionType = {
    x: number;
    y: number;
};

export type PersonType = {
    handColor: string;
    position: PositionType;
};

export type StageType = (PersonType | null)[][];


export type settingValuesType = {
    rock: number;
    paper: number;
    scissors: number;
    speed: number;
};