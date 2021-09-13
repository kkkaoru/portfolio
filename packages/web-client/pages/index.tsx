import Head from 'next/head';
import { Top } from '@web/components/src/components/templates/top';
import { Icon } from '@/components/next-image';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>kkkaoru&apos;s site</title>
        <meta name="description" content="kkkaoru's site. Front end developer." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Top
          ImageComponent={Icon}
          twitterId="kkk4oru"
          githubId="kkkaoru"
          contactLink="https://docs.google.com/forms/d/1JJ6KDNZPb9F2nfb1RBZuOuoZZelDARLo0M5s39f6cS0/viewform?edit_requested=true"
          footerText="&copy;&nbsp;kaoru"
        />
      </main>
    </div>
  );
}
