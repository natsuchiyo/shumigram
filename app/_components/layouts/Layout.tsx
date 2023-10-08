import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import { leftNavWidth, headerHeight } from "./_values";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { ContentsArea } from "./ContentsArea";



// ページ変移するたびに更新される
export function Layout(props: {
    children: ReactNode;
}) {


    return (
        <Grid
            templateAreas='"header header" "nav contents"'
            gridTemplateColumns={{ base: '0 100%', xl: `${leftNavWidth} 1fr` }}
            gridTemplateRows={`${headerHeight} 1fr`}
            minHeight='100vh'
        >

            <GridItem area='header'>
                <Header />
            </GridItem>

            <GridItem area='nav'>
                <Nav />
            </GridItem>

            <GridItem area='contents'>
                <ContentsArea>{props.children}</ContentsArea>
            </GridItem>

        </Grid>
    );
}