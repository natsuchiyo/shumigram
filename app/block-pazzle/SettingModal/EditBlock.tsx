import { memo, useContext } from "react";
import { ClickableCube } from "./ClickableCube";
import { Cood3DType, EditType } from "../_type";
import { BlockPazzleContext } from "../MainGame";




const EditBlockComponent = memo(function EditBlockComponent(props: {
    edit: EditType;
    clickBox: (position: Cood3DType) => void;
}) {

    return (
        <>
            {props.edit.blockShapeList[props.edit.currentIndex].map(
                (plane, y) => plane.map(
                    (row, x) => row.map(
                        (visible, z) => (
                            <ClickableCube
                                key={x * 100 + y * 10 + z}
                                visible={visible}
                                position={[x, y, z]}
                                clickBox={props.clickBox}
                            />
                        )
                    )
                )
            )}
        </>
    );
});



export const EditBlock = memo(function EditBlockC() {

    const [state, handlers] = useContext(BlockPazzleContext);

    return <EditBlockComponent edit={state.edit} clickBox={handlers.clickBox} />;
});
