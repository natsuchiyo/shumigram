'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Title } from '../../_components/parts/Title';;
import { MainContents } from '../../_components/layouts/MainContents';
import { ContactForm } from './ContactForm';




export default function Page() {

    return (
        <GoogleReCaptchaProvider reCaptchaKey="6Le_paIUAAAAACyMS6SHCxrpVVikuBi61qwgh--l" scriptProps={{ async: true }}>
            <MainContents>
                <Title />
                <ContactForm />
            </MainContents>
        </GoogleReCaptchaProvider>
    );
};
