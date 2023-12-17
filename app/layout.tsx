
import { PropsWithChildren } from 'react';
import { Layout } from './_common/components/layouts/Layout';
import { Providers } from './_common/components/layouts/Providers';


// これがないと初回レンダリング時にアイコンサイズがおかしくなる
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;





export default function RootLayout({ children }: PropsWithChildren) {

  return (
    <html lang="ja">
      <body>
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
