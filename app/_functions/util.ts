import deepmerge from "@fastify/deepmerge";




/**
 * msecミリ秒だけ非同期で停止
 * @param msec 
 */
export const sleep = (msec: number) => {
    return new Promise(resolve => setTimeout(resolve, msec));
};




/**
 * numがNaNならば「計測不能」、それ以外はtoFixedした文字列を返す
 * @param num 変換する数値
 * @param dicimalLength 表示する小数点桁数
 * @param unit 末尾に付ける文字列
 */
export const formatNum = (num: any, dicimalLength: number) => {
    if (Number.isFinite(num)) return num.toFixed(dicimalLength);
    if (Number.isNaN(num)) return '計算不可';
    if (num === Infinity) return '無限大';
    if (num === undefined || num === null) return '-';
    return num;
};



// export const getImageUrl = (url:string) => {
//     return baseUrl+url
// };


export const merge = deepmerge();



export const emptyFn = () => { };


