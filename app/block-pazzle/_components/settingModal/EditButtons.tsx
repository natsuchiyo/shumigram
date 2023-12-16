import { memo, useCallback, useContext } from "react";
import styled from "@emotion/styled";
import { IconButton, Button } from "@chakra-ui/react";
import { EditType, HandlersType } from "../../values/_type";
import { CheckboxInput } from "../../../_common/components/forms/inputs/Checkbox";
import { ChevronLeftIcon, ChevronRightIcon } from "../../../_common/components/chakraIcons";
import { BlockPazzleContext } from "../MainGame";



const EditButtonsComponents = memo(function EditBUttons(props: {
    edit: EditType;
    handlers: HandlersType;
}) {


    const { blockShapeList: blockShapes, currentIndex } = props.edit;


    const clickBox = useCallback(() => {
        props.handlers.clickBox([1, 1, 1]);
    }, []);


    return (
        <>
            <TopLeftDiv>
                <LabelSpan>ブロックNo.{currentIndex + 1}</LabelSpan>
            </TopLeftDiv>
            <TopRightDiv>
                <CheckboxInput
                    children='センター'
                    isChecked={blockShapes[currentIndex][1][1][1]}
                    onChangeValue={clickBox}
                />
            </TopRightDiv>
            <MiddleLeftDiv>
                <IconButton style={{ fontSize: '180%' }} icon={<ChevronLeftIcon />} onClick={props.handlers.decreaseIndex} aria-label={""} />
            </MiddleLeftDiv>
            <MiddleRightDiv>
                <IconButton style={{ fontSize: '180%' }} icon={<ChevronRightIcon />} onClick={props.handlers.increaseIndex} aria-label={""} />
            </MiddleRightDiv>
            <BottomRightDiv>
                <Button
                    children='ブロック削除'
                    onClick={props.handlers.removeblockShape}
                    style={style.button}
                    isDisabled={blockShapes.length === 1}
                />
                <Button
                    children='新規ブロック'
                    onClick={props.handlers.addblockShape}
                    style={style.button}
                    isDisabled={blockShapes.length === 15}
                />
            </BottomRightDiv>
        </>
    );
});



export default memo(function EditButtons() {

    const [state, handlers] = useContext(BlockPazzleContext);

    return <EditButtonsComponents edit={state.edit} handlers={handlers} />;
});



const TopLeftDiv = styled.div({ position: 'absolute', top: 0, left: 0 });
const TopRightDiv = styled.div({ position: 'absolute', top: 0, right: 0 });
const MiddleLeftDiv = styled.div({ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' });
const MiddleRightDiv = styled.div({ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' });
const BottomRightDiv = styled.div({ position: 'absolute', bottom: 0, right: 0 });
const LabelSpan = styled.span({ margin: '0 5px' });



const style = {
    checkBox: {
        padding: '4px 14px 4px 0',
        color: 'royalblue'
    },
    iconButton: { padding: 0 },
    button: { margin: 5 },
    numberText: { margin: '0 5px' },
    icon: { fontSize: '180%' },
    trans: { transform: 'translateY(-50%)' }
};
