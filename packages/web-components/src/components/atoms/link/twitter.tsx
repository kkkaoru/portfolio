import { ReactComponent as TwitterLogo } from '@web-components/assets/brand/twitter/blue.svg';
import { LinkIncludedChildren } from './link-included-children';
import { generateTwitterUrl } from './functions';
import type { SnsLinkProps } from './types';

export function TwitterLink({ id, ariaLabel = 'Twitter', ...linkProps }: SnsLinkProps): JSX.Element {
  const twitterUrl = generateTwitterUrl(id);
  if (twitterUrl === undefined) {
    return <></>;
  }
  return (
    <LinkIncludedChildren href={twitterUrl} ariaLabel={ariaLabel} {...linkProps}>
      <TwitterLogo />
    </LinkIncludedChildren>
  );
}
