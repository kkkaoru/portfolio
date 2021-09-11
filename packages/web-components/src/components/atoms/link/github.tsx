import { ReactComponent as GithubLogo } from '@web-components/assets/brand/github/black.svg';
import { LinkIncludedChildren } from './link-included-children';
import { generateGitHubUrl } from './functions';
import type { SnsLinkProps } from './types';

export function GitHubLink({ id, ariaLabel = 'GitHub', ...linkProps }: SnsLinkProps): JSX.Element {
  const gitHubUrl = generateGitHubUrl(id);
  if (gitHubUrl === undefined) {
    return <></>;
  }
  return (
    <LinkIncludedChildren href={gitHubUrl} ariaLabel={ariaLabel} {...linkProps}>
      <GithubLogo />
    </LinkIncludedChildren>
  );
}
