import { transparentize } from "color2k";
import config from "../../_config/config";
import { theme } from "@chakra-ui/react";


export const semanticTokens = {
    colors: {
        "reverse-header-bg": {
            _light: transparentize((theme as any).colors[config.brandColor][500], 0.1),
            _dark: transparentize((theme as any).colors[config.brandColor][50], 0.1),
        },
        "header-bg": {
            _light: transparentize((theme as any).colors[config.brandColor][50], 0.1),
            _dark: transparentize((theme as any).colors[config.brandColor][900], 0.1),
        },
        "headline-bg": {
            _light: 'gray.50',
            _dark: 'gray.800',
        },
        "paper-bg": {
            _light: "white",
            _dark: "gray.700",
        },
        "chakra-body-bg": {
            _light: "gray.300",
            _dark: "gray.800",
        },
        "text-secondary": {
            _light: "gray.600",
            _dark: "gray.300",
        },
        "article-bg": {
            _light: "white",
            _dark: "gray.900",
        },
        "link": {
            _light: `${config.clickableColor}.700`,
            _dark: `${config.clickableColor}.300`,
        },
    }
};