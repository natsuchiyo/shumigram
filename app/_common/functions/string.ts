export const replaceHalfToFull = (str: string) => {
    return str.replace(/[0-9a-zA-Z]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 0xFEE0));
};