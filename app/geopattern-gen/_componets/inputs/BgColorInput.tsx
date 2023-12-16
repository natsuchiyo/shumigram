import { useRecoilState } from "recoil";
import { ColorInput } from "../../../_common/components/forms/inputs/ColorInput";
import { bgColorAtom } from "../../_values/states";



export function BgColorInput() {

    const [value, setValue] = useRecoilState(bgColorAtom);

    return (
        <ColorInput
            label={value}
            value={value}
            onChangeValue={setValue}
        />
    );
};