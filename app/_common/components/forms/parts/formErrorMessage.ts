import { yupResolver } from "@hookform/resolvers/yup";
import { setLocale } from "yup";



export const createYupResolver = yupResolver;



const labelText = (prm: any) => {
    return prm.label ? `${prm.label}は` : '';
};



setLocale({
    mixed: {
        default: (prm: any) => `${labelText(prm)}無効です`,
        required: (prm: any) => `${labelText(prm)}必須の入力項目です`,
        oneOf: (prm: any & { values: any; }) => `${labelText(prm)}次の値のいずれかでなければなりません:${prm.values}`,
        notOneOf: (prm: any & { values: any; }) => `${labelText(prm)}次の値のいずれかであってはなりません:${prm.values}`,
        notType: `不正な値です`,
        defined: ``
    },
    string: {
        length: (prm: any & { length: number; }) => `${labelText(prm)}${prm.length}文字でなければなりません`,
        min: (prm: any & { min: number; }) => `${labelText(prm)}少なくとも${prm.min}文字でなければなりません`,
        max: (prm: any & { max: number; }) => `${labelText(prm)}最大${prm.max}文字でなければなりません`,
        matches: (prm: any & { regex: RegExp; }) => `${labelText(prm)}次の形式と一致する必要があります: "${prm.regex}"`,
        email: (prm: any & { regex: RegExp; }) => `${labelText(prm)}メールアドレスである必要があります`,
        url: (prm: any & { regex: RegExp; }) => `${labelText(prm)}有効なURLでなければなりません`,
        uuid: (prm: any & { regex: RegExp; }) => `${labelText(prm)}有効なUUIDでなければなりません`,
        trim: (prm: any) => `${labelText(prm)}前後にスペースを入れてはいけません`,
        lowercase: (prm: any) => `${labelText(prm)}小文字でなければなりません`,
        uppercase: (prm: any) => `${labelText(prm)}大文字でなければなりません`,
    },
    number: {
        min: (prm: any & { min: number; }) => `${labelText(prm)}${prm.min}以上でなければなりません`,
        max: (prm: any & { max: number; }) => `${labelText(prm)}${prm.max}以下でなければなりません`,
        lessThan: (prm: any & { less: number; }) => `${labelText(prm)}${prm.less}より小さくなければなりません`,
        moreThan: (prm: any & { more: number; }) => `${labelText(prm)}${prm.more}より大きくなければなりません`,
        positive: (prm: any & { more: number; }) => `${labelText(prm)}正の数でなければなりません`,
        negative: (prm: any & { less: number; }) => `${labelText(prm)}負の数でなければなりません`,
        integer: (prm: any) => `${labelText(prm)}整数でなければなりません`,
    },
    date: {
        min: (prm: any & { min: Date | string; }) => `${labelText(prm)}${prm.min}より後でなければなりません`,
        max: (prm: any & { max: Date | string; }) => `${labelText(prm)}${prm.max}より前でなければなりません`,
    },
    boolean: {
        isValue: (prm: any) => `${labelText(prm)}値が必要です`,
    },
    object: {
        noUnknown: (prm: any) => `${labelText(prm)}オブジェクトシェイプで指定されていないキーを含めることはできません`,
    },
    array: {
        length: (prm: any & { length: number; }) => `${labelText(prm)}${prm.length}個が必要です`,
        min: (prm: any & { min: number; }) => `${labelText(prm)}${prm.min}個以上の項目が必要です`,
        max: (prm: any & { max: number; }) => `${labelText(prm)}${prm.max}個以下の項目が必要です`,
    },
});
