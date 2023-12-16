import { theme } from "@chakra-ui/react";
import { HandsType } from "../_types";


export const stageLength = 80;

export const maxHandSize = stageLength * stageLength;

export const scale = 5;

export const canvasSize = scale * stageLength;

export const initialSettingValues = {
    rock: 5600,
    paper: 400,
    scissors: 400,
    speed: -150
};

export const handColors: { [key in HandsType]: string; } = {
    rock: '#4CAF50',//緑
    scissors: '#F57C00',//赤
    paper: '#2196F3',//青
};