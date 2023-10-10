import { MainContents } from '../_components/layouts/MainContents';
import { Title } from '../_components/parts/Title';
import { MainGame } from './MainGame';
import { Description } from './Description';





export default function Page() {

    return (
        <MainContents>

            <Title />

            <MainGame />

            <Description />

        </MainContents>
    );
};



