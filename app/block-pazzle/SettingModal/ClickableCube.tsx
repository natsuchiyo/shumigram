'use client';

import React, { memo, useCallback } from "react";
import { blockColor } from "../_values";
import { boxGeo } from "../GameCanvas/commonElements";
import { ThreeEvent } from "@react-three/fiber";
import { Cood3DType } from "../_type";



export const ClickableCube = memo(function ClickableCube(props: {
    visible: boolean;
    position: Cood3DType;
    clickBox: (position: Cood3DType) => void;
}) {


    const clickBox = useCallback((e: ThreeEvent<MouseEvent>) => {
        // 一番手前のブロックだけクリックするため伝播を止める
        e.stopPropagation();
        props.clickBox(props.position);
    }, []);


    return (
        <mesh
            position={props.position}
            onClick={clickBox}
        >
            {boxGeo}
            <meshLambertMaterial
                transparent
                color={blockColor}
                opacity={Number(props.visible)}
            />
        </mesh>
    );
},
    (p, n) => p.visible === n.visible
);