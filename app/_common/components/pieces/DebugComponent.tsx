import { notice } from "../../functions/console";

export const DebugComponent = (props: { text?: string; }) => {

    notice('DebugComponent--------------' + props.text + '------------------------');

    return null;
};