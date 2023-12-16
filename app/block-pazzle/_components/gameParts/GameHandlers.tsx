'use client';

import { memo, useContext } from "react";
import { SpeedSlider } from "./SpeedSlider";
import { ModalOpenButton } from "../../../_common/components/modals/ModalOpenButton";
import { Button, HStack } from "@chakra-ui/react";
import { CrossButton } from "./CrossButton";
import { HandlersType } from "../../values/_type";
import { BlockPazzleContext } from "../MainGame";




const buttonText = ['スタート', 'ストップ', 'リセット'];


const GameHandlersComponent = memo(function GameHandlersComponent(props: {
    status: number;
    handlers: HandlersType;
}) {

    return (
        <div>
            <HStack justifyContent='right' gap='2' marginTop='2'>
                <Button
                    children={buttonText[props.status]}
                    onClick={props.handlers.changeStatus}
                    size='md'
                    boxShadow='lg'
                />
                <CrossButton text='移動' clickDirection={props.handlers.moveBlock} />
                <CrossButton text='回転' clickDirection={props.handlers.rotateBlock} />
            </HStack>

            <HStack justifyContent='right' gap='2' marginTop='4'>
                <SpeedSlider />
                <ModalOpenButton variant='outline' children='設定変更' />
            </HStack>
        </div>
    );
});



export const GameHandlers = memo(function GameHandlers() {
    const [state, handlers] = useContext(BlockPazzleContext);
    return <GameHandlersComponent status={state.status} handlers={handlers} />;
});