import { memo } from "react";
import { Stage } from "./Stage";
import { Block } from "./Block";
import { StageFrame } from "./StageFrame";
import { light } from "./commonElements";
import { stageHeight, stageWithMarginHeight, backColor } from "../_values";
import { OrbitControls } from "@react-three/drei";
import { ContextCanvas } from "../../_components/three/ContainerCanvas";
import { CanvasWrapper } from "../../_components/three/ThreeCanvas";
import { ScoreLabel } from "../GameParts/ScoreLabel";
import { BlockPazzleContext } from "../MainGame";




export const MainCanvas = memo(function MainCanvas(props: {
    stageSize: number;
}) {


    const canvasProps = {
        context: BlockPazzleContext,
        resize: { scroll: false },
        camera: {
            fov: 20,
            position: [props.stageSize * 2.8, stageHeight * 2.0, props.stageSize * 5] as const
        }
    };


    const orbitControlsProps = {
        dampingFactor: 0.1,
        target: [props.stageSize / 2, stageWithMarginHeight / 2 - 1, props.stageSize / 2] as const
    };



    return (
        <CanvasWrapper aspectRatio='1' >

            <ContextCanvas {...canvasProps} >

                <OrbitControls {...orbitControlsProps} />

                <StageFrame stageSize={props.stageSize} />

                <Block />

                <Stage />

                {light}

            </ContextCanvas>

            <ScoreLabel />

        </CanvasWrapper>
    );
});

