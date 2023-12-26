import { useRecoilValue } from "recoil";
import { TweetButton } from "../../../_common/components/parts/TweetButton";
import { currentUrlAtom } from "../../_values/states";
import config from "../../../_config/config";



export function GeopatternTweet() {

    const currentUrl = useRecoilValue(currentUrlAtom);

    const text = `#幾何学模様メーカー`;

    return <TweetButton text={text} url={config.baseUrl + currentUrl} />;
};