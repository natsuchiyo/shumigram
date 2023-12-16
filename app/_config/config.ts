import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { createConfig } from "../_common/functions/configs/createConfig";


console.log('↓-------------------------------------------------------------------------');
console.log(process.env);
console.log(process.env.GITHUB_ACTIONS ? "/shumigram" : "");

export default createConfig({
    websiteLabelName: "シュミグラム",
    websiteName: "shumigram",
    brandColor: "pink",
    // brandLightNum: 600,
    // brandDarkNum: 900,
    accentColor: "green",
    clickableColor: "orange",
    headerIcon: faLaptopCode,
    basePath: process.env.GITHUB_ACTIONS ? "/shumigram" : ""
});