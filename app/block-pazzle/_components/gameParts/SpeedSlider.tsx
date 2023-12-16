'use client';

import { memo, useContext } from "react";
import { SliderInput } from "../../../_common/components/forms/inputs/Slider";
import { HandlersType } from "../../values/_type";
import { Box, Flex } from "@chakra-ui/react";
import { BlockPazzleContext } from "../MainGame";




const SpeedSliderComponet = memo(function SpeedSliderComponent(props: {
    dropSpeed: number;
    changeSpeed: HandlersType['changeSpeed'];
}) {

    return (
        <Flex>
            <span>速さ</span>
            <SliderInput
                value={Math.sqrt(props.dropSpeed)}
                step={5}
                min={15}
                max={35}
                width='100px'
                onChange={props.changeSpeed}
            />
        </Flex >
    );
});



export const SpeedSlider = memo(function SpeedSlider() {
    const [state, handlers] = useContext(BlockPazzleContext);
    return <SpeedSliderComponet dropSpeed={state.dropSpeed} changeSpeed={handlers.changeSpeed} />;
});
