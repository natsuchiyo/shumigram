import config from "../../_config/config";


export const getBrandColor = (brightness: number) => {
    return `${config.brandColor}.${brightness}`;
};
