
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { Layout } from './_components/layouts/Layout';
import { MetaHead } from './_components/parts/MetaHead';
import { customTheme } from './_config/theme/theme';
import { Providers } from './_components/layouts/Providers';


// これがないと初回レンダリング時にアイコンサイズがおかしくなる
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;






export default function RootLayout({ children }: PropsWithChildren) {

  return (
    <html lang="ja">
      <body>
        <Providers>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
          <MetaHead />
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
