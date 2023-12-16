import { useMemo } from "react";
import { useImmer } from "use-immer";
import { useRun } from "../../_common/functions/hooks/utilHooks";
import { createInitialState } from "../values/_values";
import { clickBox, decreaseIndex, increaseIndex, addblockShape, removeblockShape } from "./editLogic";
import { dropBlock, removeStagePlane, changeStatus } from "./gameLogic";
import { moveBlock, rotateBlock } from "./handleBlock";






export const useMainLogic = () => {


    const [immerState, setImmerState] = useImmer(createInitialState);


    const handlers = useMemo(() => ({
        dropBlock: () => setImmerState(immer => dropBlock(immer)),
        moveBlock: (direction: string) => setImmerState(immer => immer.status === 2 ? immer : moveBlock(direction, immer)),
        rotateBlock: (direction: string) => setImmerState(immer => immer.status === 2 ? immer : rotateBlock(direction, immer)),
        reset: () => setImmerState(immer => createInitialState(immer.dropSpeed, immer.stageSize, immer.blockShapeList)),
        removeStagePlane: (index: number) => setImmerState(immer => removeStagePlane(index, immer)),
        changeSpeed: (dropSpeed: number) => setImmerState(immer => ({ ...immer, dropSpeed: dropSpeed * dropSpeed })),
        changeStatus: () => setImmerState(immer => changeStatus(immer)),
        clickBox: (position: number[]) => setImmerState(immer => clickBox(position, immer)),
        decreaseIndex: () => setImmerState(immer => decreaseIndex(immer)),
        increaseIndex: () => setImmerState(immer => increaseIndex(immer)),
        addblockShape: () => setImmerState(immer => addblockShape(immer)),
        removeblockShape: () => setImmerState(immer => removeblockShape(immer)),
        submitblockShapes: (stageSize: number | undefined) => setImmerState(immer => createInitialState(immer.dropSpeed, stageSize, immer.edit.blockShapeList)),
    }), []);


    useRun(handlers.dropBlock, immerState.status === 1, immerState.dropSpeed);


    return { immerState, handlers };
};