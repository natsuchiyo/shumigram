import { OrbitControls } from "@react-three/drei";
import { memo } from "react";
import { ContextCanvas } from "../../../_common/components/three/ContainerCanvas";
import { GridLines } from "../../../_common/components/three/GridLines";
import { CanvasWrapper } from "../../../_common/components/three/ThreeCanvas";
import { light } from "../gameCanvas/commonElements";
import { blockSize } from "../../values/_values";
import { EditBlock } from "./EditBlock";
import EditButtons from "./EditButtons";
import { BlockPazzleContext } from "../MainGame";




export const EditCanvas = memo(function EditCanvas() {


    const canvasProps = {
        context: BlockPazzleContext,
        resize: { scroll: false },
        camera: {
            fov: 20,
            position: [blockSize * 2.5, blockSize * 2.4, blockSize * 5.5] as const
        }
    };


    return (
        <CanvasWrapper color='white'>

            <ContextCanvas {...canvasProps}>

                <OrbitControls target={[1, 1, 1]} />

                <GridLines shuldAdjustPosition gridNum={4} size={3} />

                <EditBlock />

                {light}

            </ContextCanvas>

            <EditButtons />

        </CanvasWrapper>
    );
});


// // const canvasWidth = (window.innerWidth > 500 ? 500 : window.innerWidth) * 0.78;
// const canvasWidth = 500 * 0.78;
// const canvasHeight = canvasWidth * 0.9;

// const Wrapper = styled.div({
//     position: 'relative',
//     width: 500,
//     height: canvasHeight,
//     margin: '10px auto',
//     backgroundColor: backColor,
//     color: canvasTextColor,
//     border: 4,
//     borderColor: theme.colors.green[700],
//     borderRadius: 10,
// });