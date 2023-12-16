'use client';

import React, { useState, useCallback, useMemo, useEffect, useRef, DependencyList } from "react";



/**
 * componentをuseMemoで囲む場合に見やすくするだけのフック
 */
export const useMemorize = (deps: DependencyList, Component: JSX.Element) => {
    return useMemo(() => Component, deps);
};



/**
 * stateがbooleanのフック。返り値は配列
 * @param initialBool stateの初期値。デフォルトはfalse
 * @returns 
 */
export const useToggle = (initialBool = false) => {

    const [isTrue, setState] = useState(initialBool);

    const toggle = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setState(isTrue => !isTrue);
    }, []);

    return [isTrue, toggle] as const;
};



/**
 * callback関数をinterval間隔で繰り返す
 * @param callback 実行するコールバック関数
 * @param isRunning 実行中か否か
 * @param interval インターバル間隔
 */
export const useRun = (callback: any, isRunning: boolean, interval: number) => {

    const timerId = useRef(0);
    const intervalRef = useRef(interval);
    intervalRef.current = interval;

    const run = () => {
        timerId.current = window.setTimeout(run, intervalRef.current);
        callback();
    };


    useEffect(() => {
        if (isRunning) {
            run();
            return () => window.clearTimeout(timerId.current);
        }
    }, [isRunning]);
};

