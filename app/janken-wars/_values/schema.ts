
import { object, number } from "yup";
import { SettingValuesType } from "../_types";
import { maxHandSize } from "./_constants";
import { createYupResolver } from "../../_common/components/forms/parts/formErrorMessage";




const testTotalHandSize = {
    name: 'max',
    exclusive: true,
    params: {},
    message: `個数の合計を${maxHandSize}以下にしてください`,
    test: (_: any, context: any) => {
        return context.parent.rock + context.parent.paper + context.parent.scissors <= maxHandSize;
    }
};

export const resolver = createYupResolver<SettingValuesType>(
    object({
        rock: number().positive().integer().required().test(testTotalHandSize),
        scissors: number().positive().integer().required().test(testTotalHandSize),
        paper: number().positive().integer().required().test(testTotalHandSize),
        speed: number().negative().integer().required(),
    })
);

