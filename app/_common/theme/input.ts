import { getBrandColor } from "../functions/theme";


export const InputTheme = {
    baseStyle: {
        field: {
            textAlign: 'center'
        },
    },
    variants: {
        outline: {
            field: {
                height: "auto",
            },
        },
        filled: {
            field: {
                height: "auto",
            },
        },
    },
    defaultProps: {
        focusBorderColor: getBrandColor(300),
    },
};

export const TextAreaTheme = {
    defaultProps: {
        focusBorderColor: getBrandColor(300),
    },
};