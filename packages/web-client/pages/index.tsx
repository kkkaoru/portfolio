import Head from 'next/head';
import { Top } from '@web/components/src/components/templates/top';
import { useRandomEmoji } from '@web/components/src/utils/emoji/hooks';
import { Icon } from '@/components/next-image';
import { twitterId } from '@/utils/twitter';

type HomeProps = {
  overwriteEmoji?: string;
};

// @swc/jest can't work mock in jest, can be fixed emoji
// @link https://github.com/swc-project/jest/issues/14
export default function Home({ overwriteEmoji }: HomeProps): JSX.Element {
  const randomEmoji = useRandomEmoji();
  const emoji = overwriteEmoji ?? randomEmoji;
  return (
    <div>
      <Head>
        <title>kkkaoru&apos;s site</title>
        <meta name="description" content="kkkaoru's site. Front end developer." />
        <meta property="og:title" content="kkkaoru's site" />
        <meta property="og:description" content="kkkaoru's site. Front end developer." />
        <meta property="og:image" content="https://www.kkkaoru.net/ogp.png" />
        <meta name="twitter:site" content={`@${twitterId}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href={emoji} />
      </Head>
      <main>
        <Top
          emoji={emoji}
          ImageComponent={Icon}
          twitterId={twitterId}
          githubId="kkkaoru"
          repositoryLink="https://github.com/kkkaoru/portfolio"
          contactLink="https://docs.google.com/forms/d/1JJ6KDNZPb9F2nfb1RBZuOuoZZelDARLo0M5s39f6cS0/viewform?edit_requested=true"
          footerText="&copy;&nbsp;kaoru"
        />
      </main>
    </div>
  );
}
