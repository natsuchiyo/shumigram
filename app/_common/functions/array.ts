

/**
 * undefined、null、空配列の場合はtrueを返す
 */
export const isEmpty = (object: any) => {
    return !object || Array.isArray(object) && object.length === 0;
};



/**
 * 1次元配列か否か。最初の要素だけで判定する。
 */
export const isOneDimension = (array: any[]) => !Array.isArray(array[0]);



/**
 * 2次元配列か否か。最初の要素だけで判定する。
 */
export const isTwoDimension = (array: any[]) => {
    return Array.isArray(array[0]) && !Array.isArray(array[0][0]);
};



/**
 * Array(length).fill(null).mapの糖衣構文
 * @param length 配列の長さ
 * @param callbackfn mapに渡す関数
 * @returns mapで作成された配列
 */
export const arrayMap = <T extends any = any>(length: number, callbackfn: (value: null, index: number) => T) => {
    // return Array(length).fill(null).map(callbackfn);
    return Array.from({ length }, callbackfn);
};





/**
 * startからendまでstep間隔（初期値1）で配列を生成。pythonのrangeと同様
 * @param start 
 * @param end この数は含まれない
 * @param step 
 * @returns number[]
 */
export const rangeArray = (start: number, end: number, step = 1) => {

    const array: number[] = [];

    for (let i = start; i < end; i += step) {
        array.push(i);
    }

    return array;
};
