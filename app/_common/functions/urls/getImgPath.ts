import config from "../../../_config/config";

export const getImgPath = (pageName: string, ImgFileName: string) => {
    config;
    return `${config.basePath}/img/${pageName}/${ImgFileName}`;
};
