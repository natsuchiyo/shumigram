
import { Title } from '../../_common/components/parts/Title';;
import { MainContents } from '../../_common/components/layouts/MainContents';
import { ContactForm } from './ContactForm';
import { createMetadata } from '../../_common/functions/urls/createMetadata';
import { CaptchaProvider } from './CaptchaProvider';




export default function Page() {

    return (
        <CaptchaProvider>
            <MainContents>
                <Title />
                <ContactForm />
            </MainContents>
        </CaptchaProvider>
    );
};


export const metadata = createMetadata('/contact');