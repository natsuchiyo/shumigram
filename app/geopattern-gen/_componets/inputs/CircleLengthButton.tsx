import { Button } from "@chakra-ui/react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { circlesLengthSelector, circlesAtom } from "../../_values/states";
import { createDefaultCircle } from "../../_functions/utils";
import { maxCirclesLength } from "../../_values/constants";



export function CircleLengthButton({ type }: { type: 'add' | 'delete'; }) {

    const circlesLength = useRecoilValue(circlesLengthSelector);

    const defaultProps = type === 'add'
        ? {
            isDisabled: circlesLength >= maxCirclesLength,
            children: '線追加'
        }
        : {
            isDisabled: circlesLength <= 1,
            children: '線削除'
        };


    const onClick = useRecoilCallback(({ snapshot, set }) => async () => {

        const newCircles = [...await snapshot.getPromise(circlesAtom)];
        if (type === 'add') {
            newCircles.push(createDefaultCircle());
        } else {
            newCircles.pop();
        }


        set(circlesAtom, newCircles);
    });


    return (
        <Button
            variant='outline'
            size='xs'
            onClick={onClick}
            {...defaultProps}
        />
    );
};