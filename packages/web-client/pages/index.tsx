import Head from 'next/head';

import { TwitterLink } from '@web/components/src/components/atoms/link';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Example nextjs, typescript, tailwindcss</title>
        <meta name="description" content="Example nextjs, typescript, tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Web client</h1>
        <TwitterLink twitterId="kkk4oru" />
      </main>
    </div>
  );
}
