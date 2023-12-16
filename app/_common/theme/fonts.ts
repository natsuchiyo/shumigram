import { Kosugi_Maru } from "next/font/google";


const kosugimaru = Kosugi_Maru({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false
});



export const fontsTheme = {
    heading: kosugimaru.style.fontFamily,
    body: kosugimaru.style.fontFamily,
};