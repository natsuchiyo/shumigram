import { theme } from "@chakra-ui/react";
import { memo } from "react";
import { TextSprite } from "./TextSprite";
import { ColorRepresentation } from "three";


const gridColor = theme.colors.gray[500] as ColorRepresentation;


export const GridLines = memo(function GridLines(props: {
    gridNum: number;
    size: number;
    dispTicksNum?: boolean;
    shuldAdjustPosition?: boolean;
}) {

    const adjustPosition = props.shuldAdjustPosition ? -0.5 : 0;

    const halfSize = props.size / 2;
    const gridArray = Array<JSX.Element>();

    for (let i = 0; i < props.gridNum; i++) {

        gridArray.push(
            <gridHelper
                key={'x' + i}
                args={[props.size, props.size, gridColor, gridColor]}
                position={[+adjustPosition + i, halfSize + adjustPosition, halfSize + adjustPosition]}
                rotation-z={Math.PI / 2}
            />
        );

        gridArray.push(
            <gridHelper
                key={'y' + i}
                args={[props.size, props.size, gridColor, gridColor]}
                position={[halfSize + adjustPosition, +adjustPosition + i, halfSize + adjustPosition]}
            />
        );

        gridArray.push(
            <gridHelper
                key={'z' + i}
                args={[props.size, props.size, gridColor, gridColor]}
                position={[halfSize + adjustPosition, halfSize + adjustPosition, +adjustPosition + i]}
                rotation-x={Math.PI / 2}
            />
        );
    }


    const ticksNum: any[] = [];

    if (props.dispTicksNum) {
        for (let i = 0; i < 3; i++) {
            ticksNum.push(
                <TextSprite
                    key={i}
                    scale={scale}
                    text={i * 5}
                    position={[i * halfSize + adjustPosition, -0.5, props.size]}
                />
            );

            if (i !== 2) {
                ticksNum.push(
                    <TextSprite
                        key={'a' + i}
                        scale={scale}
                        text={i * 5}
                        position={[props.size, -0.5, i * halfSize + adjustPosition]}
                    />
                );
            }

            if (i !== 0) {
                ticksNum.push(
                    <TextSprite
                        key={'b' + i}
                        scale={scale}
                        text={i * 5}
                        position={[-0.5, i * halfSize + adjustPosition, props.size]}
                    />
                );
            }
        }
    }



    return (
        <>
            {gridArray}
            {props.dispTicksNum && (
                <>
                    {ticksNum}
                    <TextSprite text='x' subscript='1' position={[halfSize + adjustPosition, -1, props.size * 1.1]} />
                    <TextSprite text='x' subscript='2' position={[props.size * 1.1, -1, halfSize + adjustPosition]} />
                    <TextSprite text='y' position={[-1, halfSize + adjustPosition, props.size * 1.1]} />
                </>
            )}
        </>
    );
});

const scale = [0.7, 0.7, 1];