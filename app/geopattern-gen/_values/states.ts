import { atom, selector, selectorFamily } from "recoil";
import { CircleKeyType } from "../_types/_types";
import { geometricSamples } from "./samples";



export const circlesAtom = atom({
    key: 'circlesAtom',
    default: geometricSamples[0].circles
});


export const bgColorAtom = atom({
    key: 'bgColorAtom',
    default: geometricSamples[0].bgColor
});



export const circlesLengthSelector = selector({

    key: 'circlesLengthSelector',

    get: ({ get }) => {
        return get(circlesAtom).length;
    }
});



export const circleValueSelectorFamily = selectorFamily<any, { circleIndex: number; circleKey: CircleKeyType; }>({

    key: 'circleValueSelectorFamily',

    get: ({ circleIndex, circleKey }) => ({ get }) => {
        return get(circlesAtom)[circleIndex][circleKey];
    },

    set: ({ circleIndex, circleKey }) => ({ get, set }, newValue) => {

        const newCircles = [...get(circlesAtom)];
        newCircles[circleIndex] = { ...newCircles[circleIndex], [circleKey]: newValue };

        set(circlesAtom, newCircles);
    }
});