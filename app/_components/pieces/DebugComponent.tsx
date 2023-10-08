import { notice } from "../../_functions/console";

export const DebugComponent = (props: { text?: string; }) => {

    notice('DebugComponent--------------' + props.text + '------------------------');

    return null;
};