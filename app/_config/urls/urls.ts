import { createPageInfo, createRouting } from "./_functions/functions";
import { tags } from "./tags";
import { BasePageInfoType } from "./types";




export const simulationPageInfoList: [string, BasePageInfoType][] = [

    [
        'janken-wars',
        {
            _title: 'じゃんけん合戦',
            description: '大量の個体を発生させてじゃんけんで争います',
            // tags: [tags.確率, tags.遊び],
            // relationPageList: [
            //     '/round-robin',
            //     '/central-limit-theorem',
            //     '/t-test',
            // ],
            // isSimulation: true
        }
    ],

];



export const pageInfoList = createRouting([

    [
        '',
        {
            _title: 'プロバビ 確率・統計学シミュレーション',
            description: '確率・統計学シミュレーションサイト',
        }
    ],
    [
        'about',
        {
            _title: '当サイトについて',
            description: '当サイトについて',
        }
    ],

    ...simulationPageInfoList
]);


export const notFoundPageInfo = createPageInfo({
    _title: 'ページが見つかりません',
    description: "ページが見つかりません",
});



export const simulationUrlList = simulationPageInfoList.map(
    pageName => `/${pageName[0]}`
);

// export const simulationUrlList = [...simulationPageInfoList.keys()].map(
//     pageName => `/${pageName}`
// );