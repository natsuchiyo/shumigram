import { Box } from "@chakra-ui/react";
import katex from "katex";
import 'katex/dist/katex.min.css';


export const Expression = (props: { children: string; }) => {

    const katexHtml = katex.renderToString(props.children, {
        displayMode: true,
        strict: false,
        throwOnError: false
    });

    return (
        <Box
            data-testid='expression'
            width='full'
            overflowX='auto'
            overflowY='hidden'
            fontSize='lg'
            dangerouslySetInnerHTML={{ __html: katexHtml }}
        />
    );
};