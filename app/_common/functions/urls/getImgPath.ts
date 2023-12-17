import config from "../../../_config/config";

export const getImgFilePath = (ImgFileName: string, ...pageNames: string[]) => {

    const subPath = pageNames.length ? `/${pageNames.join('/')}` : '';

    return `${config.basePath}/img${subPath}/${ImgFileName}`;
};
