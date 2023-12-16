import { memo, useState, useCallback, useContext } from "react";
import { initialStageSize } from "../../values/_values";
import { EditCanvas } from "./EditCanvas";
import { Modal } from "../../../_common/components/modals/Modal";
import { SliderInput } from "../../../_common/components/forms/inputs/Slider";
import { HandlersType } from "../../values/_type";
import { Divider, ModalBody } from "@chakra-ui/react";
import { Small } from "../../../_common/components/parts/Text";
import { Headline } from "../../../_common/components/parts/Headline";
import { BlockPazzleContext } from "../MainGame";




const SettingModal = memo(function SettingModal(props: {
    handlers: HandlersType;
}) {


    const [stageSize, setStageSize] = useState(initialStageSize);

    const submitblockShapes = () => { props.handlers.submitblockShapes(stageSize); };

    const changeStageSize = useCallback((value: number) => { setStageSize(value); }, []);


    return (
        <Modal submitLabel="決定" onSubmit={submitblockShapes} size='lg'>
            <ModalBody>

                <Headline as='h4' size='sm' marginBottom='2' children='落下ブロック作成' />
                <Small marginY='4'>マス目をクリック（タップ）することで形を変更できます</Small>
                <EditCanvas />

                <Divider marginY='4' />

                <Headline as='h4' size='sm' marginBottom='2' children='ステージサイズ' />
                <span>{stageSize}マス×{stageSize}マス</span>
                <SliderInput
                    value={stageSize}
                    min={4}
                    max={10}
                    onChange={changeStageSize}
                />

            </ModalBody>
        </Modal>
    );
});



export default function EditModal() {
    const [, handlers] = useContext(BlockPazzleContext);
    return <SettingModal handlers={handlers} />;
};