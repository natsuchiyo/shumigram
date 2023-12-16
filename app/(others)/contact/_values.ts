import { ObjectSchema, object, string } from "yup";
import { createYupResolver } from "../../_common/components/forms/parts/formErrorMessage";


export type FormValuesType = {
    name?: string;
    email: string;
    message: string;
};

export type PostBodyType = FormValuesType & {
    recaptcha_response: string;
};


const schema: ObjectSchema<FormValuesType> = object({
    name: string(),
    email: string().email().required(),
    message: string().required()
});


export const resolver = createYupResolver(schema);




export const postContact = async (url: string, args: { arg: PostBodyType; }) => {
    return await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args.arg),
    }).then(res => res.json());
};