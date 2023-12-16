import { useState } from 'react';
import { useRecoilCallback } from 'recoil';
import { LabelSelect } from '../../../_common/components/forms/inputs/LabelInput';
import { circlesAtom, bgColorAtom } from '../../_values/states';
import { geometricSamples } from '../../_values/samples';



export function SampleSelect() {

    const [sampleIndex, setSampleIndex] = useState(0);


    const changeSample = useRecoilCallback(({ set }) => async (selectedIndex: number) => {

        const sample = geometricSamples[selectedIndex];

        set(circlesAtom, sample.circles);
        set(bgColorAtom, sample.bgColor);

        setSampleIndex(selectedIndex);
    });


    return (
        <LabelSelect
            label='サンプル模様'
            height='2em'
            value={sampleIndex}
            optionList={optionList}
            onChangeValue={changeSample}
            width='10em'
        />
    );
};


const optionList = geometricSamples.map((sample, i) => ({
    label: sample.title,
    value: i
}));