import { copy } from "copy-anything";
import { arrayMap } from "../_functions/array";
import { randomInt } from "../_functions/random";
import { StagePlaneType, BlockType, BlockPazzleState, BlockShapeType, Cood3DType } from "./_type";


/**----------------------------本番時-----------------------------------*/

import { initialBlockShapeList } from "./blockShapeList";
const adjustDropPosion = 3;

/**--------------------------------------------------------------------*/





/**---------------------テスト時はこれに切り替える----------------------------*/

// const initialBlockShapes = ((stageSize) => {
//     const testBlock = [
//         [...Array(3)].map(() => [...Array(stageSize)].map(() => Array(stageSize).fill(true)))
//     ];
//     testBlock[0][1][stageSize - 1][stageSize - 1] = false;
//     return testBlock;
// })(8);
// const adjustDropPosion = 9;

/**---------------------------------------------------------------------------*/





/**
 * 論理空間　ブロックの配置を配列で保持した空間
 * 実空間　threeで描画する空間
 * キューブ　ブロックを形作る最小単位である立方体のこと
 * 座標　[x,y,z]のこと
 * 
 * 落下ブロック、固定ブロック、一層分の固定ブロックの状態に分けて考える 
 */


export const initialStageSize = 8;
export const fixScore = 100;
export const completeScore = 1000;
export const blockSize = 3;
// TODO
// export const highQuality = window.innerWidth > 800;
export const highQuality = true;
export const stageHeight = 10;
export const stageWithMarginHeight = 13;
export const gridColor = 0xbbbbbb;
export const blockColor = 0x00da2f;
// export const blockColor = 0x29EA14;
export const backColor = '#555555';
export const canvasTextColor = "lightgray";
export const highLightBlockColor = 0xFC4A1A;
export const stagePlaneColor = 0x2470FE;
export const highLightStagePlaneColor = 0xff9924;
export const highLightTime = 500;
export const lightProps: any = { args: [0xffffff, 2], position: [40, 100, 70] };
export const materialMetalness = 0;



/**
 *空の一層分のマスたち 
 */
export const createStageLayer = (stageSize: number) => {

    const plane = Array(stageSize);
    for (let j = 0; j < stageSize; j++) {
        plane[j] = Array(stageSize).fill(false);
    }
    return plane;
};


const createStagePlaneList = () => {

    const array = Array<StagePlaneType>();
    for (let i = 0; i < stageWithMarginHeight; i++) {
        array.push({ positionY: i, threeCoords: [], highLight: false, checkStartPoint: 0 });
    }
    return array;
};


const createEmptyStage = (size: number) => {

    const stage = Array<(boolean | undefined)[][]>(stageWithMarginHeight);
    for (let i = 0; i < stage.length; i++) {
        stage[i] = createStageLayer(size);
    }
    return stage;
};


/**
 * ブロックのshapeを座標の配列に変換する
 * @param dropPositionCenter 最初の座標を決めるための位置
 * @param blockShape ブロックの形
 */
const convertBlockCoords = (dropPositionCenter: number, blockShape: BlockShapeType) => {

    const coords: Cood3DType[] = [];
    const threeCoords: Cood3DType[] = [];

    for (let y = 0; y < blockShape.length; y++) {
        for (let x = 0; x < blockShape[0].length; x++) {
            for (let z = 0; z < blockShape[0][0].length; z++) {
                if (blockShape[y][x][z]) {
                    coords.push([x + dropPositionCenter, y + stageHeight, z + dropPositionCenter]);
                    threeCoords.push([x, y, z]);
                }
            }
        }
    }

    return { coords, threeCoords };
};


/**
 * 次の落下ブロックをランダムに選ぶ
 * @param stageSize 落下位置を決めるためのstageSize
 * @param blockShapeList すべてのブロックの形
 */
export const pickAndCreateBlock = (stageSize: number, blockShapeList: BlockShapeType[]): BlockType => {

    const blockShape = blockShapeList[randomInt(0, blockShapeList.length - 1)];
    const dropPositionCenter = Math.floor(stageSize / adjustDropPosion);

    return {
        shape: blockShape,
        position: [dropPositionCenter, stageHeight, dropPositionCenter],
        ...convertBlockCoords(dropPositionCenter, blockShape),
    };
};


export const createInitialState = (
    dropSpeed: number = 500,
    stageSize: number = initialStageSize,
    blockShapeList: BlockShapeType[] = initialBlockShapeList
): BlockPazzleState => {

    return {
        status: 0,
        score: 0,
        dropSpeed: dropSpeed,
        stageSize: stageSize,
        blockShapeList: blockShapeList,
        block: pickAndCreateBlock(stageSize, blockShapeList),
        stage: {
            shape: createEmptyStage(stageSize),
            planeList: createStagePlaneList(),
            planePosArray: arrayMap(stageWithMarginHeight, (_, i) => i)
        },
        edit: {
            blockShapeList: copy(blockShapeList),
            currentIndex: 0,
        }
    };
};