import { DoubleSide } from "three";
import { gridColor, highQuality, lightProps, materialMetalness } from "../_values";



export const boxGeo = <boxGeometry />;

export const verticalLineMat = <lineBasicMaterial attach="material" color={gridColor} />;

export const light = <directionalLight  {...lightProps} />;

export const stageFrameMat = highQuality
    ? <meshStandardMaterial
        attach='material'
        transparent
        color={0xffffff}
        opacity={0.4}
        side={DoubleSide}
        roughness={0}
        metalness={materialMetalness}
    />
    : <meshLambertMaterial
        attach='material'
        transparent
        color={0xffffff}
        opacity={0.4}
        side={DoubleSide}
    />;