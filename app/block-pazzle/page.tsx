import { MainContents } from '../_common/components/layouts/MainContents';
import { Title } from '../_common/components/parts/Title';
import { MainGame } from './_components/MainGame';
import { Description } from './_components/Description';
import { createMetadata } from '../_common/functions/urls/createMetadata';



export default function Page() {

    return (
        <MainContents>

            <Title />

            <MainGame />

            <Description />

        </MainContents>
    );
};



export const metadata = createMetadata('/block-pazzle');