import { useSetRecoilState } from "recoil";
import { isRunningAtom } from "../_values/states";
import { useContext } from "react";
import { GeopatternContext } from "../_componets/GeopatternContext";



export const useStopController = () => {


    const {
        timeOutIdRef
    } = useContext(GeopatternContext);

    const setIsRunning = useSetRecoilState(isRunningAtom);


    const stop = () => {
        window.clearTimeout(timeOutIdRef.current);
        setIsRunning(false);
    };

    return stop;
};
