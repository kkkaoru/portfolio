import { TwitterLink, GitHubLink } from '@web-components/components/atoms/link';

export type SnsLinksProps = {
  twitterId?: string;
  githubId?: string;
};

export function ListSnSLinks({ twitterId, githubId }: SnsLinksProps): JSX.Element {
  if (twitterId === undefined && githubId === undefined) {
    return <></>;
  }
  return (
    <ul className="max-w-sm pt-5 mx-auto grid grid-cols-2 place-items-center">
      {twitterId && (
        <li>
          <TwitterLink id={twitterId} />
        </li>
      )}
      {githubId && (
        <li>
          <GitHubLink id={githubId} isReversedAnimation />
        </li>
      )}
    </ul>
  );
}
