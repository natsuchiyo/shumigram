'use client';

import { Canvas, Props } from "@react-three/fiber";
import { useContext } from "react";




export const ContextCanvas = <T extends any = any>({ context, ...props }: Props & {
    context: React.Context<T>;
}) => {


    const contextValue = useContext(context);


    return (
        <Canvas {...props}>
            <context.Provider value={contextValue}>
                {props.children}
            </context.Provider>
        </Canvas>
    );
};