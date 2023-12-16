import { Linking } from "../../components/parts/Linking";
import { getPageInfo } from "./usePageInfo";


export const getPageLink = (url: string) => {

    const pageInfo = getPageInfo(url);

    return <Linking href={url}> {pageInfo.title} </Linking>;
};