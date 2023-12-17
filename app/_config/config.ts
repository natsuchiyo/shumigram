import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { createConfig } from "../_common/functions/configs/createConfig";



export default createConfig({
    websiteLabelName: "シュミグラム",
    websiteName: "shumigram",
    brandColor: "pink",
    accentColor: "green",
    clickableColor: "orange",
    headerIcon: faLaptopCode,
    // basePath: "/shumigram"
    basePath: process.env.GITHUB_PAGES ? "/shumigram" : ""
});