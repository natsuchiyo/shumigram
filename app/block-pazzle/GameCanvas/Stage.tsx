'use client';

import { memo, useContext, useEffect } from "react";
import { highLightTime, highQuality, highLightStagePlaneColor, stagePlaneColor, materialMetalness } from "../_values";
import { Instance, Instances } from "@react-three/drei";
import { HandlersType, StagePlaneType } from "../_type";
import { BlockPazzleContext } from "../MainGame";




const StageComponent = memo(function StageComponent(props: {
    stagePlaneArray: StagePlaneType[];
    removeStagePlane: HandlersType['removeStagePlane'];
}) {

    return (
        <>
            {props.stagePlaneArray.map((stagePlane, i: number) => (
                <StagePlane
                    key={i}
                    index={i}
                    stagePlane={stagePlane}
                    removeStagePlane={props.removeStagePlane}
                />
            ))}
        </>
    );
});



export const Stage = memo(function Stage() {

    const [state, handlers] = useContext(BlockPazzleContext);

    return <StageComponent stagePlaneArray={state.stage.planeList} removeStagePlane={handlers.removeStagePlane} />;
});





const StagePlane = memo(function StagePlane(props: {
    index: number;
    stagePlane: StagePlaneType;
    removeStagePlane: HandlersType['removeStagePlane'];
}) {


    // 大量にプロップスエラーが出る。バグ？
    const InstanceAny = Instances as any;

    return (
        <InstanceAny position-y={props.stagePlane.positionY}>
            <boxGeometry />
            <StagePlaneMat index={props.index} highLight={props.stagePlane.highLight} removeStagePlane={props.removeStagePlane} />

            {props.stagePlane.threeCoords.map((coord, i) => (
                <Instance key={i} position={[coord[0], 0, coord[1]]} />
            ))}
        </InstanceAny>
    );
});






const StagePlaneMat = memo(function StagePlaneMat(props: {
    index: number;
    highLight: boolean;
    removeStagePlane: HandlersType['removeStagePlane'];
}) {


    const color = props.highLight ? highLightStagePlaneColor : stagePlaneColor;


    useEffect(() => {
        if (props.highLight) {
            const timeoutId = setTimeout(() => {
                props.removeStagePlane(props.index);
            }, highLightTime);

            // unmountしたときは実行させない
            return () => clearTimeout(timeoutId);
        }
    });


    return (
        highQuality
            ? <meshStandardMaterial
                color={color}
                transparent
                opacity={0.7}
                roughness={0}
                metalness={materialMetalness}
            />
            : <meshLambertMaterial
                color={color}
                transparent
                opacity={0.7}
            />
    );
});