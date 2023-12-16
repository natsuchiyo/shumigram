import { Grid, GridItem, Center } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Footer } from "./footer/Footer";
import { asideWidth } from "./_constants";
import { Aside } from "./aside/Aside";



export const ContentsArea = (props: PropsWithChildren) => {

    return (
        <Grid
            templateAreas={{ base: '"main" "aside" "footer"', lg: '"main aside" "footer aside"' }}
            gridTemplateColumns={{ base: '100%', lg: ` 1fr ${asideWidth}` }}
            gridTemplateRows={{ base: 'auto auto auto', lg: `1fr auto` }}
            paddingY={4}
            paddingX={{ base: 0, sm: 4 }}
            gap={4}
            height='full'
        >

            <GridItem area='main'>
                <Center>
                    {props.children}
                </Center>
            </GridItem>

            <GridItem area='aside'>
                <Aside />
            </GridItem>

            <GridItem area='footer'>
                <Footer />
            </GridItem>

        </Grid>
    );
};