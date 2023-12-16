'use client';

import { ChakraProvider, ColorModeScript, createLocalStorageManager } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import { customTheme } from "../../theme/theme";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { toastDefaultOptions } from "../../functions/hooks/useToast";
import config from "../../../_config/config";


const manager = createLocalStorageManager(config.websiteName + "-chakra-ui-color-mode");


export function Providers({ children }: PropsWithChildren) {

    return (
        <RecoilRoot>
            <ChakraProvider theme={customTheme} toastOptions={toastDefaultOptions} colorModeManager={manager}>
                <GoogleAnalytics trackPageViews />
                <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
                {children}
            </ChakraProvider>
        </RecoilRoot>
    );
};