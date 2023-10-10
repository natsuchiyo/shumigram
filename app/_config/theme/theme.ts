import { extendTheme, theme, withDefaultColorScheme } from "@chakra-ui/react";
import { ButtonTheme } from "./button";
import { globalTheme } from "./global";
import { InputTheme, TextAreaTheme } from "./input";
import { SelectTheme } from "./select";
import { TableTheme } from "./table";
import { fontsTheme } from "./fonts";



export const customTheme = extendTheme(

    withDefaultColorScheme({ colorScheme: 'pink' }),

    {
        colors: {
            mainLight: theme.colors.pink[400],
            mainDark: theme.colors.pink[700],
            button: theme.colors.pink[500],
            accent: theme.colors.green[500],
            link: theme.colors.cyan[600],
            warning: theme.colors.red[500],
            subtext: theme.colors.gray[600],
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
            initialColorMode: 'light',
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
        }
    });
