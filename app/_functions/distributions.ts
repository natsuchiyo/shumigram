
export type DistributionNameType = 'norm' | 'logn' | 'expo' | 'chi2' | 'beta' | 'unif' | 'tdis' | 'fdis';


export type XYDataType = { x: number; y: number; }[];

type DistributionType = {
    label: string;
    stepNum: number;
    scale: {
        x: { min: number; max: number; };
        y: { min: number; max: number; };
    };
    defaultParams: { [key: string]: number; };
    inputPropsList: { label: string; name: string; step: number; min: number; max: number; }[];
    calcLineData(params: { [key: string]: number; }): XYDataType;
    calcStatData(params: { [key: string]: number; }): number[];
};



type DistributionsType = {
    [key in DistributionNameType]: DistributionType;
};



const gammafn = (x: number) => {
    const p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    x -= 1;
    let a = p[0];
    const t = x + 7.5;
    for (let i = 1; i < p.length; i++) {
        a += p[i] / (x + i);
    }
    return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
};


const betafn = (a: number, b: number) => {
    return gammafn(a) * gammafn(b) / gammafn(a + b);
};


const norm: DistributionType = {

    label: '正規分布',
    stepNum: 20,
    scale: {
        x: { min: - 4, max: 4 },
        y: { min: 0, max: 0.8 }
    },
    defaultParams: { mean: 0, vari: 1 },


    inputPropsList: [
        { label: '平均', name: 'mean', step: 1, min: -5, max: 5 },
        { label: '分散', name: 'vari', step: 0.1, min: 0.1, max: 2 },
    ],

    calcLineData({ mean, vari }) {
        const interval = 4 / this.stepNum;
        const datasets: XYDataType = [];
        for (let i = -this.stepNum; i <= this.stepNum; i++) {
            const x = i * interval;
            const p = Math.exp(- (x - mean) * (x - mean) / (2 * vari)) / Math.sqrt(2 * Math.PI * vari);
            datasets[datasets.length] = { x, y: p };
        }
        return datasets;
    },

    calcStatData({ mean, vari }: { mean: number, vari: number; }): [number, number] {
        return [mean, vari];
    }
};


export const logn: DistributionType = {

    label: '対数正規分布',
    stepNum: 30,
    scale: {
        x: { min: 0, max: 2 },
        y: { min: 0, max: 1.5 }
    },
    defaultParams: { mean: 0, vari: 1 },

    inputPropsList: [
        { label: '平均', name: 'mean', step: 0.1, min: -2, max: 2 },
        { label: '分散', name: 'vari', step: 0.1, min: 0.1, max: 3 },
    ],

    calcLineData({ mean, vari }) {
        const interval = this.scale.x.max / this.stepNum;
        const datasets: XYDataType = [];
        for (let i = 0; i <= this.stepNum; i++) {
            const x = i * interval + 0.001;
            const p = Math.exp(- Math.pow(Math.log(x) - mean, 2) / (2 * vari)) / (Math.sqrt(2 * Math.PI * vari) * x);
            datasets[datasets.length] = { x, y: p };
        }
        return datasets;
    },

    calcStatData({ mean, vari }) {
        return [Math.exp(mean + vari / 2), Math.exp(2 * mean + vari) * (Math.exp(vari) - 1)];
    }
};


const expo: DistributionType = {

    label: '指数分布',
    stepNum: 30,
    scale: {
        x: { min: 0, max: 10 },
        y: { min: 0, max: 0.9 }
    },
    defaultParams: { lamb: 1 },

    inputPropsList: [
        { label: 'λ', name: 'lamb', step: 0.1, min: 0.1, max: 2 },
    ],

    calcLineData({ lamb }) {
        const interval = this.scale.x.max / this.stepNum;
        const datasets: XYDataType = [];
        for (let i = 0; i <= this.stepNum; i++) {
            const p = Math.exp(- i * interval * lamb) * lamb;
            datasets[datasets.length] = { x: i * interval, y: p };
        }
        return datasets;
    },

    calcStatData({ lamb }) {
        return [1 / lamb, 1 / (lamb * lamb)];
    }
};

const chi2: DistributionType = {

    label: 'カイ二乗分布',
    stepNum: 30,
    scale: {
        x: { min: 0, max: 10 },
        y: { min: 0, max: 0.5 }
    },
    defaultParams: { df: 5 },

    inputPropsList: [
        { label: '自由度', name: 'df', step: 1, min: 1, max: 10 }
    ],

    calcLineData({ df }) {
        const interval = this.scale.x.max / this.stepNum;
        const datasets: XYDataType = [];
        for (let i = 0; i <= this.stepNum; i++) {
            const x = i * interval + 0.01;
            const tmp = df / 2;
            const p = Math.pow(x, tmp - 1) * Math.exp(- x / 2) / (Math.pow(2, tmp) * gammafn(tmp));
            datasets[datasets.length] = { x, y: p };
        }
        return datasets;
    },

    calcStatData({ df }) {
        return [df, df * 2];
    }
};

const beta: DistributionType = {

    label: 'ベータ分布',
    stepNum: 30,
    scale: {
        x: { min: 0, max: 1 },
        y: { min: 0, max: 2.5 }
    },
    defaultParams: { alfa: 1, beta: 1 },

    inputPropsList: [
        { label: 'α', name: 'alfa', step: 0.1, min: 0.1, max: 2 },
        { label: 'β', name: 'beta', step: 0.1, min: 0.1, max: 2 },
    ],

    calcLineData({ alfa, beta }) {
        const interval = this.scale.x.max / this.stepNum;
        const datasets: XYDataType = [];
        for (let i = 0, l = this.stepNum; i <= l; i++) {
            let x = i * interval;
            if (i === 0) x += 0.001;
            else if (i === l) x -= 0.001;
            const p = Math.pow(x, alfa - 1) * Math.pow(1 - x, beta - 1) / betafn(alfa, beta);
            datasets[datasets.length] = { x, y: p };
        }
        return datasets;
    },

    calcStatData({ alfa, beta }) {
        const tmp = alfa + beta;
        return [alfa / tmp, alfa * beta / (Math.pow(tmp, 2) * (tmp + 1))];
    },

    // beta(a: number, b: number) {
    //     return gammafn(a) * gammafn(b) / gammafn(a + b);
    // }
};

const unif: DistributionType = {

    label: '一様分布',
    stepNum: 30,
    scale: {
        x: { min: -6, max: 6 },
        y: { min: 0, max: 1.1 }
    },
    defaultParams: { top: -3, bottom: 3 },


    inputPropsList: [
        { label: 'xの下限', name: 'top', step: 1, min: -5, max: 0 },
        { label: 'xの上限', name: 'bottom', step: 1, min: 1, max: 5 },
    ],

    calcLineData({ top, bottom }) {
        const y = 1 / (bottom - top);
        const datasets = [{ x: -6, y: 0 }, { x: top, y: 0 }, { x: top, y }, { x: bottom, y }, { x: bottom, y: 0 }, { x: 6, y: 0 }];

        return datasets;
    },

    calcStatData({ top, bottom }) {
        return [(top + bottom) / 2, Math.pow(bottom - top, 2) / 12];
    }
};

const tdis: DistributionType = {

    label: 'ｔ分布',
    stepNum: 20,
    scale: {
        x: { min: -4, max: 4 },
        y: { min: 0, max: 0.6 }
    },
    defaultParams: { df: 3 },

    inputPropsList: [
        { label: '自由度', name: 'df', step: 1, min: 1, max: 20 }
    ],

    calcLineData({ df }) {
        const interval = this.scale.x.max / this.stepNum;
        const datasets: XYDataType = [];
        for (let i = -this.stepNum; i <= this.stepNum; i++) {
            const x = i * interval;
            const p = gammafn((df + 1) / 2) / (Math.sqrt(df * Math.PI) * gammafn(df / 2)) * Math.pow(1 + x * x / df, -(df + 1) / 2);
            datasets[datasets.length] = { x, y: p };
        }
        return datasets;
    },

    calcStatData({ df }) {
        return [df > 1 ? 0 : NaN, df > 2 ? df / (df - 2) : NaN];
    }
};

const fdis: DistributionType = {

    label: 'Ｆ分布',
    stepNum: 30,
    scale: {
        x: { min: 0, max: 4 },
        y: { min: 0, max: 0.95 }
    },
    defaultParams: { df1: 10, df2: 10 },
    inputPropsList: [
        { label: '自由度1', name: 'df1', step: 1, min: 1, max: 20 },
        { label: '自由度2', name: 'df2', step: 1, min: 1, max: 20 }
    ],

    calcLineData({ df1, df2 }) {
        const interval = this.scale.x.max / this.stepNum;
        const datasets: XYDataType = [];
        for (let i = 0; i <= this.stepNum; i++) {
            let x = i * interval;

            if (i === 0) x += 0.001;

            const df1h = df1 / 2;
            const df2h = df2 / 2;
            const df12 = df1 / df2;
            const p = gammafn(df1h + df2h) * x ** (df1h - 1) * df12 ** df1h / (gammafn(df1h) * gammafn(df2h) * (1 + df12 * x) ** (df1h + df2h));
            datasets[datasets.length] = { x, y: p };

        }
        return datasets;
    },

    calcStatData({ df1, df2 }) {
        return [df2 > 2 ? df2 / (df2 - 2) : NaN, df2 > 4 ? 2 * df2 / (df2 - 2) ** 2 * (df1 + df2 - 2) / (df1 * (df2 - 4)) : NaN];
    }
};

export const distributions: DistributionsType = { norm, logn, expo, chi2, beta, unif, tdis, fdis };
