import { BlockPazzleState, BlockShapeType } from "../values/_type";
import { blockSize } from "../values/_values";



export const decreaseIndex = (immer: BlockPazzleState) => {
    immer.edit.currentIndex
        = immer.edit.currentIndex === 0
            ? immer.edit.blockShapeList.length - 1
            : immer.edit.currentIndex - 1;
};




export const increaseIndex = (immer: BlockPazzleState) => {
    immer.edit.currentIndex
        = immer.edit.currentIndex === immer.edit.blockShapeList.length - 1
            ? 0
            : immer.edit.currentIndex + 1;
};




export const clickBox = (position: number[], immer: BlockPazzleState) => {
    immer.edit.blockShapeList[immer.edit.currentIndex][position[1]][position[0]][position[2]]
        = !immer.edit.blockShapeList[immer.edit.currentIndex][position[1]][position[0]][position[2]];
};



const crateblockShape = () => {

    const block: BlockShapeType = Array(blockSize);

    for (let i = 0; i < blockSize; i++) {
        block[i] = Array(blockSize);
        for (let j = 0; j < blockSize; j++) {
            block[i][j] = Array(blockSize).fill(true) as [boolean, boolean, boolean];
        }
    }
    return block;
};




export const addblockShape = (immer: BlockPazzleState) => {
    immer.edit.blockShapeList.push(crateblockShape());
    immer.edit.currentIndex = immer.edit.blockShapeList.length - 1;
};



export const removeblockShape = (immer: BlockPazzleState) => {

    if (immer.edit.blockShapeList.length === 1) return;

    immer.edit.blockShapeList.splice(immer.edit.currentIndex, 1);

    // 最後のインデックスだったならば一つ下げる
    if (immer.edit.currentIndex === immer.edit.blockShapeList.length) {
        immer.edit.currentIndex--;
    }
};




export const updateblockShapes = (immer: BlockPazzleState) => {
    immer.blockShapeList = immer.edit.blockShapeList;
};