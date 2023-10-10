
import { useMainLogic } from "./_functions/useMainLogic";



/**
 * 論理空間　ブロックの配置を配列で保持した空間
 * 実空間　threeで描画する空間
 * キューブ　ブロックを形作る最小単位である立方体のこと
 * 座標　[x,y,z]のこと
 * 
 * 落下ブロック、固定ブロック、一層分の固定ブロックの状態に分けて考える 
 */




export type BlockShapeType = [boolean, boolean, boolean][][];



// 二次元の座標
export type Cood2DType = [number, number];


// 三次元の座標
export type Cood3DType = [number, number, number];



/**
 * 落下ブロック
 *@property shape ブロックの形（仮想DOMで参照しないので{...state}の必要なし）
 *@property coords 論理空間におけるキューブの現在の座標たち（仮想DOMで参照しないので{...state}の必要なし）
 *@property threeCoords 実空間におけるキューブの端からの座標たち
 *@property position 実空間の座標を修正するための現在のブロックの端の座標
 */
export type BlockType = {
    shape: BlockShapeType;
    coords: Cood3DType[];
    threeCoords: Cood3DType[];
    position: Cood3DType;
};


/**
 * 実空間における一層分の固定ブロックの状態（すべてのキューブの座標は持っていない）
 *@property positionY ｙ座標の位置
 *@property highLight 色を付けるか否か
 *@property checkStartPoint 埋まっているかの検証を始める右上からの位置
 *@property diffCoords 新たに追加されたブロックの座標たち
 */
export type StagePlaneType = {
    positionY: number;
    highLight: boolean;
    checkStartPoint: number;
    threeCoords: Cood2DType[];
};


/**
 * ステージ全体
 *@property shape 固定ブロックの形（仮想DOMで参照しないので{...state}の必要なし）
 *@property planeArray StagePlaneたち（順番は固定されている）
 *@property planePosArray 論理空間と実空間を対応させる配列。[StagePlaneのインデックス, ...]
 */
export type StageType = {
    shape: (boolean | undefined)[][][];
    planeList: StagePlaneType[];
    planePosArray: number[];
};


/**
 * 落下ブロックの編集状態
 *@property blockShapes すべての落下ブロックの形
 *@property currentIndex 現在編集してるブロックのインデックス
 */
export type EditType = {
    blockShapeList: BlockShapeType[];
    currentIndex: number;
};


/**
 * 落下するブロック
 *@property status 0:停止状態、1:稼働状態、2:ゲームオーバー
 *@property score スコア
 *@property dropSpeed 落下スピード
 *@property stageSize ステージ横マスの数
 *@property blockShapes すべてのブロックの形
 *@property block 現在の落下ブロック
 *@property stage ステージ
 *@property edit 編集状態
 */
export type BlockPazzleState = {
    status: number;
    score: number;
    dropSpeed: number;
    stageSize: number;
    blockShapeList: BlockShapeType[];
    block: BlockType;
    stage: StageType;
    edit: EditType;
};



export type HandlersType = ReturnType<typeof useMainLogic>['handlers'];