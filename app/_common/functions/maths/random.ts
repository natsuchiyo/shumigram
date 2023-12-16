/**
 * できるだけimportはしないようにする
 */
import { isProduction } from "../../values/constants";
import { notice } from "../console";




export const randomGenerater = () => {

    // シード有りの0以上1未満の一様分布。
    const seedRandom = () => {
        let seed = 1;

        return () => {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        };
    };

    return seedRandom();
};



export let random = isProduction ? Math.random : randomGenerater();



export const loggingRandom = () => {
    const r = random();

    notice('random value: ' + r);

    return r;
};



/**
 * @param trueProbability trueになる確率。デフォルトは0.5
 */
export const randomBool = (trueProbability = 0.5) => trueProbability > random();



/**
 *整数の乱数を生成。min,maxの値は含まれる。
 */
export const randomInt = (min: number, max: number, step = 1) => {

    const stepCount = Math.floor((max - min) / step) + 1;

    return Math.floor(random() * stepCount) * step + min;
};



/**
 *正規乱数を生成。平均μ、標準偏差σを指定する場合は、normalRandom()*σ+μとする
 */
export const normalRandom = () => {
    return Math.sqrt(-2 * Math.log(1 - random())) * Math.cos(2 * Math.PI * random());
};
