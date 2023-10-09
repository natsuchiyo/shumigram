export const isProduction = process.env.NODE_ENV === "production";
export const isDevelop = process.env.NODE_ENV === "development";
export const isTest = process.env.NODE_ENV === "test";
export const baseUrl = process.env.GITHUB_ACTIONS ? "/shumigram" : "";
