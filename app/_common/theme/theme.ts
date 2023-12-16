import { extendTheme, theme, withDefaultColorScheme } from "@chakra-ui/react";
import { ButtonTheme } from "./button";
import { globalTheme } from "./global";
import { InputTheme, TextAreaTheme } from "./input";
import { SelectTheme } from "./select";
import { TableTheme } from "./table";
import { fontsTheme } from "./fonts";
import { semanticTokens } from "./semantics";
import config from "../../_config/config";


const defaultTheme = theme as any;


export const customTheme = extendTheme(

    withDefaultColorScheme({ colorScheme: config.brandColor }),

    {
        colors: {
            mainLight: defaultTheme.colors[config.brandColor][config.brandLightNum],
            mainDark: defaultTheme.colors[config.brandColor][config.brandDarkNum],
            button: defaultTheme.colors[config.clickableColor][500],
            accent: defaultTheme.colors[config.accentColor][500],
            // link: theme.colors[clickableColor][600],
            warning: defaultTheme.colors.red[500],
            subtext: defaultTheme.colors.gray[600],
        },

        breakpoints: {
            sm: '500px',
            md: '728px',
            lg: '1028px',
            xl: '1279px',
            '2xl': '1530px',
        },

        zIndices: {
            // overlayよりは低い値にする
            layout: 1250,
        },

        config: {
            initialColorMode: config.initialColorMode,
            useSystemColorMode: false,

        },

        fonts: fontsTheme,

        styles: { global: globalTheme },

        components: {
            Button: ButtonTheme,
            Input: InputTheme,
            Select: SelectTheme,
            Table: TableTheme,
            Textarea: TextAreaTheme
        },

        semanticTokens,
    });
