import { createInfomationList } from "../_common/functions/configs/createTags copy";
import { getPageLink } from "../_common/functions/urls/getPageLink";




export default createInfomationList([
    { date: '2023/12/16', text: <>{getPageLink('/geopattern-gen')}を作成しました</> },
    { date: '2023/10/11', text: <>{getPageLink('/block-pazzle')}を作成しました</> },
    { date: '2023/10/9', text: <>{getPageLink('/janken-wars')}を作成しました</> },
]);