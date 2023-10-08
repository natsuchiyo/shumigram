var fs = require('fs');



/**
 * 実行方法
 * npm run createtest -- week-rtns　のように実行する（--の後に空白をあける）
 */

const crlf = (strs) => strs.replace(/\n/g, '\r\n');



fs.writeFileSync(`_tests/${process.argv[ 2 ]}.test.ts`, crlf(
  `import { expect, test } from "@playwright/test";



test('ページ: ${process.argv[ 2 ]}', async ({ page }) => {

  await page.goto('/${process.argv[ 2 ]}');

  await page.getByRole('button', { name: '決定' }).click();
  await expect(page.getByTestId("result")).toContainText('第二種の過誤');
});`
), { flag: "wx" });


