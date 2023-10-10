'use client';

import { memo, useContext, useMemo } from "react";
import { highQuality, highLightBlockColor, blockColor, materialMetalness } from "../_values";
import { Instance, Instances } from "@react-three/drei";
import { BlockType } from "../_type";
import { BlockPazzleContext } from "../MainGame";




const BlockComponent = memo(function BlockComponent(props: {
    block: BlockType;
    status: number;
}) {


    //positionが新しくなっていても meshに直接渡すと更新されないため展開する
    const position = useMemo(
        () => [...props.block.position]
        , [props.block.position]);


    // 大量にプロップスエラーが出る。バグ？
    const InstancesAny = Instances as any;


    return (
        <InstancesAny position={position}>
            <boxGeometry />
            <BlockMat status={props.status} />
            {props.block.threeCoords.map((geoCoord, i) => (
                <Instance key={i} position={geoCoord} />
            ))}
        </InstancesAny>
    );
});



export const Block = memo(function Block() {

    const [state] = useContext(BlockPazzleContext);

    return <BlockComponent block={state.block} status={state.status} />;
});





const BlockMat = memo(function BlockMat(props: {
    status: number;
}) {

    const color = props.status === 2 ? highLightBlockColor : blockColor;

    return (
        highQuality
            ? <meshStandardMaterial
                color={color}
                roughness={0}
                metalness={materialMetalness}
            />
            : <meshLambertMaterial color={color} />
    );
});