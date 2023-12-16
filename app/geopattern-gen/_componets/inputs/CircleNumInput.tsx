import { useRecoilState } from "recoil";
import { NumInput } from "../../../_common/components/forms/inputs/Input";
import { CircleKeyType } from "../../_types/_types";
import { circleValueSelectorFamily } from "../../_values/states";



export function CircleNumInput({ circleIndex, circleKey }: { circleIndex: number; circleKey: CircleKeyType; }) {

    const [value, setValue] = useRecoilState(circleValueSelectorFamily({ circleIndex, circleKey }));


    return (
        <NumInput
            value={value}
            min={0}
            max={circleKey === 'lineLength' ? 999 : 180}
            step='any'
            width='5em'
            onChangeValue={setValue}
        />
    );
};