import { MainContents } from "../_common/components/layouts/MainContents";
import { Title } from "../_common/components/parts/Title";
import { createMetadata } from "../_common/functions/urls/createMetadata";
import { Description } from "./_componets/Description";
import { MainApp } from "./_componets/MainApp";
import { pageName } from "./_values/constants";



export default function Page() {

  return (
    <MainContents>

      <Title />

      <MainApp />

      <Description />

    </MainContents >
  );
}


export const metadata = createMetadata(pageName);