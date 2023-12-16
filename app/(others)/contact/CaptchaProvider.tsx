'use client';

import { PropsWithChildren } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';



export function CaptchaProvider(props: PropsWithChildren) {

    if (process.env.NEXT_PUBLIC_RECAPTCHA_KEY === undefined) return null;

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
            scriptProps={{ async: true }}
        >
            {props.children}
        </GoogleReCaptchaProvider>
    );
};