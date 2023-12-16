import pageInfos from "../../../_config/pageInfos";


export const createListedPathList = () => {

    const listedPathList: string[] = [];

    pageInfos.forEach((pageInfo, pageName) => {
        pageInfo.showNav && listedPathList.push('/' + pageName);
    });

    return listedPathList;
};