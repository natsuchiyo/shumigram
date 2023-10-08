import { HandsType } from "../_types";


export const stageLength = 80;

export const scale = 5;

export const canvasSize = scale * stageLength;

export const initialSettingValues = {
    rock: 5600,
    paper: 400,
    scissors: 400,
    speed: -150
};

export const handColors: { [key in HandsType]: string; } = {
    rock: '#4CAF50',
    scissors: '#F57C00',
    paper: '#2196F3',
    // rock = theme.colors.blue[500] as any,
    // scissors = theme.colors.orange[500] as any,
    // paper = theme.colors.green[400] as any,
};