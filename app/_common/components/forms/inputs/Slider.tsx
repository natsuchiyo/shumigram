'use client';

import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderProps } from "@chakra-ui/react";
import { forwardRef, useContext } from "react";
import { Controller } from "react-hook-form";
import { FormContext } from "../Form";
import { getBrandColor } from "../../../functions/theme";

export type SliderNumInputProps = SliderProps & {
    value: number;
    onChangeValue: (value: number) => void;
};


export const SliderInput = forwardRef<HTMLInputElement, SliderProps>(function SliderInputBase(props: SliderProps, ref) {

    return (
        <Slider ref={ref} size='lg' marginX='2' {...props as any}>
            <SliderTrack>
                <SliderFilledTrack bg={getBrandColor(500)} />
            </SliderTrack>
            <SliderThumb bg={getBrandColor(500)} />
        </Slider>
    );
});

// export const SliderNumInput = ({ onChangeValue, ...props }: SliderNumInputProps) => {


//     // const onChange = () => {
//     //     onChangeValue()
//     // };


//     return (
//         <Slider onChange={ } size='lg' marginX='2' {...props as any}>
//             <SliderTrack>
//                 <SliderFilledTrack bg={getBrandColor(500)} />
//             </SliderTrack>
//             <SliderThumb bg={getBrandColor(500)} />
//         </Slider>
//     );
// };


export const FormSliderInput = ({ name, ...props }: SliderProps & {
    name: string;
}) => {


    const { control } = useContext(FormContext);

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <SliderInput  {...props} {...field} />
            )}
        />
    );
};