import { DescriptionArea, DescriptionSection } from "../_components/pieces/Descriptions";
import { ThreeDescription } from "../_components/three/DescripThree";



export const Description = () => {

    return (
        <DescriptionArea>

            <DescriptionSection title='使いかた'>
                面が揃うとブロックが消えます。落ちてくるブロックはストップ中も動かすことができます。
            </DescriptionSection>

            <ThreeDescription />

        </DescriptionArea>
    );
};