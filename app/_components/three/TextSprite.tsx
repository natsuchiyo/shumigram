import { memo } from 'react';



export const TextSprite = memo(function TextSprite(props: {
    text: string | number;
    position: [number, number, number];
    scale?: number[];
    subscript?: string;
}) {

    const fontsize = 50;
    const canvas = document.createElement('canvas');
    const scale = props.scale || [1, 1, 1];

    // canvasに文字を書いてそれを描画する
    const context = canvas.getContext('2d')!;
    context.font = fontsize + "px Arial";
    canvas.width = context.measureText(props.text.toString()).width
        + (props.subscript ? context.measureText(props.subscript!.toString()).width : 0);
    canvas.height = fontsize;

    context.font = fontsize + "px Arial";
    context.textBaseline = "top";
    context.fillStyle = 'white';
    context.fillText(props.text.toString(), 0, 0);

    if (props.subscript) {
        context.font = fontsize / 2 + "px Arial";
        context.fillText(
            props.subscript,
            context.measureText(props.text.toString()).width + fontsize / 3,
            fontsize / 2.2
        );
    }


    return (
        <sprite
            scale={[canvas.width / canvas.height * scale[0], scale[1], scale[2]]}
            position={props.position}
        >
            <spriteMaterial >
                <canvasTexture attach="map" image={canvas} />
            </spriteMaterial>
        </sprite>
    );
});