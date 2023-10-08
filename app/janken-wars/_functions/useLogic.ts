import { useEffect, useRef, useState } from "react";
import { handColors, initialSettingValues, scale, stageLength } from "../_values/_constants";
import { randomInt } from "../../_functions/random";
import { drawPerson, getNextPosition, fight, clearPerson, createEmptyList } from "./utils";
import { PersonType, StageType, PositionType, HandsType } from "../_types";




export const useLogic = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const personListRef = useRef<PersonType[]>([]);

    const stageRef = useRef<StageType>([]);

    const timeOutIdRef = useRef(0);

    const [isRunning, setIsRunning] = useState(false);

    const [settingValues, setSettingValues] = useState(initialSettingValues);


    const getContext = () => {
        return canvasRef.current!.getContext('2d')!;
    };


    const createPerson = (hand: HandsType, emptyCellList: PositionType[], ctx: CanvasRenderingContext2D) => {

        const size = settingValues[hand];

        const handColor = handColors[hand];

        for (let i = 0; i < size; i++) {

            const positionIndex = randomInt(0, emptyCellList.length - 1);
            const position = emptyCellList[positionIndex];
            const person = { handColor, position };

            personListRef.current.push(person);
            stageRef.current[position.y][position.x] = person;
            drawPerson(person, ctx);

            emptyCellList.splice(positionIndex, 1);
        }
    };


    const init = () => {

        stageRef.current = Array(stageLength).fill(null).map(() => Array(stageLength).fill(null));

        personListRef.current = [];

        const emptyCellList = createEmptyList();


        const ctx = getContext();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(scale, scale);

        createPerson('rock', emptyCellList, ctx);
        createPerson('paper', emptyCellList, ctx);
        createPerson('scissors', emptyCellList, ctx);
    };


    const movePerson = (person: PersonType, ctx: CanvasRenderingContext2D) => {

        const nextPosition = getNextPosition(person.position);

        const targetPerson = stageRef.current[nextPosition.y][nextPosition.x];

        if (targetPerson) {
            fight(targetPerson, person, ctx);

        } else {
            stageRef.current[person.position.y][person.position.x] = null;
            clearPerson(person, ctx);

            stageRef.current[nextPosition.y][nextPosition.x] = person;
            person.position = nextPosition;
            drawPerson(person, ctx);
        }

    };

    const start = () => {

        const ctx = getContext();

        const run = () => {
            personListRef.current.forEach(person => movePerson(person, ctx));
            timeOutIdRef.current = window.setTimeout(run, -settingValues.speed);
        };

        run();

        setIsRunning(true);
    };


    const stop = () => {
        window.clearTimeout(timeOutIdRef.current);
        setIsRunning(false);
    };


    const reset = () => {
        stop();
        getContext().clearRect(0, 0, stageLength, stageLength);
        init();
    };


    useEffect(reset, [settingValues]);


    return {
        canvasRef,
        start,
        reset,
        stop,
        setSettingValues,
        isRunning,
    };
};



