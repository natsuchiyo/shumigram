import { useRecoilState } from "recoil";
import { ColorInput } from "../../../_common/components/forms/inputs/ColorInput";
import { circleValueSelectorFamily } from "../../_values/states";



export function LineColorInput({ circleIndex }: { circleIndex: number; }) {

    const [value, setValue] = useRecoilState(circleValueSelectorFamily({ circleIndex, circleKey: 'color' }));

    return (
        <ColorInput
            label={value}
            value={value}
            onChangeValue={setValue}
        />
    );
};