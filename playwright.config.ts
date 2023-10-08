import { PlaywrightTestConfig, devices } from '@playwright/test';


// // 開発環境でのテスト
const baseURL = 'http://localhost:3000';


// 本番環境でのテスト
// const baseURL = 'https://probabi.com';



const config: PlaywrightTestConfig = {
    timeout: 30 * 1000,
    testDir: '_tests',
    outputDir: '_tests/test-results/',
    fullyParallel: true,

    use: {
        baseURL,
        video: 'retain-on-failure',
    },

    projects: [
        {
            name: 'Desktop Chrome',
            use: { ...devices['Desktop Chrome'], },
        },
        // {
        //     name: 'Mobile Chrome',
        //     use: { ...devices['Pixel 5'], },
        // },
        // {
        //     name: 'Mobile Safari',
        //     use: { ...devices['iPhone 12'] },
        // },
        // {
        //   name: 'Desktop Firefox',
        //   use: {
        //     ...devices['Desktop Firefox'],
        //   },
        // },
        // {
        //   name: 'Desktop Safari',
        //   use: {
        //     ...devices['Desktop Safari'],
        //   },
        // },
    ],
};


export default config;