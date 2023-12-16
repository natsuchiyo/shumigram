import { getBrandColor } from "../functions/theme";


export const globalTheme = {
    body: {
        letterSpacing: '2px',
        lineHeight: "1.7",
    },
    'body::-webkit-scrollbar': {
        paddingTop: '40px',
        width: '8px',
        height: '8px'
    },
    '::-webkit-scrollbar': {
        width: '5px',
        height: '5px'
    },
    '::-webkit-scrollbar-track': {
        background: 'gray.200',
    },
    '::-webkit-scrollbar-thumb': {
        background: getBrandColor(300),
        borderRadius: '5px'
    }
};