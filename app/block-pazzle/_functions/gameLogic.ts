import { copy } from "copy-anything";
import { BlockPazzleState, Cood3DType } from "../_type";
import { createInitialState, stageWithMarginHeight, createStageLayer, completeScore, fixScore, pickAndCreateBlock, stageHeight, blockSize } from "../_values";




export const changeStatus = (immer: BlockPazzleState) => {
    switch (immer.status) {
        case 0: immer.status = 1; break;
        case 1: immer.status = 0; break;
        case 2: return createInitialState(immer.dropSpeed, immer.stageSize, immer.blockShapeList);
    }
};




/**
 * 一面が揃った層を消す
 * @param index 消す層の実空間における位置
 * @param immer 
 */
export const removeStagePlane = (index: number, immer: BlockPazzleState) => {
    // ※今の処理の順番でないとうまくいかないので注意

    // positionY：論理空間における位置　index：実空間における位置
    const positionY = immer.stage.planePosArray.indexOf(index);

    // 実空間で、削除した層より上の層を一段ずつ下げる
    for (let i = positionY + 1; i < stageWithMarginHeight; i++) {
        const currentPlane = immer.stage.planeList[immer.stage.planePosArray[i]];
        // currentPlane.positionY-=1
        immer.stage.planeList[immer.stage.planePosArray[i]] = { ...currentPlane, positionY: currentPlane.positionY - 1 };
    }

    // 実空間で、削除するplaneを一番上に移動し、初期化する
    immer.stage.planeList[index] = {
        positionY: stageWithMarginHeight - 1,
        threeCoords: [],
        highLight: false,
        checkStartPoint: 0
    };

    // 論理空間で、削除する層を切り取り、最上段に新しい層を作る
    immer.stage.shape.splice(positionY, 1);
    immer.stage.shape.push(createStageLayer(immer.stageSize));

    // planePosArrayを論理空間と等しくするためpositionYの位置を最上段に移動
    immer.stage.planePosArray.push(immer.stage.planePosArray.splice(positionY, 1)[0]);

    immer.score += completeScore;
    //     immer.stage.planeArray = [...immer.stage.planeArray];
    //     return { ...immer, score: immer.score + completeScore };
};




const checkPlane = (positionY: number, immer: BlockPazzleState) => {

    const stagePlaneIndex = immer.stage.planePosArray[positionY];

    for (let i = immer.stage.planeList[stagePlaneIndex].checkStartPoint, l = immer.stageSize * immer.stageSize; i < l; i++) {

        if (!immer.stage.shape[positionY][Math.floor(i / immer.stageSize)][i % immer.stageSize]) {
            immer.stage.planeList[stagePlaneIndex].checkStartPoint = i;
            return;
        }
    }

    immer.stage.planeList[stagePlaneIndex].highLight = true;
};




const fixedBlock = (immer: BlockPazzleState) => {

    // 更新したstagePlaneのリスト
    const updatedList: number[] = [];

    // ブロックの座標をstagePlane.diffCoordsに追加
    for (const blockCoord of immer.block.coords) {

        const [x, y, z] = blockCoord;
        immer.stage.shape[y][x][z] = true;

        //stagePlaneが新規化されていなければ新規化する
        if (!updatedList.includes(y)) {
            immer.stage.planeList[immer.stage.planePosArray[y]] = {
                ...immer.stage.planeList[immer.stage.planePosArray[y]],
                // threeCoords: []
            };
            updatedList.push(y);
        }

        immer.stage.planeList[immer.stage.planePosArray[y]].threeCoords.push([x, z]);
    }

    for (const positionY of updatedList) {
        checkPlane(positionY, immer);
    }

    immer.score += fixScore;
    immer.block = pickAndCreateBlock(immer.stageSize, immer.blockShapeList);
};




export const dropBlock = (immer: BlockPazzleState) => {
    // const immerCopy = current(immer)
    const tmpBlockCoords: Cood3DType[] = copy(immer.block.coords);

    for (const tmpBlockCoord of tmpBlockCoords) {
        let [x, y, z] = tmpBlockCoord;

        //下が底またはブロックがある場合
        if (y <= 0 || immer.stage.shape[y - 1][x][z]) {

            //最上段ならゲームオーバー
            if (y >= stageHeight) {
                immer.status = 2;
                return;
            }
            //それ以外ならブロック固定
            else {
                fixedBlock(immer);
                return;
            }
        }
        tmpBlockCoord[1]--;
    }

    immer.block.position[1]--;
    immer.block.coords = tmpBlockCoords;
};

