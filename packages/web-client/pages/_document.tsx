import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { generateGTMScriptTemplate } from '@/utils/gtm';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: generateGTMScriptTemplate(),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
