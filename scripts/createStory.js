var fs = require('fs');

/**
 * 実行方法
 * npm run create-story -- forms NumberInput　のように実行する（--の後に空白をあける）
 */


const path = 'src/stories/' + process.argv[2] + '/' + process.argv[3] + '.stories.tsx';
const crlf = (strs) => strs.replace(/\n/g, '\r\n');


// fs.mkdirSync(directory);


fs.writeFileSync(path, crlf(
    `import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';


export default {
    title: '${process.argv[2] + '/' + process.argv[3]}',
    component: ${process.argv[3]},
} as Meta;


const Template: Story = (args: any) => <${process.argv[3]} {...args} />;

export const Default = Template.bind({});
Default.args = {

};`
), { flag: "wx" });