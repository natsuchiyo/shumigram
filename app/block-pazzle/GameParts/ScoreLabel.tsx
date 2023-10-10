'use client';

import { useContext, memo } from "react";
import styled from "@emotion/styled";
import { backColor, canvasTextColor } from "../_values";
import { BlockPazzleContext } from "../MainGame";



const ScoreLabelComponent = memo(function ScoreLabelComponent(props: { score: number; }) {

    return (
        <ScoreDiv>
            <LeftScore>SCORE</LeftScore>
            <RightScore>{props.score}</RightScore>
        </ScoreDiv>
    );
});



export const ScoreLabel = memo(function ScoreLabel() {
    const [state] = useContext(BlockPazzleContext);
    return <ScoreLabelComponent score={state.score} />;
});



const LeftScore = styled.span({
    paddingLeft: 3,
});


const RightScore = styled.span({
    float: 'right',
});


const ScoreDiv = styled.div({
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    right: 0,
    color: backColor,
    margin: 5,
    width: 140,
    border: `double 3px ${backColor}`,
    borderRadius: 5,
    backgroundColor: canvasTextColor,
    fontWeight: 'bold'
});

