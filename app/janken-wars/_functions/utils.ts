import { randomInt } from "../../_common/functions/maths/random";
import { PositionType, PersonType } from "../_types";
import { handColors, stageLength } from "../_values/_constants";



export const createEmptyList = () => {

    const emptyCellList: PositionType[] = [];

    for (let x = 0; x < stageLength; x++) {
        for (let y = 0; y < stageLength; y++) {
            emptyCellList.push({ x, y });
        }
    }

    return emptyCellList;
};


export const getNextPosition = ({ x, y }: PositionType) => {
    return {
        x: x + (x === 0 ? randomInt(0, 1) : x === stageLength - 1 ? randomInt(-1, 0) : randomInt(-1, 1)),
        y: y + (y === 0 ? randomInt(0, 1) : y === stageLength - 1 ? randomInt(-1, 0) : randomInt(-1, 1)),
    };;
};



export const drawPerson = (person: PersonType, ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = person.handColor;
    ctx.fillRect(person.position.x, person.position.y, 1, 1);
};



export const clearPerson = (person: PersonType, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(person.position.x, person.position.y, 1, 1);
};




export const fight = (person: PersonType, targetPerson: PersonType, ctx: CanvasRenderingContext2D) => {


    if (person.handColor === handColors.rock) {

        if (targetPerson.handColor === handColors.scissors) {
            updateWinPersons(person, targetPerson, ctx);

        } else if (targetPerson.handColor === handColors.paper) {
            updateLosePersons(person, targetPerson, ctx);
        }

    } else if (person.handColor === handColors.paper) {

        if (targetPerson.handColor === handColors.rock) {
            updateWinPersons(person, targetPerson, ctx);

        } else if (targetPerson.handColor === handColors.scissors) {
            updateLosePersons(person, targetPerson, ctx);
        }

    } else if (person.handColor === handColors.scissors) {

        if (targetPerson.handColor === handColors.paper) {
            updateWinPersons(person, targetPerson, ctx);

        } else if (targetPerson.handColor === handColors.rock) {
            updateLosePersons(person, targetPerson, ctx);
        }
    }
};

const updateWinPersons = (person: PersonType, targetPerson: PersonType, ctx: CanvasRenderingContext2D) => {
    targetPerson.handColor = person.handColor;
    // clearPerson(targetPerson, ctx);
    drawPerson(targetPerson, ctx);
};

const updateLosePersons = (person: PersonType, targetPerson: PersonType, ctx: CanvasRenderingContext2D) => {
    person.handColor = targetPerson.handColor;
    // clearPerson(person, ctx);
    drawPerson(person, ctx);
};

