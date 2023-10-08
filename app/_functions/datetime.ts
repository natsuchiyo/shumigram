import dayjs, { Dayjs, ManipulateType } from "dayjs";




// dayjsによる現在時刻
export const now = dayjs();



// 今日の日付　ex. 2021-01-22
export const todayStr = now.format('YYYY-MM-DD');



/**
 * Dayjsクラスをstringに変換
 * @param date  Dayjs
 * @param pattern デフォルトは'YYYY-MM-DD'
 * @returns 日にちのstring
 */
export const dateToStr = (date: Dayjs, pattern = 'YYYY-MM-DD'): string => {
    return date.format(pattern);
};




/**
 * 現在から過去の日にちを取得する
 * @param duration さかのぼる期間
 * @param unit 単位。y,year,m,monthなど。デフォルトはy。
 * @returns YYYY-MM-DDの日にち
 */
export const getPastDateStr = (duration: number, unit: ManipulateType = 'y'): string => {
    return now.subtract(duration, unit).format('YYYY-MM-DD');
};

