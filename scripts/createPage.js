var fs = require('fs');

/**
 * 実行方法
 * npm run createpage -- forex week-rtns　のように実行する（--の後に空白をあける）
 */

const directory = 'src/pages/' + process.argv[ 2 ] + '/' + process.argv[ 3 ];
const crlf = (strs) => strs.replace(/\n/g, '\r\n');


fs.mkdirSync(directory);


// indexファイル
fs.writeFileSync(directory + '/index.tsx', crlf(
    `import  { memo, useState } from 'react';
import { pageValues, initialState } from "./values";
import { HeaderSection } from '../../_components/wrapper/HeaderSection';
import { Description } from './Description';
import { LayoutedPageContent } from '../../_components/layouts/LayoutedPageContent';
import { D3Svg } from '../../_components/d3/D3Svg';
import { d3Domain, d3Margin } from '../../_components/d3/_functions/util';
import { getResponsiveSize } from '../../_functions/util';
import { FormWithButton } from '../../_components/forms/FormWithButton';



export default memo(() => {

    const [state, setState] = useState(initialState);


    return (
        <LayoutedPageContent pageValues={pageValues}>
            <HeaderSection settingArea label='設定' padding='20px 20px 20px 20px' >
                <InputFormWithButton buttonLabel='計算' initialValues={state} onExec={setState}>

                </InputFormWithButton>
            </HeaderSection>
            <HeaderSection label='結果'>
                <D3Svg {...d3Props}>

                </D3Svg>
            </HeaderSection>
            <Description/>
        </LayoutedPageContent>
    );
});



const d3Props = createD3SvgProps({
    domain: d3Domain(0, 0, 0, 0),
    size: getResponsiveSize(500, 500),
    margin: d3Margin(0, 0, 50, 60),
    innerMargin: d3Margin(10, 10, 0, 0),
    labelX: '',
    labelY: '',
    axisX: {
    },
    axisY: {
    },
});`
), { flag: "wx" });



// 説明コンポーネント
fs.writeFileSync(directory + '/Description.tsx', crlf(
    `import { memo } from "react";
import { DescriptionSection } from "../../_components/wrapper/DescriptionSection";


export const Description = memo(() => {
    return (
        <DescriptionSection title='使いかた'>
            
        </DescriptionSection>
    );
});`
), { flag: "wx" });



// values設定ファイル
fs.writeFileSync(directory + '/values.ts', crlf(
    `import { PageValueType } from "../../_components/layouts/Layout";

export type StateType = {
   
};


export const initialState:StateType = {
   
};


export const pageValues: PageValueType = {
        relationPathArray: [
            '/stocks/correlation',
            '/stocks/correlation',
            '/stocks/correlation',
        ]
}`
), { flag: "wx" });




fs.writeFileSync(directory + '/functions.ts', crlf(
    `import {  StateType } from "./values";

export const calcData = (state:StateType) => {
   
};`
), { flag: "wx" });




fs.writeFileSync(`src/_tests/${process.argv[ 2 ]}/${process.argv[ 3 ]}.test.tsx`, crlf(
    `import {  screen } from '@testing-library/react';
import { pageRender, wait} from '../+functions/pageRender';
import Page from '../../pages/${process.argv[ 2 ]}/${process.argv[ 3 ]}';



test('ページ: ${process.argv[ 3 ]}', async () => {
  
  const { user } = pageRender(<Page />);
  
// screen.getByRole('');
// screen.debug(undefined, 100000);
// await user.selectOptions()
// wait()
//  changeInput()
// expect().toBeInTheDocument()

  expect(await screen.findAllByTestId('chart-line')).toHaveLength(2)

  user.clickButton();


});`
), { flag: "wx" });