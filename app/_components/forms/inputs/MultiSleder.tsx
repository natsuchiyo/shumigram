'use client';

import styled from '@emotion/styled';
import { memo, ReactNode } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { IProps } from 'react-range/lib/types';




export const MultiSlider = memo(function MultiSlider({ colors = ['gray', 'gray', 'gray'], labels, ...props }: Partial<IProps> & Pick<IProps, 'values' | 'onChange' | 'min' | 'max'> & {
    colors?: string[];
    labels?: ReactNode[];
}) {


    return (
        <Range
            {...props}

            renderTrack={({ props: trackProps, children }) => (
                <TrackDiv
                    {...trackProps}
                    style={{
                        ...trackProps.style,
                        background: getTrackBackground({ colors, ...props }),
                    }}
                >
                    {children}
                </TrackDiv>
            )}

            renderThumb={({ props: thumbProps, index }) => (
                <ThumbDiv  {...thumbProps} >
                    {labels && <LabelDiv>{labels[index]}</LabelDiv>}
                </ThumbDiv>
            )}
        />
    );
});



const TrackDiv = styled.div({
    height: '5px',
    width: '100%',
    borderRadius: '4px',
    alignSelf: 'center'
});




const ThumbDiv = styled.div({
    backgroundColor: 'white',
    width: 12,
    height: 20,
    borderRadius: 4,
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.26)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});


const LabelDiv = styled.div({
    position: 'absolute',
    top: '-28px',
    color: '#fff',
    fontSize: '70%',
    fontFamily: 'sans-serif',
    padding: 3,
    borderRadius: 3,
    backgroundColor: 'navy',
    width: 'max-content'
});