'use client';

import { Draft } from "immer";
import { useState, useCallback, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { useImmer } from "use-immer";


/**
 * ummountされた場合にはsetStateできないようにしたuseState
 * 使いかたはuseStateと同じ
 */
export const useSafeState = <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] => {

    const [state, setState] = useState(initialState);
    const isMount = useRef(false);

    const setSafeState = useCallback(
        (value: SetStateAction<S>) => {
            if (isMount.current) {
                setState(value);
            }
        }, []
    );


    useEffect(() => {
        isMount.current = true;
        return () => { isMount.current = false; };
    }, []
    );

    return [state, setSafeState];
};



/**
 * ummountされた場合にはsetStateできないようにしたuseImmer
 * 使いかたはuseImmerと同じ
 */
export const useSafeImmer = <S>(initialState: S | (() => S)): [S, (f: ((draft: Draft<S> | S) => void) | S) => void] => {

    const [state, setState] = useImmer(initialState);
    const isMount = useRef(false);

    const setSafeState = useCallback(
        (value: S | ((draft: S | Draft<S>) => void)) => {
            if (isMount.current) {
                setState(value);
            }
        }, []
    );

    useEffect(() => {
        isMount.current = true;
        return () => { isMount.current = false; };
    }, []
    );

    return [state, setSafeState];
};