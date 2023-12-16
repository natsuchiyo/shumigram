import { useRecoilState } from "recoil";
import { CheckboxInput } from "../../../_common/components/forms/inputs/Checkbox";
import { CircleKeyType } from "../../_types/_types";
import { circleValueSelectorFamily } from "../../_values/states";



export function CircleCheckbox({ circleIndex, circleKey }: { circleIndex: number; circleKey: CircleKeyType; }) {

    const [value, setValue] = useRecoilState(circleValueSelectorFamily({ circleIndex, circleKey }));

    return (
        <CheckboxInput
            isChecked={value}
            onChangeValue={setValue}
        />
    );
};