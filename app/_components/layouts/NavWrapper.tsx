'use client';


import { useBreakpointValue, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { headerHeight, leftNavWidth } from "./_values";
import { HamburgerIcon, SmallCloseIcon } from "../chakraIcons";



export const NavWrapper = (props: { children: ReactNode; }) => {


    const isFixedNav = useBreakpointValue({ base: false, xl: true })!;

    const { isOpen, onClose, onToggle } = useDisclosure();


    return (
        isFixedNav
            ? <Box zIndex='layout' position='fixed' height='full' children={props.children} />
            : (
                <>
                    <IconButton
                        zIndex='layout'
                        position='fixed'
                        // top={'-' + headerHeight}
                        top={0}
                        width={headerHeight}
                        height={headerHeight}
                        aria-label='nav button'
                        bg='transparent'
                        color='white'
                        icon={isOpen ? <SmallCloseIcon boxSize='8' /> : <HamburgerIcon boxSize='8' />}
                        onClick={onToggle}
                    />
                    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>

                        <DrawerOverlay
                            top={headerHeight + '!important'}
                            bg='blackAlpha.400' backdropFilter='blur(2px)'
                        />

                        <DrawerContent
                            top={headerHeight + '!important'}
                            width={leftNavWidth + '!important'}
                            onClick={onClose}
                            children={props.children}
                        />
                    </Drawer>
                </>
            )
    );
};