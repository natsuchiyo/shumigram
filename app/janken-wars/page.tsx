import { MainContents } from "../_common/components/layouts/MainContents";
import { Title } from "../_common/components/parts/Title";
import { createMetadata } from "../_common/functions/urls/createMetadata";
import { MainGame } from "./_componets/MainGame";




export default function Page() {

  return (
    <MainContents>

      <Title />

      <MainGame />

    </MainContents >
  );
}


export const metadata = createMetadata('/janken-wars');