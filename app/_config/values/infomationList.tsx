import { Linking } from "../../_components/parts/Linking";
import { getPageInfo } from "../urls/_functions/usePageInfo";



const getPageLink = (url: string) => {

    const pageInfo = getPageInfo(url);

    return <Linking href={url}>{pageInfo.title}</Linking>;
};



export const InfomationsList = [
    { date: '2023/10/9', text: <>{getPageLink('/janken-wars')}を作成しました</> }
];
