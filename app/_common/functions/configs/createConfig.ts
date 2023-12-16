import { ConfigType, CustomConfigType } from "../../types/types";




export const createConfig = (customConfig: CustomConfigType): ConfigType => {

    const defaultConfig = {
        brandLightNum: 400,
        brandDarkNum: 700,
        initialColorMode: 'light',
        headerIcon: null,
        basePath: ''
    };

    return Object.assign(customConfig, defaultConfig);
};