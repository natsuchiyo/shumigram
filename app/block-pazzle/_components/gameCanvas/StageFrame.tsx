import { BufferAttribute } from "three";
import { stageHeight, gridColor } from "../../values/_values";
import { verticalLineMat, stageFrameMat } from "./commonElements";
// import { verticalLineMat, stageFrameMat } from "./commonElements";




const createBufferPosition = (array: number[], itemSize = 3) => {
    return {
        position: new BufferAttribute(new Float32Array(array), itemSize)
    };
};



export const StageFrame = (props: {
    stageSize: number;
}) => {

    const halfSize = props.stageSize / 2 - 0.5;

    const planeGeo = <planeGeometry args={[props.stageSize, stageHeight, 1]} />;

    const lineArray = Array<JSX.Element>();


    for (let i = 0; i < props.stageSize + 1; i++) {
        lineArray.push(
            <line key={i} >
                <bufferGeometry
                    attributes={createBufferPosition([i - 0.5, -0.5, - 0.5, i - 0.5, stageHeight - 0.5, - 0.5])}
                />
                {verticalLineMat}
            </line>
        );

        lineArray.push(
            <line key={i + 100}>
                <bufferGeometry
                    attributes={createBufferPosition([-0.5, - 0.5, i - 0.5, - 0.5, stageHeight - 0.5, i - 0.5])}
                />
                {verticalLineMat}
            </line>
        );
    }


    return (
        <>
            {lineArray}

            <mesh rotation-y={Math.PI / 2} position={[- 0.5, stageHeight / 2 - 0.5, halfSize]}          >
                {planeGeo}
                {stageFrameMat}
            </mesh>

            <mesh position={[halfSize, stageHeight / 2 - 0.5, - 0.5]} >
                {planeGeo}
                {stageFrameMat}
            </mesh>

            <mesh rotation-x={Math.PI / 2} position={[halfSize, - 0.5, halfSize]}>
                <planeGeometry args={[props.stageSize, props.stageSize, 1]} />
                {stageFrameMat}
            </mesh>

            <gridHelper
                args={[props.stageSize, props.stageSize, gridColor, gridColor]}
                position={[halfSize, - 0.5, halfSize]}
            />

            <gridHelper
                args={[props.stageSize, 1, 0, 0xFF8C00]}
                position={[halfSize, - 0.5 + stageHeight, halfSize]}
            />
        </>
    );
};