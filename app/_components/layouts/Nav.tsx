import { useBreakpointValue, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, Box, ListItem, List, LinkBox } from "@chakra-ui/react";
import { Fragment, ReactNode, memo } from "react";
import { IconText } from "../parts/IconText";
import { LinkingOverlay } from "../parts/Linking";
import { headerHeight, leftNavWidth } from "./_values";
import { simulationUrlList } from "../../_config/urls/urls";
import { getPageInfo } from "../../_config/urls/_functions/usePageInfo";
import { DragHandleIcon, HamburgerIcon, SmallCloseIcon } from "../chakraIcons";
import { NavWrapper } from "./NavWrapper";



export const Nav = memo(function Nav() {

    return (
        <NavWrapper>
            <NavContents />
        </NavWrapper>
    );
});




const NavContents = () => {

    return (
        <Box bg='white' height='full' boxShadow='xs' width={leftNavWidth} >

            <IconText
                icon={DragHandleIcon}
                fontWeight='bold'
                fontSize='sm'
                color='subtext'
                borderBottomWidth='1px'
                borderColor='gray.100'
                padding={2}
                children='プログラム一覧'
            />

            <List marginTop='4'>
                {simulationUrlList.map(url => (
                    // <Fragment >
                    <LinkBox
                        key={url}
                        _hover={{ backgroundColor: 'mainLight', color: 'white' }}
                        padding={4}
                        marginX={2}
                        borderBottomWidth='1px'
                        borderColor='gray.100'
                        borderRadius={4}
                    >
                        <ListItem >
                            <LinkingOverlay href={url}>
                                {getPageInfo(url).titleElm}
                            </LinkingOverlay>
                        </ListItem>
                    </LinkBox>
                    // </Fragment>
                ))}
            </List>
        </Box >
    );
}

