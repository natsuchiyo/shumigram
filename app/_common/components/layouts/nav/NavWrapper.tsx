'use client';

import { useBreakpointValue, Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavDrawer } from "./NavDrawer";



export const NavWrapper = (props: { children: ReactNode; }) => {


    const isFixedNav = useBreakpointValue({ base: false, xl: true })!;


    return (
        isFixedNav
            ? <Box zIndex='layout' position='fixed' height='full' children={props.children} />
            : <NavDrawer children={props.children} />
    );
};